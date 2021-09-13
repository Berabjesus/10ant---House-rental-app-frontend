import {useState} from 'react'
import {Button} from 'react-bootstrap'
import ReactImageZoom from 'react-image-zoom';
import Header from '../navigation/header'
import Reserve from '../../components/accomodation/reserve'
import test from '../../assets/image/test.jpg'

const View = () => {
  const item = {
    type: 'apartment',
    address: 'Iowa',
    price: 400,
    rating: 0,
    image: test,
    description : 'skldflk jkldj klsdklf jsdjkf kljsdlkfj ',
    uploadedBy: 'Berekt'
  };

  const [height, setHeight] = useState(window.outerWidth > 768 ? 300 : 200)
  const [width, setWidth] = useState(window.outerWidth > 768 ? 400 : 300)
  const [position, setPosition] = useState(window.outerWidth > 768 ? "right" : "bottom")

  window.onresize = () => {
    let windowWidth = window.outerWidth;
    if (windowWidth < 768) {
      setWidth(300)
      setHeight(200)
      setPosition("bottom")
    } else {
      setWidth(400)
      setHeight(300)
      setPosition("right")
    }
  }

  const props = {width: width, height: height, zoomWidth: 500, zoomPosition: position, img: test};

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />
      <section className="pt-4 px-3 d-flex flex-column flex-md-row justify-content-md-center font_rw margin_100 view_container fade_in">
        <div className=" mx-auto mx mx-md-0 me-md-3 border border-1 border-dark view_shadow view_img_container">
          <ReactImageZoom {...props}/>
        </div>
        <article className=" col-12 col-md-6 mt-4 mt-md-0 bg-light d-flex flex-column justify-content-between px-5 pt-4 border border-dark view_shadow">
          <h2 className="border-bottom border-dark border-2 pb-3 mb-1">title</h2>
          <h4 className="mb-3">posted by : - </h4>
          <div className="col-8 d-flex flex-column flex-lg-row justify-content-between">
            <Button type="button" className="btn btn-light fw-bold mb-3 mb-lg-0 mx-0 mx-lg-2 landing_btns glow_button rounded-3" onClick={handleShow}>Reserve Place</Button>
            <Reserve show = {show} handleClose = {handleClose}/>
            <button className="fw-bold mb-3 mb-lg-0 mx-0 mx-lg-2 landing_btns glow_button rounded-3">Add to wishlist</button>
          </div>
          <div className="pt-5 my-md-auto view_img_description">
            <h2 className="border-bottom border-2 border-dark">Details</h2>

          </div>
        </article>
      </section>
    </>
  )
}

export default View;