import {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {signup} from '../../store/actions/authAction'
import LoadingIcon from '../../components/common/loadingIcon';
import Common from './common'

const OwnerSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const setters = {setName, setEmail, setDob, setPassword, setPasswordConfirmation}
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);


  const handleClick = () => {
    const credentials = {
      username: name.trim(),
      password: password.trim(),
      password_confirmation: passwordConfirmation.trim()
    }
    // use .replace(/\s/g, "") for email later

    dispatch(signup(credentials))
    console.log(status.loading);
  }

  useEffect(() => {
    console.log(status.loading);

  })

  if (status.loading){
    return (
      <section className={`col-12 d-flex justify-content-center vh-100 pt-5 w-100 debug_border fade_in section`}>         
        <LoadingIcon />
      </section>
    )
  }
  return (
    <>
      <Common clickhandler = {handleClick} setters = {setters}/>
    </>
  )
}

export default OwnerSignUp