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
          <a href="#" className={`col-12 col-md-6 d-flex p-2 p-md-3 col-12 col-md-6 d-flex ${styles.signup_menu_anchor}`}>
            <div class={`position-relative text-black font_rw overflow-hidden border border-1 border-dark rounded-3 z_index_max w-100 hover_custom`}>
              <figure class={`z_index_min ${styles.menu_items} ${styles.menu_left}`} alt="tenant_image"></figure>
              <div class={` pt-5 px-3 h-100 z_index_max ${styles.menu_text_container}`}>
                <h3 class="card-title font_rw fw-bold">Are you a tenant looking to rent a new house or apartment?</h3>
                <h3 className='text-center mt-4'>Click Here</h3>
              </div>
            </div>
          </a>
          <a href="#" className={`col-12 col-md-6 d-flex p-2 p-md-3 col-12 col-md-6 d-flex ${styles.signup_menu_anchor}`}>
            <div class={`position-relative text-black font_rw overflow-hidden border border-1 border-dark rounded-3 z_index_max w-100 hover_custom`}>
              <figure class={`z_index_min ${styles.menu_items} ${styles.menu_right}`} alt="tenant_image"></figure>
              <div class={` pt-5 px-3 h-100 z_index_max ${styles.menu_text_container}`}>
                <h3 class="card-title font_rw fw-bold">Are you an owner of a house looking to find new tenants?</h3>
                <h3 className='text-center mt-4'>Click Here</h3>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default Signup;