import Sidebar from '../../components/accomodation/sidebar'
import SearchBar from '../../components/accomodation/searchBar'
import Display from '../../components/accomodation/display'

const Main = () => {
  return (
    <section className="container mx-auto d-flex flex-column flex-md-row justify-content-md-between align-items-start mx-0 px-0 py-4 vh-100 ">
      <Sidebar />
      <section className="col-12 col-md-7 col-lg-8 col-xl-9 px-5 d-flex flex-column">
        <SearchBar />
        <Display />
      </section>
    </section>
  )
}

export default Main