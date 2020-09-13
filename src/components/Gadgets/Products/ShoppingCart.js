import React, {useEffect, useContext} from 'react'


import Product from './Product'
import { Fixed, NavStyle} from '../../../styledComp/ProductStyle'
import ProductContext from './context/productContext';





const ShoppingCart = () => {

    const context = useContext(ProductContext);

    useEffect(() => {
      console.log(context);
    }, [context]);
    
 


    return (
        <>
        <Fixed>
            <NavStyle  to="/shop/cart">
            Go to Cart({context.cart.length})</NavStyle>

        </Fixed>
        <Product/>


    
 </>
    )
}

export default ShoppingCart;
  
