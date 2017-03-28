import { combineReducers } from 'redux';

import InitialState from 'constants/InitialState';

import {
  SET_GLOBAL_ERROR,
} from 'constants/ActionTypes';

function globalError(state = InitialState.ui.globalError, action = {}) {
  switch (action.type) {
    case SET_GLOBAL_ERROR:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  globalError,
});
