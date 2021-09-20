const SearchBar = () => {
  return (
    <div className ="col-12 d-flex justify-content-start mt-2 mt-lg-0">
      <div className="d-flex col-7 mr-auto">
        <input type="text" className=" form-control border border-2 border-dark" aria-label="Text input" placeholder="Search for anything"/>
      </div>
      <div className="dropdown ms-3">
        <a className="btn btn-light border border-2 border-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          Sort by
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a className="dropdown-item" href="#">Price</a></li>
          <li><a className="dropdown-item" href="#">Date</a></li>
        </ul>
      </div>
    </div>
  )
}

export default SearchBar