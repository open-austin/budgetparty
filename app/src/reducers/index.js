import { combineReducers } from 'redux';

import services from './services';
import departments from './departments';

const rootReducer = combineReducers({
  services,
  departments,
});

export default rootReducer;
