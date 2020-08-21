import React from 'react'
import gadgetsmain from '../../src/assets/gadgetsmain.jpg'
import styled from 'styled-components'
import Login from './Login/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  

export const Title =styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1em;
    margin-bottom: 2em;
    background-color:  #ff3385;
    color: #80ccff;
  `;

function Home() {
    return (
    //    <Container/>
    <>
    <div  style={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${gadgetsmain})` }}>
             <Title>
                <h1>Welcome to Gadget Shopping</h1>
            </Title>
            </div>
           
<Router>
<ul>
          <li>
            <Link to="/login">Login</Link>
            </li>
</ul>
<Route path="/home"
>
    <Login/>
</Route>
</Router>
</>
    )
}

export default Home
