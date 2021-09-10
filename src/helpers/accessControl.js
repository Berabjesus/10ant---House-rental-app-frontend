import { useSelector, useDispatch } from 'react-redux';
import {getToken, setCredentials} from './tokenHandler'
import {authSuccess} from '../store/actions/authAction'
import jwt_decode from "jwt-decode";

export const IsLoggedIn = () => {
  const authStatus = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  if (getToken()) {
    let id = (jwt_decode(getToken())).user_id;
    const data = {
      username: id,
      token: getToken()
    }
    dispatch(authSuccess(data));
    setCredentials(data.username, data.token)
    return true;
  } else {
    return false;
  }
} 
