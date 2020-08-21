import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import GadgetsMainPage from '../src/containers/GadgetsPage/GadgetsMain'
import Contact from './components/Contact'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login/Login'
  

export default props => {


  return (
   <Router>
    <Menu>
      <Link className="menu-item" to="/" 
    
    >
        Login
        </Link>
        

      <Link className="menu-item" to="/about">
       About
      </Link>

      <Link className="menu-item" to="/contact">
        Contact Us
      </Link>
     
    </Menu>

    <Switch>
              <Route exact path='/' component={Login} />
              {/* <Route  path='/login' component={Login}/> */}
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />

          </Switch>

    </Router>
  );
};
