import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useParams  } from "react-router-dom";
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
      <Link className="menu-item"to="/shop"> Shop</Link>
      <Link className="menu-item" to="/logout">Logout</Link>
      <Link className="menu-item" to="/contact">  Contact Us </Link>
     </Menu>

    <Switch>
              <Route exact path='/' component={Home} />
              <PrivateRoute path='/shop' component={GadgetsMain }/>
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/logout' component={Login}/>

    </Switch>

    </Router>
  );
};
