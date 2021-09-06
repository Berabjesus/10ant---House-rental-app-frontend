// import { LOGIN_SUCCESS, LOGOUT } from '../types';
import { setLoading, setSuccess, setErrors } from './statusAction';


export const signup = (credentials) => (dispatch) => {
  dispatch(setLoading());
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
      dispatch(setSuccess());
      console.log(data);
    })
    .catch((error) => {
      dispatch(setErrors(error.message.split(',')));
      // return error;
      console.log(error);
    });
};
