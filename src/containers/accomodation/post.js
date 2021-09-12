import {useState} from 'react'
import Header from '../navigation/header';
import {SetAuthenticationState} from '../../helpers/accessControl'

const Post = () => {
  SetAuthenticationState()
  const [image, setImage ] = useState("");
  const [ url, setUrl ] = useState("");

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
       console.log(url);
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <Header />
      <section className="container margin_100 debug_border">
        <form action="">
          <div className="input-group p-2 my-2">
            <label htmlFor="">Address
            <input type="text" className="form-control border border-2 border-dark mx-1" placeholder="Max Price" aria-label="Username" aria-describedby="basic-addon1" />
            </label>
          </div>
          <div className = "d-flex flex-column align-items-center">
            <div className="debug_border">
              <label className="h2" htmlFor="fileUpload">Upload Image</label>
              <input className=" border border-dark border-3 form-control" id="fileUpload" type="file" placeholder= "Upload files" onChange= {(e)=> setImage(e.target.files[0])}/>
            </div>
          </div>
          <button type="button" onClick = {handleImageUpload}>Upload</button>
        </form>
      </section>
    </>
  )
}

export default Post