import { createStore, compose } from 'redux';

import levels from './data/levels';
import departments from './data/departments';
import rootReducer from './reducers/index';

const defaultState = {
  levels,
  departments,
}

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
