import { combineReducers } from 'redux';
import authentication from './authReducer';
import statusReducer from './statusReducer';
import postReducer from './postReducer'

const rootReducer = combineReducers({
  authentication,
  status : statusReducer,
  postReducer
});

export default rootReducer;
