import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {authSuccess} from '../../store/actions/authAction'
import {login} from '../../store/actions/authAction'
import {IsLoggedIn} from '../../helpers/accessControl'
import Common from '../../components/authentication/common'
import Index from '../accomodation/'
import LoadingIcon from '../../components/common/loadingIcon';
import styles from '../../components/authentication/common.module.css'

const Login = () => {

  const authStatus = useSelector((state) => state.authentication);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const setters = {setName, setPassword}
  const requestStatus = useSelector((state) => state.status);

  const [animateOnError, setAnimateOnError] = useState('');
  const [attempt, setAttempt] = useState(0)

  const dispatch = useDispatch();
  useEffect(() => {
    if (requestStatus.error && attempt > 0) {
      setAnimateOnError(styles.shake);
    }
  }, [requestStatus.error, attempt]);

  const handleClick = () => {
    setAttempt(attempt + 1)
    const credentials = {
      username: name.trim(),
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
    return (
      <Redirect to={`/${authStatus.username}`} />
    )
  }
  return (
    <Common clickhandler = {handleClick} setters= {setters} onError = {animateOnError}/>
  )
}

export default Login;