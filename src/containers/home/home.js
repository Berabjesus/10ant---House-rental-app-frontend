import Buttons from '../../components/home/buttons'
import style from './home.module.css';

const home = () => {
  return (
    <section className={`vh_100 pt-xl-5 ps-md-5 ${style.section}`}>
      <figure className="mb-0"></figure>
      <div className='d-flex flex-column px-5 pt-5 col-12 col-md-6'>
        <h2 className={`display-1 text-center pb-2 font_logo text-black ${style.logo}`}>10Ant</h2>
        <div className={`font_os text-black fw-bolder ${style.description}`}>
          <p >Find affordable deals on apartments and houses for rent. </p>
          <p>Are you looking to rent your house or apartment? <br /> Upload your place here, millions of users visit our website daily.</p>
          <div className='d-flex flex-wrap justify-content-around pt-md-4 mx-auto'>
            <Buttons text="Login"/>
            <Buttons text="Sign up"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default home;