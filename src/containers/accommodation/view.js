import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Button} from 'react-bootstrap'
import ReactImageZoom from 'react-image-zoom';
import Header from '../navigation/header'
import Reserve from '../../components/accomodation/reserve'
import test from '../../assets/image/test.jpg'
import {viewAction} from '../../store/actions/viewAction';
import LoadingIcon from '../../components/common/loadingIcon';

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

  let path = window.location.href
  path = path.substring(path.lastIndexOf('/') + 1)

  const [height, setHeight] = useState(window.outerWidth > 768 ? 300 : 200)
  const [width, setWidth] = useState(window.outerWidth > 768 ? 400 : 300)
  const [position, setPosition] = useState(window.outerWidth > 768 ? "right" : "bottom")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [img, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [user, setuser] = useState("")
  const [hno, sethno] = useState("")
  const [address, setaddress] = useState("")
  const [price, setprice] = useState("")
  const content =  useSelector((state) => state.view);
  const dispatch = useDispatch();
  const requestStatus = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(viewAction(path));
  }, [])

  useEffect(() => {
    console.log(content);
    if(content.content){
      setImage(content.content.image)
      setTitle(content.content.type)
      setuser(content.content.user)
      sethno(content.content.houseNumber)
      setaddress(content.content.address)
      setprice(content.content.price)
    }
  }, [content])

  const props = {width: width, height: height, zoomWidth: 500, zoomPosition: position, img: img || test};


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

  if (requestStatus.loading){
    return (
        <LoadingIcon />
    )
  }

  if(content)
  return (
    <>
      <Header />
      <section className="pt-4 px-3 d-flex flex-column flex-md-row justify-content-md-center font_rw margin_100 view_container fade_in">
        <div className=" mx-auto mx mx-md-0 me-md-3 border border-1 border-dark view_shadow view_img_container">
          <ReactImageZoom {...props}/>
        </div>
        <article className=" col-12 col-md-6 mt-4 mt-md-0 bg-light d-flex flex-column justify-content-between px-5 pt-4 border border-dark view_shadow">
          <h2 className="border-bottom border-dark border-2 pb-3 mb-1">{title}</h2>
          <h4 className="mb-3">House number : - {hno}</h4>
          <h4 className="mb-3">Address : - {address}</h4>
          <h4 className="mb-3">Price : - {price}</h4>
          <div className="col-8 d-flex flex-column flex-lg-row justify-content-between">
            <Button type="button" className="btn btn-light fw-bold mb-3 mb-lg-0 mx-0 mx-lg-2 landing_btns glow_button rounded-3" onClick={handleShow}>Reserve Place</Button>
            <Reserve show = {show} handleClose = {handleClose}/>
            <button className="fw-bold mb-3 mb-lg-0 mx-0 mx-lg-2 landing_btns glow_button rounded-3">Add to wishlist</button>
          </div>
        </article>
      </section>
    </>
  )
}

export default View;