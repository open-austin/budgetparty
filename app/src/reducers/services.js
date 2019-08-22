import _ from 'underscore';
import InitialState from '../config/InitialState';

function services(state = InitialState.services, action = {}) {
  const { serviceIndex, status, departments } = action;
  const newServiceState = state[serviceIndex];
  let newState = [];
  let service,
    departmentIds,
    departmentAmounts;

  switch (action.type) {
    case 'UPDATE_SERVICE_STATUS':
      newServiceState.status = status;

      newState = [
        ...state.slice(0, action.serviceIndex),
        newServiceState,
        ...state.slice(action.serviceIndex + 1),
      ];
      return newState;
    case 'RECALCULATE_SERVICE_AMOUNT':
      service = state[serviceIndex];
      departmentIds = service.departments;
      departmentAmounts = departmentIds.map((dept) => {
        // debugger;
        return departments[dept - 1].amount;
      });
      const departmentLastYearAmounts = departmentIds.map((dept) => {
        return departments[dept - 1].lastYearAmount;
      });
      const sumOfDepartments = _.reduce(
        departmentAmounts,
        (memo, num) => {
          return memo + num;
        },
        0,
      );
      const sumOfLastYearDepartments = _.reduce(
        departmentLastYearAmounts,
        (memo, num) => {
          return memo + num;
        },
        0,
      );

      const delta = Number(
        ((sumOfDepartments - sumOfLastYearDepartments) / sumOfLastYearDepartments * 100).toFixed(2),
      );

      newServiceState.amount = sumOfDepartments;
      newServiceState.percentChange = delta;

      newState = [
        ...state.slice(0, service.index),
        newServiceState,
        ...state.slice(service.index + 1),
      ];

      return newState;
    case 'UPDATE_COMPLETED_DEPARTMENTS':
      service = state[serviceIndex];
      departmentIds = service.departments;
      departmentAmounts = departmentIds.map((dept) => {
        return departments[dept - 1].amount;
      });
      const updatedCount = _.reduce(
        departmentAmounts,
        (memo, num) => {
          // num !== null ? memo++ : memo;
          // return memo;
        },
        0,
      );

      newServiceState.completeSections = updatedCount;
      newState = [
        ...state.slice(0, service.index),
        newServiceState,
        ...state.slice(service.index + 1),
      ];

      return newState;

    default:
      return state;
  }
}

export default services;
