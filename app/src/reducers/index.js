import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase'


import services from './services';
import departments from './departments';
import funds from './funds';

const rootReducer = combineReducers({
  services,
  departments,
  funds,
  firebase: firebaseStateReducer,
});

export default rootReducer;
