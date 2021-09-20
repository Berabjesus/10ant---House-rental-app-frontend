import styles from './menu.module.css'
import { Link } from 'react-router-dom';

const Menu = () => {
  return (        
      <div className={`d-flex flex-column flex-md-row position-relative my-auto ${styles.form_box} ${styles.signup_menu}`}>
        <Link to="/signup/tenant" className={`col-12 col-md-6 d-flex p-2 p-md-3 col-12 col-md-6 d-flex ${styles.signup_menu_anchor}`}>
          <div className={`position-relative text-black font_rw overflow-hidden border border-1 border-dark rounded-3 z_index_max w-100 hover_custom`}>
            <figure className={`z_index_min ${styles.menu_items} ${styles.menu_left}`} alt="tenant_image"></figure>
            <div className={` pt-5 px-3 h-100 z_index_max ${styles.menu_text_container}`}>
              <h3 className="card-title font_rw fw-bold">Are you a tenant looking to rent a new house or apartment?</h3>
              <h3 className='text-center mt-4'>Click Here</h3>
            </div>
          </div>
        </Link>
        <Link to='/signup/owner' className={`col-12 col-md-6 d-flex p-2 p-md-3 col-12 col-md-6 d-flex ${styles.signup_menu_anchor}`}>
          <div className={`position-relative text-black font_rw overflow-hidden border border-1 border-dark rounded-3 z_index_max w-100 hover_custom`}>
            <figure className={`z_index_min ${styles.menu_items} ${styles.menu_right}`} alt="tenant_image"></figure>
            <div className={` pt-5 px-3 h-100 z_index_max ${styles.menu_text_container}`}>
              <h3 className="card-title font_rw fw-bold">Are you an owner of a house looking to find new tenants?</h3>
              <h3 className='text-center mt-4'>Click Here</h3>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default Menu;

