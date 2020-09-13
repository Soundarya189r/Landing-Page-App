import React , {useContext,useEffect}from 'react'
import {Order, Fixed, Wrap, Specs, Label, NavStyle} from '../../../styledComp/ProductStyle'
import ModalHook from './Modal'
import ProductContext from './context/productContext';


const Cart = () => {

  const context = useContext(ProductContext);

  useEffect(() => {
localStorage.setItem("Context",context.price);
}, [context]);

  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

    return (
      // <ProductContext.Consumer>
      // { context=>(
      <>
      <h1 style={{textAlign:'center'}}>Your Cart</h1>
      <Fixed style={{top: '12%'}}>
      <NavStyle to="/shop" >Back to Products</NavStyle>
      </Fixed>


      {context.cart.length >0 ?
      
      <>
       <Fixed style={{top : '24%'}}>
      <Order style={{float:'right'}}
      onClick={context.clearCart}>Clear Cart
      </Order>
      </Fixed>  
     
            
                  <Wrap>
        { context.cart.map( (prd,index) => (
           
           <Specs key ={index} >
            <Label>Product: {prd.name}</Label>
            <Label>MRP: ${prd.price.toFixed(2)}</Label>
              <button  style={{position:'relative', cursor:'pointer'}}
              onClick={context.removeFromCart.bind(this,prd)}>Remove</button> 
              </Specs>
            ))
        }
       
        
  <div style={{textAlign: 'center'}}>
<h1>Total amount to paid: {context.price.toFixed(2)}</h1>
<p>Wish to Continue? Hit Order</p>
<Order onClick={openModal}>Order</Order>
<ModalHook modalIsOpen={modalIsOpen} closeModal={closeModal}>You're order on the way!!!
<p >OrderId : XYZ{Math.floor(Math.random() * 100)}</p>
       <p>Paid Amount: ${context.price.toFixed(2)}</p>
      
</ModalHook>
</div>

       

       </Wrap>
</>
: <p style={{textAlign: 'center'}}>Your cart is empty! </p>
      }

</>

)
}

// </ProductContext.Consumer>
//     )
// }

export default Cart
