import styles from './accomodation.module.css'

const Main = () => {
  return (
    <section className="col-12 col-md-7 col-lg-8 col-xl-9 px-5 d-flex debug_border">
      <div className ="col-12 d-flex">
        <div class="d-flex col-7">
          <input type="text" class=" form-control" aria-label="Text input" placeholder="Search for anything"/>
        </div>
        <div class="dropdown ms-3">
          <a class="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Sort by
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Price</a></li>
            <li><a class="dropdown-item" href="#">Date</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Main