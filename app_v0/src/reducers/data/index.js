import { combineReducers } from 'redux';
import { sum } from 'lodash';

import InitialState from 'constants/InitialState';

import {
  CHANGE_DEPARTMENT_AMOUNT,
  UPDATE_SERVICE_SPENDING_AMOUNT,
  RESET_DEPARTMENT_AMOUNT,
} from 'constants/ActionTypes';

function replacedDepartmentState(state, departmentId, departmentUpdate) {
  let percentChange = state.percentChange + departmentUpdate;
  percentChange = percentChange < -100 ? -100 : percentChange;
  const amount = state.lastYearAmount * (1 + (percentChange / 100));

  return Object.assign({}, state, { amount, percentChange });
}

function resetDepartmentState(state) {
  return Object.assign({}, state, { percentChange: 0, amount: state.lastYearAmount });
}

function reducer(state = InitialState.data, action = {}) {
  switch (action.type) {
    case CHANGE_DEPARTMENT_AMOUNT:
      const updatingDepartmentIndex = action.department - 1;
      const updatedDepartments = [
        ...state.departments.slice(0, updatingDepartmentIndex),
        replacedDepartmentState(state.departments[updatingDepartmentIndex], action.department - 1, action.amount),
        ...state.departments.slice(action.department),
      ];
      return Object.assign({}, state, { departments: updatedDepartments });
    case UPDATE_SERVICE_SPENDING_AMOUNT:
      const servicesSum = sum(state.departments.map((d) => d.amount));
      return Object.assign({}, state, { servicesSum });
    case RESET_DEPARTMENT_AMOUNT:
      const departmentIndex = action.department - 1;
      const resetDepartments = [
        ...state.departments.slice(0, departmentIndex),
        resetDepartmentState(state.departments[departmentIndex]),
        ...state.departments.slice(action.department),
      ];
      return Object.assign({}, state, { departments: resetDepartments });
    default:
      return state;
  }
}

export default reducer;
