import styles from './style.module.css'

const DotBox = ({direction}) => {
  let directionStyle;
  if (direction === 'left') {
    directionStyle = styles.box_left
  } else {
    directionStyle = styles.box_right
  }
  return (
    <div className={`${styles.dot_box} ${directionStyle}`} >
    </div>
  )
}

export default DotBox;