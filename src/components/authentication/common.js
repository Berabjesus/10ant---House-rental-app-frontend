import {faUser} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './buttons'
import styles from './common.module.css'

const Common = ({status}) => {

  const pathname =  window.location.pathname.replace('/', '').toUpperCase();
  return (
    <>
      <section className={`col-12 d-flex justify-content-center vh-100 pt-5 w-100 debug_border fade_in ${styles.section}`}>
        <div>
          <form className={`d-flex flex-column ${styles.form_box}`}>
            <div className=' d-flex align-items-center flex-column align-items-center w-100 pt-3 border-bottom border-dark border-2 h-auto'>
              <FontAwesomeIcon
                className="mb-3 border border-2 border-dark rounded-circle p-3 shadow-sm"
                icon={faUser}
                style={{ color: 'Black', fontSize: '90px' }}
              />
              <h3>{ pathname === '' ? status : pathname}</h3>
            </div>
            <div className="pt-5 px-3 p-md-5 font_rw fw-bold">
              <input className="form-control borderless_inputs mb-4" type="text" placeholder="Username" />
              <input className="form-control borderless_inputs" type="password" placeholder="Password" />
            </div>
            <div className="align-self-center">
              <Button text='Log In' type="button" />
            </div>
          </form>
          
        </div>
      </section>  
    </>
  )
}

export default Common