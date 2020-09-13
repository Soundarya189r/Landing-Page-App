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
import ShoppingCart from './components/Gadgets/Products/ShoppingCart'
import Cart from './components/Gadgets/Products/Cart'
  
export default props => {

  const NotFound=()=>{
    return(
<div style={{textAlign: 'center'}}>
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>    );
  }
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
              <PrivateRoute exact path="/shop" component={ShoppingCart} />
              <PrivateRoute path='/profile' component={Login}/>
              <Route path="/shop/cart" component={Cart}  />
              <Route path="*" component={NotFound} />


    </Switch>

    </Router>
  );
};
