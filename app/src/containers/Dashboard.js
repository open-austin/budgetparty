import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
  return state
}

const DashboardContainer = connect(
  mapStateToProps,
)(Dashboard)

export default DashboardContainer
