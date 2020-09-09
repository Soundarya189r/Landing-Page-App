import React from 'react'
import styled from 'styled-components'
import {Order, Fixed, Wrap, Name, Specs} from '../../../styledComp/ProductStyle'
import ModalHook from './Modal'

const Label=styled.label`
padding: 5em;
font: inherit;
`;


const Cart = (props) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      <>
      <Fixed style={{top: '12%'}}>
      <Order style={{float:'right'}}onClick={()=>props.navigateTo(props.PAGE_PRODUCTS)}>Back to Products</Order>
      </Fixed>

      {props.cart.length>0 && 
       <Fixed style={{top : '24%'}}>
    <Order style={{float:'right'}}
    onClick={props.clearCart}>Clear Cart
    </Order>
    </Fixed>  
      } 
      <Wrap>
              <Name>Your Cart</Name>
        
        { props.cart.map( (prd, index) => (
           
           <Specs key ={index} >
            <Label>Product: {prd.name}</Label>
            <Label>MRP: ${prd.price.toFixed(2)}</Label>
              <button  style={{position:'relative', cursor:'pointer'}}
              onClick={()=>props.removeFromCart(prd)
              }>Remove</button> 
              </Specs>
            ))
        }
       
         
{
  props.cart.length>0 && 
  <div style={{textAlign: 'center'}}>
<h1>Total amount to paid: {props.price.toFixed(2)}</h1>
<p>Wish to Continue? Hit Order</p>
<Order onClick={openModal}>Order</Order>
<ModalHook modalIsOpen={modalIsOpen} closeModal={closeModal}>You're order on the way!!!
<h1>OrderId: XYZ{Math.random() * 100}</h1>
<h1>Paid Amount: {props.price.toFixed(2)}</h1>

</ModalHook>
</div>
}
</Wrap>



</>
    )
}

export default Cart
