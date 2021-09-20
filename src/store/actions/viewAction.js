import { setStatusToLoading, setStatusToSuccess, setStatusToError } from './statusAction';
import {getToken} from '../../helpers/tokenHandler'
import {VIEW_SUCCESS} from '../types'
import {globalApi} from './globalUrl'

const postSuccess = (data) => ({
  type: VIEW_SUCCESS,
  payload: data
});

export const viewAction = (id) => (dispatch) => {
  dispatch(setStatusToLoading());
  fetch(`${globalApi}/accommodation/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
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
    dispatch(setStatusToSuccess());
    dispatch(postSuccess(data));
  })
  .catch((error) => {
    return false;
  });

}