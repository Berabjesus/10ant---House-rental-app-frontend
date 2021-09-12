import {getToken, setCredentials} from './tokenHandler'
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from 'react-redux';
import {authSuccess} from '../store/actions/authAction';

export const IsLoggedIn = () => {
  if (getToken()) {
    let id = (jwt_decode(getToken())).aud;
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
    console.log("hghjkhjkhk");
    setCredentials(IsLoggedIn().username, IsLoggedIn().token)
    dispatch(authSuccess(IsLoggedIn()));
  }
}
