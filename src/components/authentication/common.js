import { Link } from 'react-router-dom';
import {CountryDropdown} from 'react-country-region-selector'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from './nav'
import styles from './common.module.css'
import {FloatingLogo} from '../../components/common/logo'

const Common = ({clickhandler, setters, onError, errorMessage}) => {

  let formForSignUp;
  let appendForSignUp;
  const pathName =  window.location.pathname.replace('/', '').toUpperCase();
  const  {setFirstName,setLastName, setUsername, setEmail, setDob, setPhoneNumber, setAddress, setCountry, setPassword, setPasswordConfirmation} = setters

  if (pathName.split('/')[0] && pathName.split('/')[0] === 'SIGNUP') {
    formForSignUp = styles.signup_form_box
    appendForSignUp = 
    <> 
      <div className="px-5 pt-3 font_rw fw-bold flex">
        <div className= " d-flex flex-column flex-md-row">
          <input className="form-control borderless_inputs mb-2" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
          <input className="form-control borderless_inputs mb-2" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <input className="form-control borderless_inputs mb-2" type="email" placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)}/>
        <input className="form-control borderless_inputs mb-2" type="text" placeholder="Date of birth" onFocus={(e)=> e.target.type = 'date'} onBlur={(e)=> e.target.type = 'text'} onChange={(e) => setDob(e.target.value)} />
        <input className="form-control borderless_inputs mb-2" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
        <input className="form-control borderless_inputs mb-2" type="tel" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
        <CountryDropdown classes="form-control borderless_inputs mb-2" onChange = {(val) => setCountry(val)}/>
        <input className="form-control borderless_inputs mb-2" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="form-control borderless_inputs mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <input className="form-control borderless_inputs mb-2" type="password" placeholder="Password Confrimation" onChange={(e) => setPasswordConfirmation(e.target.value)} />
      </div>
    </>;
  } else {
    formForSignUp = styles.default_form_box
  }
 
  return (
    <>
      <section className={`col-12 d-flex justify-content-center vh-100 pt-5 w-100 fade_in section`}>
          <FloatingLogo />
          <form className={`d-flex flex-column position-relative ${styles.form_box} ${formForSignUp} ${onError}`}>
            <Navigation  />
            <div className=' d-flex align-items-center flex-column align-items-center w-100 pt-3 border-bottom border-dark border-2 pb-3 h-auto'>
              <FontAwesomeIcon
                className="mb-3 border border-2 border-dark rounded-circle p-3 shadow-sm"
                icon={faUser}
                style={{ color: 'Black', fontSize: '90px' }}
              />
              <h4>{ pathName }</h4>
            </div>
            {
            appendForSignUp ? appendForSignUp : (
            <div className="pt-5 px-3 p-md-5 font_rw fw-bold">
              <input className="form-control borderless_inputs mb-4" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
              <input className="form-control borderless_inputs" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>)
            }
            {errorMessage}
            <div className="align-self-center d-flex flex-column align-items-center">
              <button className= "btn btn-light px-3 py-2 my-2 landing_btns glow_button" type="button" onClick = {clickhandler}>{ pathName.split('/')[0]}</button>
              <p>or</p>
              <Link to={`/${pathName === 'LOGIN' ? "signup" : "login"}`} className="text-decoration-underline">{pathName === 'LOGIN' ? "Sign Up" : "Login"}</Link>
            </div>
          </form>
        </section>  
    </>
  )
}

export default Common