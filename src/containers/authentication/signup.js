import {useEffect, useState} from 'react'
import {useHistory,Redirect} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { AgeFromDateString } from 'age-calculator'
import {signup} from '../../store/actions/authAction'
import {IsLoggedIn, SetAuthenticationState} from '../../helpers/accessControl'
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
  const [nationality, setNationality] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const setters = {setFirstName, setLastName, setEmail, setDob, setPhoneNumber, setAddress, setNationality, setUsername, setPassword, setPasswordConfirmation}
  const values = {firstName, lastName, phoneNumber , address, email, dob, nationality, username, password, passwordConfirmation}

  const [animateOnError, setAnimateOnError] = useState('');
  const [attempt, setAttempt] = useState(0)
  const [errorMessage, setErrorMessage] = useState('');

  /* delete*/
  const idNumber = Math.floor(Math.random() * 1000) + 1;
  /* delete */

  const dispatch = useDispatch();
  const requestStatus = useSelector((state) => state.status);
  const authStatus = useSelector((state) => state.authentication);
  let history = useHistory();
  
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
      role,
      nationality,
      username,
      password: password.trim(),
      password_confirmation: passwordConfirmation.trim()
    }
    // use .replace(/\s/g, "") for email later
    dispatch(signup(credentials, history))
  }

  useEffect(() => {
    if (requestStatus.error && attempt > 0) {
      setErrorMessage(
        <div className= "border border-danger rounded-3 mx-auto mb-5 px-4 py-2 shadow-sm">
          <h6 className="text-danger">{requestStatus.error}</h6>
        </div>)
      setAnimateOnError(styles.shake);
    }
  }, [requestStatus.error, attempt]);

  if (requestStatus.loading){
    return (
        <LoadingIcon />
    )
  }
  if (IsLoggedIn() || authStatus.isLoggedIn && authStatus.token) {
    if(!authStatus.isLoggedIn)
      SetAuthenticationState()
    return (
      <Redirect to={`/user/${authStatus.username}`} />
    )
  }
  return (
    <>
      <Common clickhandler = {handleClick} setters = {setters} values = {values} onError = {animateOnError} errorMessage = {errorMessage}/>
    </>
  )
}

export default Signup