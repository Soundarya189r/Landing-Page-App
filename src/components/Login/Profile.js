import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Img} from '../../styledComp/LoginStyle'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
      <>
     <Img>
        <img src={user.picture} alt={user.name}
        style={{width:"100%"}} />
        <h2>Welcome {user.name}</h2>
        <p>Email:{user.email}</p>
        {/* <JSONPretty data={user} /> */}
        {/* {JSON.stringify(user, null, 2)} */} 
      </Img>    
      </>
    )
  )
}

export default Profile

