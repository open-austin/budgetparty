import InitialState from '../config/InitialState';

function departments(state = InitialState.departments, action = {}) {
  switch (action.type) {
    case "CHANGE_DEPARTMENT_AMOUNT":
      const deptId = action.departmentId - 1
      const deptState = state[deptId]
      const newDeptState = Object.assign({}, deptState,
        deptState.amount = action.amount
      )

      const newState = Object.assign({}, state,
        {[deptId]: newDeptState}
      )

      return newState
    default:
      return state;

  }
}

export default departments;
