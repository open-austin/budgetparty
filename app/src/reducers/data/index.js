import { combineReducers } from 'redux';

import InitialState from 'constants/InitialState';

import {
  CHANGE_DEPARTMENT_AMOUNT,
} from 'constants/ActionTypes';

function generalFund(state = InitialState.data.generalFund, action = {}) {
  switch (action.type) {
    case 'action':
      return state;
    default:
      return state;
  }
}

function servicesSum(state = InitialState.data.servicesSum, action = {}) {
  switch (action.type) {
    case 'action':
      return state;
    default:
      return state;
  }
}

function groups(state = InitialState.data.groups, action = {}) {
  switch (action.type) {
    case 'action':
      return state;
    default:
      return state;
  }
}

function replacedDepartmentState(state, departmentId, departmentUpdate) {
  let newAmount = state.amount + departmentUpdate;
  newAmount = newAmount <= 0 ? 0 : newAmount;

  return Object.assign({}, state, { amount: newAmount });
}

function departments(state = InitialState.data.departments, action = {}) {
  switch (action.type) {
    case CHANGE_DEPARTMENT_AMOUNT:
      const updatingDepartmentIndex = action.department - 1;
      return [
        ...state.slice(0, updatingDepartmentIndex),
        replacedDepartmentState(state[updatingDepartmentIndex], action.department - 1, action.amount),
        ...state.slice(action.department),
      ];
    default:
      return state;
  }
}

export default combineReducers({
  generalFund,
  servicesSum,
  groups,
  departments,
});
