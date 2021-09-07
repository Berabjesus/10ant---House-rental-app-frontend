import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {signup} from '../../store/actions/authAction'
import LoadingIcon from '../../components/common/loadingIcon';
import Common from '../../components/authentication/common'
import Index from '../accomodation/'
import styles from '../../components/authentication/common.module.css'

const Signup = ({role}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const setters = {setName, setEmail, setDob, setPassword, setPasswordConfirmation}

  const [animateOnError, setAnimateOnError] = useState('');
  const [attempt, setAttempt] = useState(0)

  const dispatch = useDispatch();
  const requestStatus = useSelector((state) => state.status);
  const authStatus = useSelector((state) => state.authentication);

  const handleClick = () => {
    setAttempt(attempt + 1)
    const credentials = {
      username: name.trim(),
      password: password.trim(),
      password_confirmation: passwordConfirmation.trim()
    }
    // use .replace(/\s/g, "") for email later
    dispatch(signup(credentials))
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
      <Index />
    )
  }
  return (
    <>
      <Common clickhandler = {handleClick} setters = {setters} onError = {animateOnError}/>
    </>
  )
}

export default Signup