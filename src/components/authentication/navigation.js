import { Link, useHistory } from 'react-router-dom';
import { faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  const history = useHistory()

  return (
          <div className='d-flex justify-content-between position-absolute mt-4 px-2 w-100'>
            <button className="bg-transparent" type='button' onClick = {(e) => {
                history.go(-1)
              }}>
              <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  style={{ color: 'Black', fontSize: '25px' }}
                ></FontAwesomeIcon>
            </button>
            <Link to="/" className="">
              <FontAwesomeIcon
                icon={faHome}
                style={{ color: 'Black', fontSize: '25px' }}
              >
              </FontAwesomeIcon>
            </Link>
          </div>
  )
}

export default Navigation