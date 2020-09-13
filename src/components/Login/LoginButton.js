import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Div} from '../../styledComp/viewComp'
import {Button} from '../../styledComp/LoginStyle'


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
  
    !isAuthenticated && (
      <Div>
      
      <Button onClick={() => loginWithRedirect()}>Login</Button>
      </Div>
      
    )
  )
}

export default LoginButton
