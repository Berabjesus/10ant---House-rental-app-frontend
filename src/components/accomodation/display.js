import styles from './accomodation.module.css'
import test from '../../assets/image/test.jpg'
import { faStar,faPlusSquare} from '@fortawesome/free-regular-svg-icons'
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Display = () => {
  const itemNumber = [{
    type: 'apartment',
    address: 'Iowa',
    price: 400,
    rating: 3,
    image: test,
    description : 'skldflk jkldj klsdklf jsdjkf kljsdlkfj ',
    uploadedBy: 'Berekt'
  },{
    type: 'apartment',
    address: 'Iowa',
    price: 700,
    rating: 3,
    image: test,
    description : 'skldflk jkldj klsdklf jsdjkf kljsdlkfj ',
    uploadedBy: 'Berekt'
  },{
    type: 'apartment',
    address: 'Iowa',
    price: 1200,
    rating: 3,
    image: test,
    description : 'skldflk jkldj klsdklf jsdjkf kljsdlkfj ',
    uploadedBy: 'Berekt'
  }];
  const render = (item) => {

  }

  return (
    <div className="mt-3 d-flex justify-content-between flex debug_border">
      <button className={`position-relative d-flex flex-column ${styles.figure}`}>
        <div className={`debug_border ${styles.image_container}`}>
          <img src={test} className={`${styles.image}`} alt="" />
        </div>
        <figcaption className="d-flex justify-content-between align-items-center py-2 border bg-light">
          <FontAwesomeIcon
            icon={faStarSolid}
            style={{ color: 'Black', fontSize: '15px' }}>
          </FontAwesomeIcon>
          <button className="m-0 p-1 d-flex flex-row border border-dark">
            <FontAwesomeIcon
              icon={faPlusSquare}
              style={{ color: 'Black', fontSize: '25px' }}>
            </FontAwesomeIcon>
            <strong className="ms-2">Add to Wishlist</strong>
          </button>
        </figcaption>
      </button>
    </div>
  )
}

export default Display;