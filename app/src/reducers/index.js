import { combineReducers } from 'redux';

import levels from './levels';
import departments from './departments';

const rootReducer = combineReducers({
  levels,
  departments,
});

export default rootReducer;
