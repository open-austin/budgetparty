import InitialState from '../config/InitialState';

function levels(state = InitialState.levels, action = {}) {
  switch (action.type) {
    case "UPDATE_SERVICE_STATUS":
      return state;
    default:
      return state;

  }
}

export default levels;
