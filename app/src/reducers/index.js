import { combineReducers } from 'redux';

import services from './services';
import departments from './departments';
import funds from './funds';

const rootReducer = combineReducers({
  services,
  departments,
  funds,
});

export default rootReducer;
