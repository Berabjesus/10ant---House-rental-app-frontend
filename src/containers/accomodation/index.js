import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import Header from '../navigation/header';
import Main from './main'
import {IsLoggedIn, SetAuthenticationState} from '../../helpers/accessControl'

const Index = () => {
  SetAuthenticationState();
  const authStatus = useSelector((state) => state.authentication);
  const location = useLocation();
  const current_dir = location.pathname
  const match_dir = `/user/${authStatus.username}`

  if (current_dir !== match_dir) {
    return (
      < Redirect to = "/error" />
    )
  }
  if (!IsLoggedIn()) {
    return (
      < Redirect to = "/login" />
    )
  }
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default Index;