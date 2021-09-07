import Menu from '../../components/authentication/menu'
import {FloatingLogo} from '../../components/common/logo'
const Role = () => {  
  return (
    <>
      <section className={`d-flex justify-content-center vh-100 section fade_in`}>
        <FloatingLogo />
        <Menu />
      </section>
    </>
  )
}

export default Role;