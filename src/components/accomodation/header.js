import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" fixed-top">
      <nav className="header_nav bg-white py-3">
        <div className="container d-flex wrap">
          <Link to="/:id" className="logo">
            <h1 className="font_logo text-black">10Ant</h1>
          </Link>
          <div className=" d-flex align-self-center ms-auto w-50 ">
            <ul className = "d-flex justify-content-between w-100 font_rw">
              <li><a href="register.html" className="p-2 h-100 w-100 link_btns_active">Post a Place</a></li>
              <li><a href="shop.html" className="pb-2 link_btns h-100 w-100">Wishlist</a></li>
              <li><a href="login.html" className="pb-2 link_btns h-100 w-100">My Account</a></li>
              <li><a href="checkout.html" className="pb-2 link_btns h-100 w-100">Log out</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-black ">
        <div className="container py-1">
          <ul className=" d-flex justify-content-between text-white w-50 font_rw">
            <li><a className="pb-1 subheader_link" href="#">Home</a></li>
            <li className="grid"><a className="pb-1 subheader_link" href="#">Invoices</a>
            </li>
            <li><a className="pb-1 subheader_link" href="#">About</a>
            </li>
            <li><a className="pb-1 subheader_link" href="#">Contact</a>
            </li>
          </ul>
          <div className="clear"></div>
        </div>
      </nav>
    </header>
  )
}

export default Header