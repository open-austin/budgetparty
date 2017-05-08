import { connect } from 'react-redux'
import Service from '../components/Service'

import { updateServiceStatus } from '../actions/services'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    onReturnToDashboard: (service) => {
      const nextIndex = service.index + 1;
      dispatch(updateServiceStatus(nextIndex, 'ready'));
      console.log(`updateServiceStatus to "ready" for ${nextIndex}`);
    },
  }
}

const ServiceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Service)

export default ServiceContainer
