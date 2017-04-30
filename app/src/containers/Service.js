import { connect } from 'react-redux'
import Service from '../components/Service'

const mapStateToProps = (state) => {
  return state
}

const ServiceContainer = connect(
  mapStateToProps
)(Service)

export default ServiceContainer
