import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../navigation/header';
import {SetAuthenticationState} from '../../helpers/accessControl'
import LoadingIcon from '../../components/common/loadingIcon';
import {PostAction} from '../../store/actions/postAction'

const Post = () => {
  SetAuthenticationState()
  const [image, setImage ] = useState("");
  const [ url, setUrl ] = useState(null);
  const [address, setAddress] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("Apartment");

  const requestStatus = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const handleImageUpload = () => {
    const data = new FormData();
    data.append("file", image)
    data.append("upload_preset", "10antapp")
    data.append("cloud_name","dqlkuatge")
    fetch("https://api.cloudinary.com/v1_1/dqlkuatge/image/upload",{
      method:"post",
      body: data
    })
    .then(resp => resp.json())
    .then(data => {
      setUrl(data.url)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    handleClick();
  }, [url])

  const handleClick = () => {
    if (!url) {
      return
    }
    const content = {
      image: url.trim(),
      price: price.trim(),
      address: address.trim(),
      houseNumber: houseNumber.trim(),
      type: type,
      available: true
    }
    dispatch(PostAction(content));
  }

   if (requestStatus.loading){
    return (
        <LoadingIcon />
    )
  }

  return (
    <>
      <Header />
      <section className="container margin_100 pt-5 border border-dark border-2 bg-light shadow">
        <form action="d-flex flex-column ">
          <div className="p-2 my-2 col-5 d-flex flex-column mx-auto">
            <div>
              <label htmlFor="" className=" w-100 h4"> Address</label>
              <input type="text" className="form-control border border-2 border-dark mx-1 w-100" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1" onChange = {(e)=> setAddress(e.target.value)} />
            </div>
            <div>
              <label htmlFor="" className=" w-100 h4"> House Number</label>
              <input type="number" className="form-control border border-2 border-dark mx-1 w-100" placeholder="House No" aria-label="Username" aria-describedby="basic-addon1" onChange = {(e)=> setHouseNumber(e.target.value)} />
            </div>
            <div>
              <label htmlFor="" className=" w-100 h4">Price</label>
              <input type="number" className="form-control border border-2 border-dark mx-1 w-100" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" onChange = {(e)=> setPrice(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="" className=" w-100 h4">Type</label>
              <select name="type" id="type" className= " form-select" onChange={(e)=> {
                setType(e.target.value);
                e.value = e.target.value
              }} >
                <option value="Apartment">Apartment</option>
                <option value="Guesthouses">Guesthouses</option>
                <option value="Condos">Condos</option>
                <option value="Townhomes">Townhomes</option>
                <option value="Vacation Homes">Vacation Homes</option>
              </select>
            </div>
          </div>
          <div className="p-2 col-5 mx-auto d-flex flex-column">
            <label className="h4" htmlFor="fileUpload">Upload Image</label>
            <input className=" border border-dark border-3 form-control" id="fileUpload" type="file" placeholder= "Upload files" onChange= {(e)=> setImage(e.target.files[0])}/>
            <button className=" mx-auto btn btn-light border border-dark border-2 mt-3 glow_button" type="button" onClick = {handleImageUpload}>Upload</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Post