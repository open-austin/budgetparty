import InitialState from '../config/InitialState';

function departments(state = InitialState.departments, action = {}) {
  switch (action.type) {
    case "UPDATE_DEPARTMENT_STATUS":
      return state;
    default:
      return state;

  }
}

export default departments;
