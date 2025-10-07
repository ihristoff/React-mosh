
import {useState} from 'react'

const Profile = () => {
  return <h1>I did it</h1>
}

const ToggleChallenge = () => {
  const [value, setValue] = useState(true)
  
const handleClick = () => {
  setValue(!value)
}


  return (
  <>
  
  <h2>toggle challenge</h2>
  <button onClick={handleClick} type='button'>{value? 'Hide' : 'Show'}</button>
  {value? <Profile/> : '' }
  </>
  )


};

export default ToggleChallenge;

