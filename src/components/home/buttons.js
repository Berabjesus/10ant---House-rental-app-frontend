import { Link } from 'react-router-dom';

const Buttons = ({className, link, text}) => {
  return (
    <>
     <Link to={`/${(link.split(' ').join('')).toLowerCase()}`} className={`btn btn-light px-3 py-2 my-2 me-3 fw-bold landing_btns glow_button ${className}`}>{text}</Link>
    </>
  )
}

export default Buttons;