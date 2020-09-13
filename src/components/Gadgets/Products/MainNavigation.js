import React from 'react';
import { NavLink} from 'react-router-dom';


const mainNavigation = props => (
  <>
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/shop/view">Products</NavLink>
        </li>
        <li>
          <NavLink to="/shop/cart">Cart ({props.cartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
</>
);

export default mainNavigation;