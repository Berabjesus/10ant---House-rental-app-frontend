import Buttons from '../../components/home/buttons'
import style from './home.module.css';

const home = () => {
  return (
    <section className={`vh_100 pt-5 ${style.custom_border} ${style.section}`}>
      <figure className="mb-0"></figure>
      <div className='d-flex flex-column ps-5 pt-5 '>
        <h2 className="display-1 text-center w-50 pb-2 font_logo">10Ant</h2>
        <div className="font_os fs-4 w-50 ps-5 text-center">
          <p >Find affordable deals on apartments and houses for rent. </p>
          <p>Are you looking to rent your house or apartment? <br /> Upload your place here, millions of users visit our website daily.</p>
        </div>
      </div>
      <Buttons/>
    </section>
  )
}

export default home;