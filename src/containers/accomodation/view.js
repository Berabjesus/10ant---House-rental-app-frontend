import Header from '../../components/accomodation/header'
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

  return (
    <>
      <Header />
      <section className="pt-4 px-3 d-flex flex-column flex-md-row justify-content-md-center font_rw margin_100 view_container fade_in">
        <div className=" me-md-3 border border-1 border-dark view_shadow view_img_container">
          <img className="h-100 w-100" src={item.image} alt="" />
        </div>
        <article className="col-6 bg-light d-flex flex-column justify-content-between px-5 pt-4 border border-dark view_shadow">
          <h2 className="border-bottom border-dark border-2 pb-3 mb-1">title</h2>
          <h4 className="mb-3">posted by : - </h4>
          <div className="col-8 d-flex justify-content-between">
            <button className="fw-bold landing_btns glow_button rounded-3">Reserve</button>
            <button className="fw-bold landing_btns glow_button rounded-3">Add to wishlist</button>
          </div>
          <div className="my-auto view_img_description">
            <h2 className="border-bottom border-2 border-dark">Details</h2>

          </div>
        </article>
      </section>
    </>
  )
}

export default View;