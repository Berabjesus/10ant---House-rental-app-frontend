import { combineReducers } from 'redux';
import authentication from './authReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
  authentication,
  // signup: signupReducer,
  status : statusReducer
});

export default rootReducer;
