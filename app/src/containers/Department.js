import { connect } from 'react-redux'
import Department from '../components/Department'

import { changeDepartmentAmount } from '../actions/departments'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickNext: (department) => {
      if (!department.amount) {
        dispatch(changeDepartmentAmount(department.deptId, department.lastYearAmount))
      }
    }
  }
}

const DepartmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Department)

export default DepartmentContainer
