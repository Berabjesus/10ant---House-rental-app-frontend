import { combineReducers } from 'redux';
// import loginReducer from './loginReducer';
// import signupReducer from './createWatchListReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
  // session: loginReducer,
  // signup: signupReducer,
  status : statusReducer
});

export default rootReducer;
