import {useState} from 'react'
import Common from './common'
import styles from './common.module.css'
import left from '../../assets/png/tenant.png'
import right from '../../assets/png/owner.png'

const Signup = () => {
  const c = <Common status="Signn up"/>
  const d = <div></div>
  const [page, setPage] = useState(c)

  const handleClick = () => {
    setPage(d)
  }
  return (
    <>
      <section className={`d-flex justify-content-center pt-3 vh-100 debug_border ${styles.section}`}>
        <div className={`d-flex flex-column flex-md-row ${styles.form_box} ${styles.signup_menu}`}>
          <a className={`col-12 col-md-6 d-flex p-2 p-md-3 debug_border col-12 col-md-6 d-flex  debug_border ${styles.signup_menu_container}`}>
            <div class="position-relative text-black font_rw overflow-hidden z_index_max">
              <figure class={`z_index_min ${styles.menu} ${styles.menu_left}`} alt="tenant_image"></figure>
              <div class="z_index_max">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </a>
          <a className={`col-12 col-md-6 d-flex p-2 p-md-3 debug_border col-12 col-md-6 d-flex  debug_border ${styles.signup_menu_container}`}>
            <div class="position-relative text-black font_rw overflow-hidden z_index_max">
              <figure class={`z_index_min ${styles.menu} ${styles.menu_right}`} alt="tenant_image"></figure>
              <div class="z_index_max">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default Signup;