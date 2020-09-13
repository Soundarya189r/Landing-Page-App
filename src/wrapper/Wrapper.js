import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Loader} from '../styledComp/loader'

function Wrapper({ children }) {
  const {
    isLoading,
    error,
  } = useAuth0();
  if (isLoading) {
    return <><h1 style={{textAlign:"center"}}>Please wait while we load</h1><Loader/></>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return <>{children}</>;
}
export default Wrapper;