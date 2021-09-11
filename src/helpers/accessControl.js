import {getToken, setCredentials} from './tokenHandler'
import jwt_decode from "jwt-decode";

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
