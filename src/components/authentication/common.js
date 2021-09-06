import { Link, useHistory } from 'react-router-dom';
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './buttons'
import Navigation from './navigation'
import styles from './common.module.css'

const Common = ({status}) => {

  const pathName =  window.location.pathname.replace('/', '').toUpperCase();
  const formForSignUp = (()=> {
    if (pathName.split('/')[0] && pathName.split('/')[0] === 'SIGNUP') {
      return styles.wide_form_box
    } else {
      return styles.default_width
    }
  })();
  let appendForSignUp;
  if (status === 'SIGNUP/TENANT') {
    appendForSignUp = ''
  } else if(status === 'SIGNUP/OWNER') {

  }

  return (
    <>
      <section className={`col-12 d-flex justify-content-center vh-100 pt-5 w-100 debug_border fade_in section`}>
          <form className={`d-flex flex-column position-relative ${styles.form_box} ${formForSignUp}`}>
            <Navigation  />
            <div className=' d-flex align-items-center flex-column align-items-center w-100 pt-3 border-bottom border-dark border-2 h-auto'>
              <FontAwesomeIcon
                className="mb-3 border border-2 border-dark rounded-circle p-3 shadow-sm"
                icon={faUser}
                style={{ color: 'Black', fontSize: '90px' }}
              />
              <h4>{ pathName === '' ? status : pathName}</h4>
            </div>
            {appendForSignUp ? appendForSignUp : (
            <div className="pt-5 px-3 p-md-5 font_rw fw-bold">
              <input className="form-control borderless_inputs mb-4" type="text" placeholder="Username" />
              <input className="form-control borderless_inputs" type="password" placeholder="Password" />
            </div>)
            }

            <div className="align-self-center d-flex flex-column align-items-center">
              <Button text={pathName === '' ? status : pathName.split('/')[0]} type="button" />
              <p>or</p>
              <Link to={`/${pathName === 'LOGIN' ? "signup" : "login"}`} className="text-decoration-underline">{pathName === 'LOGIN' ? "Sign Up" : "Login"}</Link>
            </div>
          </form>
        </section>  
    </>
  )
}

export default Common