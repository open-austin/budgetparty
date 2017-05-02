import InitialState from '../config/InitialState';

function services(state = InitialState.services, action = {}) {
  switch (action.type) {
    case "UPDATE_SERVICE_STATUS":
      const { serviceIndex, status } = action
      const serviceState = state[serviceIndex]

      const newServiceState = Object.assign({}, serviceState,
        serviceState.status = status
      )

      const newState = [
        ...state.slice(0, serviceIndex),
        serviceState,
        ...state.slice(serviceIndex + 1)
      ]

      return newState
    default:
      return state;
  }
}

export default services;
