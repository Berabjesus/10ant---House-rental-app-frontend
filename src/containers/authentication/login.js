import Common from '../../components/authentication/common'

const Login = () => {
  const handleClick = () => {
    console.log('login clikced ');
  }
  return (
    <Common clickhandler = {handleClick} />
  )
}

export default Login;