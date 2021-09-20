import {IsLoggedIn, SetAuthenticationState} from '../../helpers/accessControl'
import { useSelector, useDispatch } from 'react-redux';
import {Redirect} from 'react-router-dom'
import Menu from '../../components/authentication/menu'
import {FloatingLogo} from '../../components/common/logo'

const Role = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.authentication);

  if (IsLoggedIn() || authStatus.isLoggedIn && authStatus.token) {
    if(!authStatus.isLoggedIn)
      SetAuthenticationState()
    return (
      <Redirect to={`/user/${authStatus.username}`} />
    )
  }
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