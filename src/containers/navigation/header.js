import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeUser} from '../../helpers/tokenHandler'
import { useHistory } from 'react-router-dom';
import {logout} from '../../store/actions/authAction'

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    removeUser();
    dispatch(logout())
    history.push('/')
  }
  return (
    <header className=" fixed-top">
      <nav className="header_nav bg-white py-3">
        <div className="container d-flex wrap">
          <Link to="/:id" className="logo">
            <h1 className="font_logo text-black">10Ant</h1>
          </Link>
          <div className=" d-flex align-self-center ms-auto w-50 ">
            <ul className = "d-flex justify-content-between w-100 font_rw">
              <li><a href="#" className="p-2 h-100 w-100 link_btns_active">Post a Place</a></li>
              <li><a href="#" className="pb-2 link_btns h-100 w-100">Wishlist</a></li>
              <li><a href="#" className="pb-2 link_btns h-100 w-100">My Account</a></li>
              <li><a href="#" className="pb-2 link_btns h-100 w-100" onClick={() => handleLogOut()}>Log out</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-black ">
        <div className="container py-1">
          <ul className=" d-flex justify-content-between text-white w-50 font_rw">
            <li><a href="#" className="pb-1 subheader_link" >Home</a></li>
            <li className="grid"><a href="#" className="pb-1 subheader_link" >Invoices</a>
            </li>
            <li><a href="#" className="pb-1 subheader_link" >About</a>
            </li>
            <li><a href="#" className="pb-1 subheader_link" >Contact</a>
            </li>
          </ul>
          <div className="clear"></div>
        </div>
      </nav>
    </header>
  )
}

export default Header