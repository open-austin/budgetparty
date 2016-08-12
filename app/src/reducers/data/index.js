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

function departments(state = InitialState.data.departments, action = {}) {
  switch (action.type) {
    case CHANGE_DEPARTMENT_AMOUNT:


      return state;
      // return Object.assign({}, state, {  });
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
