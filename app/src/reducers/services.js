import _ from 'underscore'
import InitialState from '../config/InitialState';

function services(state = InitialState.services, action = {}) {
  const { serviceIndex, status } = action
  let newServiceState = state[serviceIndex]
  let newState = []

  switch (action.type) {
    case "UPDATE_SERVICE_STATUS":
      newServiceState.status = status

      newState = [
        ...state.slice(0, action.serviceIndex),
        newServiceState,
        ...state.slice(action.serviceIndex + 1)
      ]
      return newState
    case "RECALCULATE_SERVICE_AMOUNT":
      const { serviceIndex, departments } = action
      const service = state[serviceIndex]
      const departmentIds = service.departments
      const departmentAmounts = departmentIds.map((dept) => {
        return departments[dept - 1].amount
      })
      const departmentLastYearAmounts = departmentIds.map((dept) => {
        return departments[dept - 1].lastYearAmount
      })
      const sumOfDepartments = _.reduce(departmentAmounts, (memo, num) => {
        return memo + num
      }, 0)
      const sumOfLastYearDepartments = _.reduce(departmentLastYearAmounts, (memo, num) => {
        return memo + num
      }, 0)

      const delta = Math.round((sumOfDepartments - sumOfLastYearDepartments) / sumOfLastYearDepartments * 100)

      console.log(departmentAmounts, sumOfDepartments)
      newServiceState.amount = sumOfDepartments
      newServiceState.percentChange = delta

      newState = [
        ...state.slice(0, service.index),
        newServiceState,
        ...state.slice(service.index + 1)
      ]
      debugger

      return newState
    default:
      return state;
  }
}

export default services;
