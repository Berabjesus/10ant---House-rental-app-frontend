import { AUTH_SUCCESS, LOGOUT } from '../types';
import { setStatusToLoading, setStatusToSuccess, setStatusToError } from './statusAction';
import {setCredentials} from '../../helpers/tokenHandler'
import jwt_decode from "jwt-decode";

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});


export const login = (credentials) => (dispatch) => {
  console.log(credentials);
  dispatch(setStatusToLoading());
  fetch('http://localhost:9090/10Ant/v1/login', {
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
      dispatch(authSuccess(newUserData));
      dispatch(setStatusToSuccess());
      setCredentials(username, data.token)
    })
    .catch((error) => {
      return false;
    });
};


export const signup = (credentials, history) => (dispatch) => {
  dispatch(setStatusToLoading());
  fetch('http://localhost:9090/10Ant/v1/register', {
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
        console.log(response);
        response.json().then(data => {
          dispatch(setStatusToError(data.message));
        })
        .catch(console.error);
          throw new Error("Error authAct -- 34");
      }

      if(response.ok){
        dispatch(setStatusToSuccess());
        dispatch(authSuccess({username: credentials.username,
        token: null}))
        history.push("/login")
      }
      // return response.text()
    })
    // .then((response) => {
    //   console.log('success');
    //   response.json().then(data => {
    //     // dispatch(authSuccess(data))
    //     dispatch(setStatusToSuccess());
    //     // setCredentials(data.username, data.token)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     throw new Error("Error authAct -- 34");
    //   })
    // })
    .catch((error) => {
      console.log(error);
    });
};
