import {
  SET_GLOBAL_ERROR,
} from 'constants/ActionTypes';

export function setGlobalError(errorMessage) {
  return {
    type: SET_GLOBAL_ERROR,
    payload: errorMessage,
  };
}
