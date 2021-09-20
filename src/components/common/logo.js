import { Link } from 'react-router-dom';
import styles from './style.module.css'

const content = (textSize) => {
  return (
    <h2 className={`${textSize} p-0 m-0 font_logo text-black  w-auto`} >10Ant</h2>
  )
}

export const FixedLogo = () => {
  return (
    <>
      <div className="pb-2 mb-2 border-bottom border-dark">
        {content('display-1')}
      </div>
    </>
  )
}

export const FloatingLogo = () => {
  return (
    <Link to="/" className ={`${styles.logo_fixed}`}>
      {content('display-5')}
    </Link>
  )
}