import { combineReducers } from 'redux';

import ideas from './ideas';
import auth from './auth';

export default combineReducers({
  ideas,
  auth,
});
