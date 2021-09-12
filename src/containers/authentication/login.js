import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {authSuccess} from '../../store/actions/authAction'
import {login} from '../../store/actions/authAction'
import {IsLoggedIn, SetAuthenticationState} from '../../helpers/accessControl'
import Common from '../../components/authentication/common'
import Index from '../accomodation/'
import LoadingIcon from '../../components/common/loadingIcon';
import styles from '../../components/authentication/common.module.css'

const Login = () => {

  const authStatus = useSelector((state) => state.authentication);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const setters = {setUsername, setPassword}
  const requestStatus = useSelector((state) => state.status);

  const [animateOnError, setAnimateOnError] = useState('');
  const [attempt, setAttempt] = useState(0)
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (requestStatus.error && attempt > 0) {
        setErrorMessage(
          <div className= "border border-danger rounded-3 mx-auto mb-5 px-4 py-2 shadow-sm">
            <h6 className="text-danger">{requestStatus.error}</h6>
          </div>)
        setAnimateOnError(styles.shake);
    } else {
      setErrorMessage("")
    }
  }, [requestStatus.error, attempt]);

  const handleClick = () => {
    setAttempt(attempt + 1)
    const credentials = {
      username: username.trim(),
      password: password.trim(),
    }
    dispatch(login(credentials));
  }



  if (requestStatus.loading){
    return (
        <LoadingIcon />
    )
  }
  if (IsLoggedIn() || (authStatus.isLoggedIn && authStatus.token)) {
    if(!authStatus.isLoggedIn)
      SetAuthenticationState()
    return (
      <Redirect to={`/user/${authStatus.username}`} />
    )
  }
  return (
    <>
      <Common clickhandler = {handleClick} setters= {setters}  onError = {animateOnError} errorMessage = {errorMessage}/>
    </>
  )
}

export default Login;