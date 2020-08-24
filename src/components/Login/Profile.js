import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from 'react-json-pretty';
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import GadgetsMain from '../../containers/GadgetsPage/GadgetsMain';


const Img=styled.div`  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 300px;
// margin: auto;
// font-family: arial;
display:inline-block;
`;

 const Button=styled.div`
border: none;
outline: 0;
display: inline-block;
padding: 8px;
color: white;
background-color: #000;
cursor: pointer;
width: 100%;
font-size: 18px;
`;


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user.id);

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
        {/* <Router>
        <Link 
        style={{textAlign:"center"}}to="/user/shop">Click to view our Items</Link>
        <Switch>
        <Route path="/user/shop">
          <GadgetsMain />
          </Route>

        </Switch>
</Router> */}
</>
    )
  )
}

export default Profile

