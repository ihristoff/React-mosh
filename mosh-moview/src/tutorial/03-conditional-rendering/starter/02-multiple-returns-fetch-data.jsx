import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, SetIsLoading] = useState(true)
  const [isError, SetIsError] = useState(false)
  const [user, setUser] = useState(null)

    {useEffect(()=>{
      const fetchUser = async () => {
        try {
          const resp = await fetch(url);
          const user= await resp.json();
          console.log(user);
          setUser(user)
          
          
        } catch (error) {
          SetIsError(true)
          console.error('Error in fetching data:', error );
          
        }
        SetIsLoading(false)
      };
      fetchUser();

    },[])}

  if (isLoading) {return (
    <h2>Loading</h2>
  ) }
  if (isError) {return (
    <h2>Errrorr</h2>
  ) }

  const {login, avatar_url} = user
  
  return (
    
  <div>
    <h2>Fetch Data </h2>
    {
      <>
      
    <h3>{login} </h3>
    <img style={{width:200, borderRadius:50}} src={avatar_url}/>
    </>
     }

  </div>
  )
};
export default MultipleReturnsFetchData;
