import { createStore } from 'redux';

import services from './data/services';
import departments from './data/departments';
import rootReducer from './reducers/index';

const defaultState = {
  services,
  departments,
};

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
