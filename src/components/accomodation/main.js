const Main = () => {
  return (
    <section className="col-12 col-md-7 col-lg-8 col-xl-9 px-5 debug_border">
      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <input type="text" class="form-control" aria-label="Text input with dropdown button" />
      </div>

    </section>
  )
}

export default Main