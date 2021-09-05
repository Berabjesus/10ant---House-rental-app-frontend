import style from './buttons.module.css';

const Buttons = ({text}) => {
  return (
    <button className={`btn btn-light px-3 py-2 my-2 me-3 fw-bold ${style.landing_btns} ${style.glow_button}`}>
      {text}
    </button>
  )
}

export default Buttons;