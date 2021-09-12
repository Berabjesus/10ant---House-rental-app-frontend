import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AgeFromDateString } from 'age-calculator'
import {signup} from '../../store/actions/authAction'
import LoadingIcon from '../../components/common/loadingIcon';
import Common from '../../components/authentication/common'
import Index from '../accomodation/'
import styles from '../../components/authentication/common.module.css'

const Signup = ({role}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const setters = {setFirstName, setLastName, setEmail, setDob, setPhoneNumber, setAddress, setCountry, setUsername, setPassword, setPasswordConfirmation}

  const [animateOnError, setAnimateOnError] = useState('');
  const [attempt, setAttempt] = useState(0)

  /* delete*/
  const idNumber = Math.floor(Math.random() * 1000) + 1;
  /* delete */

  const dispatch = useDispatch();
  const requestStatus = useSelector((state) => state.status);
  const authStatus = useSelector((state) => state.authentication);
  
  const handleClick = () => {
    setAttempt(attempt + 1)
    let age = new AgeFromDateString(new Date(dob)).age;
    const credentials = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      age : age,
      idNumber,
      address,
      phoneNumber,
      email,
      country,
      username,
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