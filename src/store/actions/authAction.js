import { AUTH_SUCCESS, LOGOUT } from '../types';
import { setStatusToLoading, setStatusToSuccess, setStatusToError } from './statusAction';
import {setCredentials} from '../../helpers/tokenHandler'
import jwt_decode from "jwt-decode";
import {globalApi} from './globalUrl'

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});


export const login = (credentials) => (dispatch) => {
  dispatch(setStatusToLoading());
  fetch(`${globalApi}/login`, {
    method: 'POST',
    mode : 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) {          
        response.json().then(data => {
          dispatch(setStatusToError(data.message));
        })
        .catch(console.error);
        throw new Error("Error authAct -- 34");
      }
      return response.json()
    })
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      const decodedToken = jwt_decode(data.token);
      const username = decodedToken.aud;
      const newUserData = {
        username,
        token: data.token
      }
      setCredentials(username, data.token)
      dispatch(authSuccess(newUserData));
      dispatch(setStatusToSuccess());
    })
    .catch((error) => {
      return false;
    });
};


export const signup = (credentials, history) => (dispatch) => {
  dispatch(setStatusToLoading());
  fetch(`${globalApi}/register`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) {
        response.json().then(data => {
          dispatch(setStatusToError(data.message));
        })
        .catch(console.error);
          throw new Error("Error authAct -- 34");
      }
        return response.json()
    })
    .then((data) => {
      const decodedToken = jwt_decode(data.token);
      const username = decodedToken.aud;
      const newUserData = {
        username,
        token: data.token
      }
      setCredentials(username, data.token)
      dispatch(authSuccess(newUserData));
      dispatch(setStatusToSuccess());
    })
    .catch((error) => {
      console.log(error);
    });
};
