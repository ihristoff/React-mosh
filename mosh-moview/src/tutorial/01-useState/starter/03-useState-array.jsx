import { useState } from 'react'
import { data } from './data.js'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  console.log(data)
  const handleRemove = (id) =>  {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople)
  }

  return (
    <div>
      <h2>useState array example</h2>

      {people.map((person) => (
        <div>
        <div key={person.id}>{person.name}</div>
        <button type='button' onClick={() => handleRemove(person.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default UseStateArray


