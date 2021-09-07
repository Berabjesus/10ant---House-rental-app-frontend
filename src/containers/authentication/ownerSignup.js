import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {signup} from '../../store/actions/authAction'
import LoadingIcon from '../../components/common/loadingIcon';
import Common from './common'
import Index from '../accomodation/'
import styles from './common.module.css'

const OwnerSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [animateOnError, setAnimateOnError] = useState('');
  const setters = {setName, setEmail, setDob, setPassword, setPasswordConfirmation}
  const dispatch = useDispatch();
  const requestStatus = useSelector((state) => state.status);
  const authStatus = useSelector((state) => state.authentication);

  const handleClick = () => {
    const credentials = {
      username: name.trim(),
      password: password.trim(),
      password_confirmation: passwordConfirmation.trim()
    }
    // use .replace(/\s/g, "") for email later
    dispatch(signup(credentials))
  }

  useEffect(() => {
    if (requestStatus.error) {
      console.log('sdklfjslkd');
      setAnimateOnError(styles.shake);
    }
  }, [requestStatus.error]);

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
    <>
      <Common clickhandler = {handleClick} setters = {setters} onError = {animateOnError}/>
    </>
  )
}

export default OwnerSignUp