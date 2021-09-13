import { setStatusToLoading, setStatusToSuccess, setStatusToError } from './statusAction';
import {getToken} from '../../helpers/tokenHandler'
import {DISPLAY_SUCCESS} from '../types'


export const displaySuccess = (data) => ({
  type: DISPLAY_SUCCESS,
  payload: data
})

export const displayAction = () => (dispatch) => {
  dispatch(setStatusToLoading());
  fetch('http://localhost:9090/10Ant/v1/accommodation', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    }
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
    dispatch(displaySuccess(data));
    dispatch(setStatusToSuccess());
  })
  .catch((error) => {
    return false;
  });

}