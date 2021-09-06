import Common from './common'

const TenantSignUp = () => {
  const handleClick = () => {
    console.log('tennant clikced ');
  }
  return (
    <Common clickhandler = {handleClick} />
  )
}

export default TenantSignUp;