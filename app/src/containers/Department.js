import _ from 'underscore'
import { connect } from 'react-redux'
import Department from '../components/Department'
import { database } from '../config/constants'

import {
  changeDepartmentPercentChange,
  resetDepartmentPercentChange,
} from '../actions/departments'
import { changeRemainingFundsAmout } from '../actions/funds'
import {
  updateServiceStatus,
  recalculateServiceAmount,
  updateCompletedDepartments,
} from '../actions/services'

const persistToFirebase = (userId, departments) => {
  if (!userId) return false
  const departmentArray = Object.keys(departments).map(key => departments[key])
  const departmentsArray = departmentArray.map((item) => {
    return {
      item: item.name,
      amount: item.amount,
      explain: item.explainYourSpending,
    }
  });

  return database.app.database()
          .ref(`userResults/${userId}`)
          .update({ userBudget: departmentsArray })
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickNext: (department, service, serviceDepts, departments, services, userId) => {
      if (!department.amount) {
        dispatch(changeDepartmentPercentChange(department.deptId, 0))
      }
      dispatch(updateCompletedDepartments(service.index, departments))

      const departmentAmounts = serviceDepts.map((dept) => {
        return departments[dept - 1].amount
      });
      const hasProgress = _.find(departmentAmounts, amt => Number.isFinite(amt))
      const isIncomplete = _.contains(departmentAmounts, null)

      if (hasProgress && isIncomplete) {
        dispatch(updateServiceStatus(service.index, 'in_progress'))
      } else {
        dispatch(updateServiceStatus(service.index, 'complete'))
      }

      dispatch(recalculateServiceAmount(service.index, departments))
      dispatch(changeRemainingFundsAmout(services))
      persistToFirebase(userId, departments)
    },
    onPercentChange: (dept, percentChange, departments, serviceIndex, services) => {
      dispatch(changeDepartmentPercentChange(dept.deptId, percentChange))
      dispatch(recalculateServiceAmount(serviceIndex, departments))
      dispatch(changeRemainingFundsAmout(services))
    },
    resetBudgetAmount: (deptId) => {
      dispatch(resetDepartmentPercentChange(deptId))
      // dispatch(recalculateServiceAmount(service.index, departments))
      // dispatch(changeRemainingFundsAmout(services))
    },
  }
}

const DepartmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Department)

export default DepartmentContainer
