import { setStatusToLoading, setStatusToSuccess, setStatusToError } from './statusAction';
import {getToken} from '../../helpers/tokenHandler'
import {POST_SUCCESS} from '../../store/types'
import {globalApi} from './globalUrl'

const postSuccess = () => ({
  type: POST_SUCCESS,
});

export const PostAction = (content) => (dispatch) => {
  dispatch(setStatusToLoading());
  console.log(content);
  fetch(`${globalApi}/accommodation`, {
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