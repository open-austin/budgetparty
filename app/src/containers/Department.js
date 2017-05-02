import _ from 'underscore'
import { connect } from 'react-redux'
import Department from '../components/Department'

import { changeDepartmentAmount } from '../actions/departments'
import { updateServiceStatus, recalculateServiceAmount } from '../actions/services'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickNext: (department, service, serviceDepts, departments) => {
      if (!department.amount) {
        dispatch(changeDepartmentAmount(department.deptId, department.lastYearAmount))
        console.log(`changeDepartmentAmount to ${department.lastYearAmount} for ${department.deptId}`)
      }
      dispatch(recalculateServiceAmount(service.index, departments))

      const departmentAmounts = serviceDepts.map(dept => {
        return departments[dept - 1].amount
      });
      const hasProgress = _.find(departmentAmounts, amt => Number.isFinite(amt))
      const isIncomplete = _.contains(departmentAmounts, null)

      if (hasProgress && isIncomplete) {
        dispatch(updateServiceStatus(service.index, "in_progress"))
        console.log(`updateServiceStatus to "in_progress" for ${service.index}`)
      } else {
        dispatch(updateServiceStatus(service.index, "complete"))
        console.log(`updateServiceStatus to "complete" for ${service.index}`)
      }
    },
    onPercentChange: (dept, percentChange) => {
      let amount
      if (dept.amount === null) {
        amount = dept.lastYearAmount;
      } else {
        amount = dept.amount
      }

      const newAmount = (amount * percentChange / 100) + amount
      dispatch(changeDepartmentAmount(dept.deptId, newAmount))
      // dispatch(recalculateServiceAmount(service.index, departments))
      console.log(`changeDepartmentAmount to ${newAmount} for ${dept.deptId}`)
    },
    resetBudgetAmount: (deptId) => {
      dispatch(changeDepartmentAmount(deptId, null))
      // dispatch(recalculateServiceAmount(service.index, departments))
      console.log(`Reset changeDepartmentAmount to ${null} for ${deptId}`)
    }
    onUpdateBudgetAmount: () => {
      // TODO
    }
    resetBudgetAmount: () => {
      // TODO
    }
  }
}

const DepartmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Department)

export default DepartmentContainer
