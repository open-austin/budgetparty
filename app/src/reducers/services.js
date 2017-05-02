import InitialState from '../config/InitialState';

function services(state = InitialState.services, action = {}) {
  switch (action.type) {
    case "UPDATE_SERVICE_STATUS":
      const { serviceIndex, status } = action
      const serviceState = state[serviceIndex]
      const newServiceState = Object.assign({}, serviceState,
        serviceState.status = status
      )

      const newState = Object.assign({}, state,
        {[serviceIndex]: newServiceState}
      )

      return newState
    default:
      return state;
  }
}

export default services;
