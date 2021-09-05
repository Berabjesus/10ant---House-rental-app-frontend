import Buttons from '../../components/home/buttons'
import style from './home.module.css';

const home = () => {
  return (
    <section className={`vh_100 ${style.custom_border} ${style.section}`}>
      <figure className="mb-0"></figure>
      <Buttons/>
    </section>
  )
}

export default home;