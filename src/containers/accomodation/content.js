import Sidebar from '../../components/accomodation/sidebar'
import Main from '../../components/accomodation/main'

const Content = () => {
  return (
    <section className="container mx-auto d-flex flex-column flex-md-row justify-content-md-between align-items-start mx-0 px-0 py-4 vh-100 ">
      <Sidebar />
      <Main />
    </section>
  )
}

export default Content