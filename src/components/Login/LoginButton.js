import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import gadgetsmain from '../../assets/gadgetsmain.jpg'
import styled from 'styled-components'

const Button = styled.div` 
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 300px;
margin: auto;
text-align: center;
background-color:  #ff3385;
padding: 1em;
margin-bottom: 2em;
color: #80ccff;

`;

export const Title =styled.button`

    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1em;
    margin-bottom: 2em;
    background-color:  #ff3385;
    color: #80ccff;
  `;






const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
  
    !isAuthenticated && (
      <div  style={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${gadgetsmain})` }}>
             {/* <Title>
                <h1>Welcome to Gadget Shopping</h1>
            </Title> */}

      <Button onClick={() => loginWithRedirect()}>
</Button>
      </div>
      
    )
  )
}

export default LoginButton
