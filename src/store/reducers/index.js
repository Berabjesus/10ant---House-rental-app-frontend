import { combineReducers } from 'redux';
import authentication from './authReducer';
import statusReducer from './statusReducer';
import postReducer from './postReducer'
import content from './displayReducer'
import view from './viewReducer'

const rootReducer = combineReducers({
  authentication,
  status : statusReducer,
  postReducer,
  content,
  view
});

export default rootReducer;
