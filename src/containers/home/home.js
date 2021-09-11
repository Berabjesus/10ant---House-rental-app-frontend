import { useSelector, useDispatch } from 'react-redux';
import {authSuccess} from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import Buttons from '../../components/home/buttons'
import DotBox from '../../components/common/dotBox'
import {FixedLogo} from '../../components/common/logo'
import {IsLoggedIn} from '../../helpers/accessControl'
import styles from './home.module.css';

const Home = () => {
  const authStatus = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  if (IsLoggedIn()) {
    dispatch(authSuccess(IsLoggedIn()));
    return <Redirect to={`/${authStatus.username}`} />;
  }
  return (
    <section className={`vh-100 pt-xl-5 ps-md-5 fade_in  ${styles.section}`}>
      <DotBox direction= 'right'/>
      <figure className={`mb-0 ${styles.figure}`}></figure>
      <div className=' d-flex flex-column px-5 pt-5 col-12 col-md-6 z_index_max'>
        <FixedLogo />
        <div className={`font_os text-black fw-bolder pt-2 ${styles.description}`}>
          <p>Find affordable deals on apartments and houses for rent. </p>
          <FadeIn className="pt-1" transitionDuration="1000">
            <p> Are you looking to rent your house or apartment?</p>
            <p>Upload your place here, millions of users visit our website daily.</p>
            <div className='d-flex justify-content-start flex-column'>
              <div className="d-flex flex-wrap pt-md-4">
                <Buttons link='login' text="Login"/>
                <Buttons link='signup' text="Sign up"/>
              </div>
              <div className="w-auto ps-2 d-flex">
                <Buttons className="p-1 w-50 btn-dark text-white c_shadow" link='guest' text="Visit as a Guest"/>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Home;