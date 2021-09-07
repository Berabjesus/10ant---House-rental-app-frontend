import { AUTH_SUCCESS } from '../types';
import { setStatusToLoading, setStatusToSuccess, setStatusToError } from './statusAction';
import {setCredentials} from '../../helpers/tokenHandler'

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});

export const login = (credentials) => (dispatch) => {
  dispatch(setStatusToLoading());
  fetch('http://localhost:3000/api/v1/sessions/', {
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
        throw new Error(response.statusText);
      }
      return response.json()
    })
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      dispatch(authSuccess(data));
      dispatch(setStatusToSuccess());
    })
    .catch((error) => {
      dispatch(setStatusToError(error.message));
    });
};


export const signup = (credentials) => (dispatch) => {
  dispatch(setStatusToLoading());
  fetch('http://localhost:3000/api/v1/users/', {
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
        throw new Error(response.statusText);
      }
      return response.json()
    })
    .then((data) => {
      dispatch(authSuccess(data))
      dispatch(setStatusToSuccess());
      setCredentials(data.username, data.token)
    })
    .catch((error) => {
      dispatch(setStatusToError(error.message));
    });
};
