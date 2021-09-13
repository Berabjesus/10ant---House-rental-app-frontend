import { setStatusToLoading, setStatusToSuccess, setStatusToError } from './statusAction';
import {getToken} from '../../helpers/tokenHandler'
import {POST_SUCCESS} from '../../store/types'

const postSuccess = () => ({
  type: POST_SUCCESS,
});

export const PostAction = (content) => (dispatch) => {
  dispatch(setStatusToLoading());
  fetch('http://localhost:9090/10Ant/v1/accomodation', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(content),
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
      dispatch(postSuccess())
    }
  })
  .catch((error) => {
    console.log(error);
  });
}