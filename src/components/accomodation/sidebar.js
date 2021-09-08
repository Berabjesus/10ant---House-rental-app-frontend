const Sidebar = () => {
  return (
    <>
      <aside className=' p-0 col-12 col-md-5 col-lg-4 col-xl-3 h-auto d-flex flex-column flex font_rw aside'>
        <form>
          <div className=" sidebar_sections flex-grow-1">
            <h5 className="p-2 fw-bold">Types</h5>
              <div className=" d-flex flex-column ps-5 pt-2">
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Apartments</label>
                </div>
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Guesthouses</label>
                </div>
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Condos</label>
                </div>
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Townhomes</label>
                </div>
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Vacation Homes</label>
                </div>
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Apartments</label>
                </div>
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Guesthouses</label>
                </div>
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Condos</label>
                </div>
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Townhomes</label>
                </div>
                <div className="form-check pb-2 mb-2">
                  <label className=""><input className=" form-check-input checkbox" type="checkbox" name="checkbox" />Vacation Homes</label>
                </div>
              </div>
          </div>
          <div className=" sidebar_sections flex-grow-1">
            <h5 className="p-2 fw-bold">Location</h5>
            <div className="input-group p-2 my-2">
              <input type="text" className="form-control border-dark" placeholder="Search location" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className=" sidebar_sections flex-grow-1">
            <h5 className="p-2 fw-bold">Price</h5>
            <div className="input-group p-2 my-2">
              <input type="text" className="form-control border-dark" placeholder="Min Price" aria-label="Username" aria-describedby="basic-addon1" />
              <input type="text" className="form-control border-dark" placeholder="Max Price" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </div>
          <div className=" sidebar_sections flex-grow-1 border-top border-dark">
            <div className="p-2 my-2 d-flex justify-content-around">
              <button className='btn link_btns_active'>Search</button>
              <input type="reset" value="Reset" className='btn link_btns_active' />
            </div>
          </div>
        </form>
      </aside>
    </>
  )
}

export default Sidebar