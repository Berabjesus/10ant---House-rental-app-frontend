import { Link } from 'react-router-dom';

const Buttons = ({link, text}) => {
  return (
    <>
     <Link to={`/${(text.split(' ').join('')).toLowerCase()}`} className= "btn btn-light px-3 py-2 my-2 me-3 fw-bold landing_btns glow_button">{text}</Link>
    </>
  )
}

export default Buttons;