import {getToken, setCredentials} from './tokenHandler'
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from 'react-redux';
import {authSuccess} from '../store/actions/authAction';

export const IsLoggedIn = () => {
  if (getToken()) {
    let id = (jwt_decode(getToken())).user_id;
    const data = {
      username: id,
      token: getToken()
    }
    setCredentials(data.username, data.token)
    return data;
  } else {
    return false;
  }
}

export const SetAuthenticationState = () => {
  const dispatch = useDispatch();
  if (IsLoggedIn()) {
    dispatch(authSuccess(IsLoggedIn()));
  }
}
