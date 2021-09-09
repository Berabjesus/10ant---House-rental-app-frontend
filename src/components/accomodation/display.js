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
  },{
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
  },{
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
    <div className=" d-flex flex-wrap justify-content-center">
      {
        itemNumber.map(item => {
          return (
            <div className={`col-1 mt-3 mx-2 d-flex flex-column ${styles.figure}`}>
              <button className={`flex-grow-1 position-relative mx-0 px-0 d-flex flex-column ${styles.fig_btn}`}>
                <div className={`p-2 font_rw d-flex flex-column text-start w-100 h-100 ${styles.img_description}`}>
                  <h4 className="border-bottom border-dark border-2">Apartment</h4>
                  <small className="text-dark">Posted by <ins className=" text-decoration-none fw-bold">Jhon</ins></small>
                  <h3 className="mt-auto fw-bold  p-2 w-50 border-bottom border-dark text-center">400$</h3>
                </div>
                <div className={`w-100 h-100 font_rw ${styles.image_container}`}>
                  <img src={test} className={`h-100 w-100 ${styles.image}`} alt="" />
                </div>
              </button>
              <div className="d-flex justify-content-between align-items-center py-2 border bg-light">
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
              </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default Display;