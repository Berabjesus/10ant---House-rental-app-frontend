import Header from '../navigation/header';
import {SetAuthenticationState} from '../../helpers/accessControl'

const Post = () => {
  SetAuthenticationState()
  return (
    <>
      <Header />
      <section className="container margin_100 debug_border">
        <form action="">
          <div className = "d-flex flex-column align-items-center">
            <label className="h2" htmlFor="fileUpload">Upload Image</label>
            <input className="border border-dark border-3 form-control" id="fileUpload" type="file" />
          </div>
        </form>
      </section>
    </>
  )
}

export default Post