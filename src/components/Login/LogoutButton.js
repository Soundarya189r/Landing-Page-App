import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Button=styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 300px;
margin: auto;
text-align: center;
background-color:  white;
padding: 1em;
margin-bottom: 2em;
color: black;
`;


const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button onClick={() => logout()}>
        Log Out
      </Button>
      
    )
  )
}

export default LogoutButton
