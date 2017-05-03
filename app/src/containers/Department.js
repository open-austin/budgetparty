import _ from 'underscore'
import { connect } from 'react-redux'
import Department from '../components/Department'

import { changeDepartmentAmount } from '../actions/departments'
import { updateServiceStatus } from '../actions/services'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickNext: (department, service, serviceDepts, departments) => {
      if (!department.amount) {dispatch(
        changeDepartmentAmount(department.deptId, department.lastYearAmount)
      )}

      const departmentAmounts = serviceDepts.map(dept => {
        return departments[dept - 1].amount
      });
      const hasProgress = _.find(departmentAmounts, amt => Number.isFinite(amt))
      const isIncomplete = _.contains(departmentAmounts, null)

      if (hasProgress && isIncomplete) {
        dispatch(updateServiceStatus(service.index, "in_progress"))
      } else {
        dispatch(updateServiceStatus(service.index, "complete"))
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
    },
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
