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
      debugger

      if (hasProgress && isIncomplete) {
        dispatch(updateServiceStatus(service.index, "in_progress"))
      } else {
        dispatch(updateServiceStatus(service.index, "complete"))
      }



      // TODO: dispatch updateServiceStatus
      // action takes service
      // 1. checks if departments from service.departments array have .amout value
        // const departmentAmounts = service.departments.map(dept => {
        //   return this.props.departments[dept - 1].amount
        // });
        //
        // const isIncomplete = _.contains(departmentAmounts, null)
      // 2. updates to
      // "complete, inProgress, locked"
    }
  }
}

const DepartmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Department)

export default DepartmentContainer
