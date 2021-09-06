import { AUTH_SUCCESS } from '../types';
import { setStatusToLoading, setStatusToSuccess, setStatusToError } from './statusAction';

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});

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
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      dispatch(authSuccess(data))
      dispatch(setStatusToSuccess());
      console.log(data);
    })
    .catch((error) => {
      dispatch(setStatusToError(error.message.split(',')));
    });
};
