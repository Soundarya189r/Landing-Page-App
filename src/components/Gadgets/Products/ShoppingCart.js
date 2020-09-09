import React, {useState} from 'react'

import mi10 from '../../../assets/mi10.jpeg'
import oneplus from '../../../assets/oneplus.jpeg'
import redmi from '../../../assets/redmi.jpeg'
import vivo from '../../../assets/vivo.jpeg'
import oneplus1 from '../../../assets/oneplus1.jpeg'
import redmi1 from '../../../assets/redmi1.jpeg'
import vivo1 from '../../../assets/vivo1.jpeg'
import mi102 from '../../../assets/mi102.jpeg'

import Product from './Product'
import Cart from './Cart'
import {Order, Fixed} from '../../../styledComp/ProductStyle'


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const ShoppingCart = () => {
 const [cart, setCart] = useState([]);
 const [page, setPage]=useState(PAGE_PRODUCTS);
 const [price, setPrice] = useState(0);
 const [products] = useState([

        {
            id: 1,
            name : "vivo",
            Lens1 : "12MP",
            Lens2 : "12MP+8MP+2MP+2MP",
            screensize : "6.5 in",
            OS:"Android",
            image : [vivo, vivo1],
            price : 123.00
        },
        {
            id: 2,
            name : "mi10",
            Lens1 : "13MP",
            Lens2 : "13MP+2MP",
            screensize : "6.22 in",
            OS:"Android",
            image:[mi10,mi102],
            price : 130.00

            
        },
        
        {
            id: 3,
            name : "oneplus",
            Lens1 : "20MP",
            Lens2 : "12MP",
            screensize : "6.1 in",
                OS:"Android",
                image:[oneplus, oneplus1],
                price : 190.00

            
        }, 
        
        {
            id : 4,
            name : "redmi",
            Lens1 : "32MP",
            Lens2 : "24MP",
            screensize : "6.3 in",
            OS:"Android",
            image: [redmi, redmi1],
            price : 150.00

            
        }
    ])

const navigateTo = (nextPage) =>{
      setPage(nextPage);
      };

const addCart=(products)=>{
        setCart([...cart, {...products}]);
        setPrice(price + products.price);
    }
  
const removeFromCart = (prdRemove) =>{
        setCart(cart.filter((products) => products !== prdRemove));
        setPrice(price-prdRemove.price);
   };

 const clearCart =()=>{
        setCart([]);
        setPrice(0);
 }

    return (
        <>
        <Fixed>
            <Order style={{ float:"right"}}onClick={()=>navigateTo(PAGE_CART)}>
            Go to Cart({cart.length})</Order>
        </Fixed>

    {page === PAGE_PRODUCTS && <Product products={products} addCart={addCart} />}  


    {page === PAGE_CART && <Cart cart={cart} 
        PAGE_PRODUCTS={PAGE_PRODUCTS}
        navigateTo={navigateTo} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart} 
        price={price}/>  
    }

    
 </>
    )
}

export default ShoppingCart
