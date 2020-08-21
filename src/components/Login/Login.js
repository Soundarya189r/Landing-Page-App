import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'




function Login() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (      
    <>
    <LoginButton />
    <LogoutButton />
    <Profile />
  </>


         
  );
}

export default Login;
