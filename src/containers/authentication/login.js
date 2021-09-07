import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../store/actions/authAction'
import Common from '../../components/authentication/common'
import Index from '../accomodation/'
import LoadingIcon from '../../components/common/loadingIcon';
import styles from '../../components/authentication/common.module.css'

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const setters = {setName, setPassword}
  const requestStatus = useSelector((state) => state.status);
  const authStatus = useSelector((state) => state.authentication);

  const [animateOnError, setAnimateOnError] = useState('');
  const [attempt, setAttempt] = useState(0)

  const dispatch = useDispatch();

  const handleClick = () => {
    setAttempt(attempt + 1)
    const credentials = {
      username: name.trim(),
      password: password.trim(),
    }
    dispatch(login(credentials));
  }
  useEffect(() => {
    if (requestStatus.error && attempt > 0) {
      setAnimateOnError(styles.shake);
    }
  }, [requestStatus.error, attempt]);

  if (requestStatus.loading){
    return (
        <LoadingIcon />
    )
  }
  if (authStatus.isLoggedIn && authStatus.token) {
    return (
      <Index/>
    )
  }
  return (
    <Common clickhandler = {handleClick} setters= {setters} onError = {animateOnError}/>
  )
}

export default Login;