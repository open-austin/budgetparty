import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase'

import { config } from './config/constants';
import services from './data/services';
import departments from './data/departments';
import rootReducer from './reducers/index';

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(config, { userProfile: 'users' }),
)(createStore)

const defaultState = {
  services,
  departments,
}

const store = createStoreWithFirebase(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
