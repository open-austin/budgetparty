import InitialState from '../config/InitialState';

function departments(state = InitialState.departments, action = {}) {
  const deptId = action.departmentId - 1
  const deptState = state[deptId]
  let newDeptState
  let newState

  switch (action.type) {
    case 'CHANGE_DEPARTMENT_PERCENT_CHANGE':
      newDeptState = deptState

      const newPercentChange = Number(newDeptState.percentChange + action.percentChange)

      newDeptState.percentChange = newPercentChange

      newDeptState.amount =
        (deptState.lastYearAmount * (newPercentChange / 100))
        + deptState.lastYearAmount

      newState = Object.assign({}, state,
        { [deptId]: newDeptState },
      )

      return newState
    case 'UPDATE_EXPLAIN_RESPONSE':
      newDeptState = Object.assign({}, deptState, {})
      newDeptState.explainYourSpending = action.text

      newState = [
        ...state.slice(0, deptId),
        newDeptState,
        ...state.slice(deptId + 1),
      ]

      return newState
    default:
      return state;

  }
}

export default departments;
