import {useState} from 'react'

const ErrorExample = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
  setCount(count + 1)
    console.log(count)
  
  }

  return (
    <div>
      <h2>{count}</h2>
      <button className='btn-primary' type='button' onClick={handleClick} >Increase counter</button>
    </div>
  );
};

export default ErrorExample;
