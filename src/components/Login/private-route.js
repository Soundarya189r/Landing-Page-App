import React from "react";
import {Route }from "react-router-dom"
import {withAuthenticationRequired} from '@auth0/auth0-react'
import {Loader} from '../../styledComp/loader'


const PrivateRoute=({component, ...args}) => (


<Route
component={withAuthenticationRequired(component,{
    onRedirecting:()=>  
    <>
   <h1 style={{textAlign:"center"}}>Protected Route: Redirecting to Login Page</h1><Loader/>
    </>
  
})}/>
);


export default PrivateRoute;