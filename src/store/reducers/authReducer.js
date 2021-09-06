import { AUTH_SUCCESS } from '../types';

const initialState = {
  isLoggedIn: false,
  username: '',
  token: null,
  error: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        token: action.payload.token,
        error: null,
      };
    // case LOGOUT:
    //   return {
    //     ...state,
    //     isLoggedIn: false,
    //     username: '',
    //     token: null,
    //     error: null,
    //   };
    default: return state;
  }
};

export default authenticationReducer;
