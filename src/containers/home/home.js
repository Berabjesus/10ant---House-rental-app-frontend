import Buttons from '../../components/home/buttons'
import {FixedLogo} from '../../components/common/logo'
import styles from './home.module.css';

const home = () => {
  return (
    <section className={`vh-100 pt-xl-5 ps-md-5 fade_in ${styles.section}`}>
      <figure className={`mb-0 ${styles.figure}`}></figure>
      <div className='d-flex flex-column px-5 pt-5 col-12 col-md-6'>
        <FixedLogo />
        <div className={`font_os text-black fw-bolder pt-2 ${styles.description}`}>
          <p >Find affordable deals on apartments and houses for rent. </p>
          <p>Are you looking to rent your house or apartment? <br /> Upload your place here, millions of users visit our website daily.</p>
          <div className='d-flex flex-wrap pt-md-4 mx-auto'>
            <Buttons link='login' text="Login"/>
            <Buttons link='signup' text="Sign up"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default home;