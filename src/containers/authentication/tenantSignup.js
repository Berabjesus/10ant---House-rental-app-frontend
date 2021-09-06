import Common from '../../components/authentication/common'

const TenantSignUp = () => {
  const handleClick = () => {
    console.log('tennant clikced ');
  }
  return (
    <Common clickhandler = {handleClick} />
  )
}

export default TenantSignUp;