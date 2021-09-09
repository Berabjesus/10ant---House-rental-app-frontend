import {Modal, Button} from 'react-bootstrap'
const Reserve = ({show, handleClose}) => {
  return (
      <Modal contentClassName=" border border-2 border-dark" show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Reserve This Place </Modal.Title>
        </Modal.Header>
          <form className =" font_rw mb-3">
            <Modal.Body className="mb-3">
              <div className="form-group mb-4">
                <h5 className="mb-2">Number of Guests</h5>
                <input type="number" className="form-control border-0 border-bottom border-dark border-1 rounded-0" aria-describedby="Help" placeholder="Enter number of guests here" />
              </div>
              <div className="d-flex flex-column mb-4">
                <h5 className="mb-2">How long are you planning to stay</h5>
                <div className="d-flex flex-column flex-md-row justify-content-md-between ">
                  <div className = "form-group">
                    <label >From</label>
                    <input type="date" className="form-control" placeholder="Password" />
                  </div>
                  <div className = "form-group">
                    <label >To</label>
                    <input type="date" className="form-control" placeholder="Password" />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-light fw-bold mb-3 mb-lg-0 mx-0 mx-lg-2 landing_btns glow_button rounded-3">Reserve</button>
            </Modal.Body>
          <Modal.Footer>
            <button className ="btn btn-light btn-sm fw-bold mb-3 mb-lg-0 mx-0 mx-lg-2 landing_btns glow_button rounded-3 px-1" type="reset">
              reset
            </button>
            <Button className ="btn btn-dark text-white btn-sm fw-bold mb-3 mb-lg-0 mx-0 mx-lg-2 landing_btns glow_button rounded-3" onClick={handleClose}>
            Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
  )
}

export default Reserve;