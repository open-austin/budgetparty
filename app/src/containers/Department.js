import _ from 'underscore'
import { connect } from 'react-redux'
import Department from '../components/Department'

import { changeDepartmentAmount } from '../actions/departments'
import { changeRemainingFundsAmout } from '../actions/funds'
import {
  updateServiceStatus,
  recalculateServiceAmount,
  updateCompletedDepartments,
} from '../actions/services'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickNext: (department, service, serviceDepts, departments, services) => {
      if (!department.amount) {
        dispatch(changeDepartmentAmount(department.deptId, 0))
        console.log(`changeDepartmentAmount to ${department.lastYearAmount} for ${department.deptId}`)
      }
      dispatch(updateCompletedDepartments(service.index, departments))

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

      dispatch(recalculateServiceAmount(service.index, departments))
      dispatch(changeRemainingFundsAmout(services))
    },
    onPercentChange: (dept, percentChange, departments, serviceIndex, services) => {
      const deptPercentChange = dept.amount === null ? 0 : percentChange

      dispatch(changeDepartmentAmount(dept.deptId, deptPercentChange))
      dispatch(recalculateServiceAmount(serviceIndex, departments))
      dispatch(changeRemainingFundsAmout(services))
    },
    resetBudgetAmount: (deptId) => {
      dispatch(changeDepartmentAmount(deptId, 0))
      // TODO: Get reset to recalculate
      // dispatch(recalculateServiceAmount(service.index, departments))
      // TODO: changeRemainingFundsAmout
      // dispatch(changeRemainingFundsAmout(services))

      console.log(`Reset changeDepartmentAmount to ${null} for ${deptId}`)
    },
  }
}

const DepartmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Department)

export default DepartmentContainer
