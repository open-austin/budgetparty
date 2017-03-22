import { combineReducers } from 'redux';

import ui from 'reducers/ui';
import data from 'reducers/data';

export default combineReducers({
  ui,
  data,
});
