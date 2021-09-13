import {getToken, setCredentials, getUsername} from './tokenHandler'
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from 'react-redux';
import {authSuccess} from '../store/actions/authAction';


export const IsLoggedIn = () => {
  if (getToken()) {
    let id = userName();
    const data = {
      username: id,
      token: getToken()
    }
    return data;
  } else {
    return false;
  }
}

export const SetAuthenticationState = () => {
  const dispatch = useDispatch();
  if (IsLoggedIn()) {
    setCredentials(IsLoggedIn().username, IsLoggedIn().token)
    dispatch(authSuccess(IsLoggedIn()));
  }
}

export const userName = () => {
  // return jwt_decode(getToken()).aud
  return jwt_decode(getToken()).aud
}
