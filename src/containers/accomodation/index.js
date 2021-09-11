import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../navigation/header';
import Main from './main'
import {IsLoggedIn} from '../../helpers/accessControl'

const Index = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default Index;