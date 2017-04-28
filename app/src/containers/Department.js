import { connect } from 'react-redux'
import Department from '../components/Department'

const mapStateToProps = (state) => {
  return state
}

const DepartmentContainer = connect(
  mapStateToProps,
)(Department)

export default DepartmentContainer
