import Common from '../../components/authentication/common'

const OwnerSignUp = () => {
  const handleClick = () => {
    console.log('owner clikced ');
  }
  return (
    <Common clickhandler = {handleClick} />
  )
}

export default OwnerSignUp