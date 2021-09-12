import Header from '../navigation/header';
import {SetAuthenticationState} from '../../helpers/accessControl'

const Post = () => {
  SetAuthenticationState()
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
              <input className=" border border-dark border-3 form-control" id="fileUpload" type="file" placeholder />
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Post