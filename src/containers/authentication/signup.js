import {useState} from 'react'
import Common from './common'
import Menu from '../../components/authentication/menu'
import styles from './common.module.css'

const Signup = () => {
  const c = <Common status="Signn up"/>
  const d = <div></div>
  const [page, setPage] = useState(Menu)

  const handleClick = () => {
    setPage(d)
  }
  return (
    <>
      <section className={`d-flex justify-content-center pt-3 vh-100 debug_border ${styles.section}`}>
        {page}
      </section>
    </>
  )
}

export default Signup;