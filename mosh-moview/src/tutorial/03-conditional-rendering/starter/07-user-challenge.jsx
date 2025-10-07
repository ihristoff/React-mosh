import {useState} from 'react'


const UserChallenge = () => {
  const [user, setUser ]=useState(null)

  const Login =()=>{
    setUser({name:'john'})
  }
   const Logout =()=>{
    setUser(null)
  }

  return (
    <>
    <h2>user challenge</h2>
    {user ? 
    <div>
      <h4>Hello, {user.name}</h4>
      <button onClick={Logout}>Logout</button>

    </div> :
    <div>
      <h4>pls login</h4>
      <button onClick={Login}>Login</button>

    </div>
    }
    
    </>


  )
};

export default UserChallenge;
