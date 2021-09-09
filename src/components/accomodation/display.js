import { Link } from 'react-router-dom';
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
    rating: 0,
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
    <div className=" d-flex mt-4 flex-wrap">
      {
        itemNumber.map(item => {
          return (
            <div className={`col-1 mb-3 mx-2 flex-grow-1 d-flex flex-column ${styles.figure}`}>
              <Link to="/view/12" className={`flex-grow-1 position-relative mx-0 px-0 d-flex flex-column ${styles.fig_btn}`}>
                <div className={`p-2 font_rw d-flex flex-column text-start w-100 h-100 ${styles.img_description}`}>
                  <h4 className="border-bottom border-dark border-2">{item.type[0].toUpperCase() + item.type.slice(1).toLowerCase()}</h4>
                  <small className="text-dark">Posted by <ins className=" text-decoration-none fw-bold">{item.uploadedBy}</ins></small>
                  <h4 className="mt-auto fw-bold p-2 align-self-start border border-dark bg-light bg-opacity-50 text-left">{`${item.price}$`}</h4>
                </div>
                <div className={`w-100 h-100 font_rw ${styles.image_container}`}>
                  <img src={item.image} className={`h-100 w-100 ${styles.image}`} alt="" />
                </div>
              </Link>
              <div className="d-flex justify-content-between align-items-center p-2 border bg-light">
                {
                  (()=> {
                    const stars = []
                    if (item.rating > 5) {
                      return;
                    }
                    for (let i = 0; i < item.rating; i++) {
                        stars.push (
                          <FontAwesomeIcon
                            icon={faStarSolid}
                            style={{ color: 'Black', fontSize: '15px' }}>
                          </FontAwesomeIcon>
                        )
                    }
                    for (let i = 0; i < 5 - item.rating; i++) {
                      stars.push (
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: 'gray', fontSize: '15px' }}>
                        </FontAwesomeIcon>
                      )
                    }
                    return stars;
                  })()
                }
                <button className="m-0 p-1 d-flex flex-row border border-dark btn btn-light">
                  <FontAwesomeIcon
                    icon={faPlusSquare}
                    style={{ color: 'Black', fontSize: '20px' }}>
                  </FontAwesomeIcon>
                  <strong className="ms-2 h6 mb-0">Add to Wishlist</strong>
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