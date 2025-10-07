import { useState } from 'react';

const UseStateObject = () => {

  const [name, setName] = useState('peter')  
  const [age, setAge] = useState(24)  
  const [hobby, setHobby] = useState('Looks good')  


  const handleChange = () => {
    setName('Ivan')
    setAge(44)
    setHobby('a better man')
  }
return (
  <div>
    <h2>useState object example</h2>
    <h4> {name}</h4>
    <h4> {age}</h4>
    <h4> {hobby}</h4>
    <button type='button' onClick={handleChange}>Change</button>
  </div>
)
}
export default UseStateObject
