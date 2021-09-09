import Sidebar from '../../components/accomodation/sidebar'
import SearchBar from '../../components/accomodation/searchBar'
import Display from '../../components/accomodation/display'

const Main = () => {
  return (
    <section className="container-fluid mx-auto d-flex flex-column flex-lg-row justify-content-lg-between align-items-start mx-0 ps-lg-3 pe-0 py-4 main_section debug_border">
      <Sidebar />
      <section className="col-12 col-lg-8 col-xl-9 px-lg-5 d-flex flex-column offset-lg-3 main_section_container debug_border">
        <SearchBar />
        <Display />
      </section>
    </section>
  )
}

export default Main