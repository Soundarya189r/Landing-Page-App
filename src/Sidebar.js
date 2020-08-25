import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from "react-router-dom";
import About from './view/About'
import Login from './components/Login/Login';
import Home from './view/Home';
import Contact from './view/Contact'
import PrivateRoute from './components/Login/private-route';
import GadgetsMain from './containers/GadgetsPage/GadgetsMain';
  

export default props => {
  return (
   <Router>
    <Menu>
      <Link className="menu-item" to="/" >Home</Link>
      <Link className="menu-item" to="/about"> About</Link>
      <Link className="menu-item" to="/contact">  Contact Us </Link>
      <Link className="menu-item" to="/shop">  Shop </Link>
      <Link className="menu-item" to="/profile">Profile</Link>
     </Menu>

    <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <PrivateRoute exact path="/shop" component={GadgetsMain} />
              <PrivateRoute path='/profile' component={Login}/>
    </Switch>

    </Router>
  );
};
