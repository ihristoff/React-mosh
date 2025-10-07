import {useState, useEffect} from 'react'

const url = 'https://api.github.com/users';


const FetchData = () => {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(e => console.error('Error fetching data', e))
      

  }, [])

  return (
  <div>
    <h2>fetch data example</h2>
        {console.log(users)} 
    {users.map((user) => {
      return (
      <div> 
        <span>{user.login} </span>
        <img style={{width:200}} src={user.avatar_url} />
        <a url={user.html_url}  > profile </a>
       </div> 
    )
    })}


  </div>
  )
  
};
export default FetchData;
