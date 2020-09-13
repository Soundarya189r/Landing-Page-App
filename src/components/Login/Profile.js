import React, {useEffect, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Img} from '../../styledComp/LoginStyle'

const Profile = () => {
  const { user, isAuthenticated ,getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);


  useEffect(() => {
    const getUserMetadata = async () => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;

  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [user.sub, getAccessTokenSilently]);

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
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}

      </Img>    
      </>
    )
  )
}

export default Profile

