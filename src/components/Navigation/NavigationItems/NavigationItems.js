import React from "react"
import styled from "styled-components";
import {Title} from '../../../styledComp/viewComp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link  } from "react-router-dom";

import Login from "../../Login/Login";
    


const ItemStyle = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;


@media (min-width: 500px) {
    .ItemStyle {
        flex-flow: row;
    }
}
`;
const navigationItems = () =>(
    <Router>
    <Link to="/shop/profile">View Profile</Link>
<Switch>
<Route  path='/shop/profile' component={Login}/>
</Switch>

    </Router>

);

export default navigationItems;