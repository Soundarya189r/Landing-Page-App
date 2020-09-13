import React, {useContext, useEffect} from 'react'
import GridView from './GridView';
import MoreLess from './moreLess';
import {Order, Wrap, Name, Specs,  Features} from '../../../styledComp/ProductStyle'
import ProductContext from './context/productContext';


const Product = props => {
  const context = useContext(ProductContext);

  useEffect(() => {
    console.log(context);
  }, [context]);

    return (
      <div>
        

      <h1 style={{textAlign:'center'}}>Shopping Cart</h1>
      {/* <ProductContext.Consumer>
        { context=>( */}
          <>
          {
        context.products.map( (prd, index) => (
            <Wrap  key ={index} >
   

   <Name>{prd.name}</Name>
             <GridView image={prd.image} name={prd.name} />
            <Specs>PRODUCT SPECIFICATIONS
          <MoreLess>
            
            <p>Screen Size: {prd.screensize}</p>
            <p>OS: {prd.OS}</p>
            <p>Lens1: {prd.Lens1}</p>
            <p>Lens2: {prd.Lens2}</p>
            </MoreLess>
            <Features>${prd.price.toFixed(2)}</Features>

          </Specs>

          <Order 
         onClick={context.addCart.bind(this, prd)}
>Add to Cart</Order>


              </Wrap>
            ))
        }
        </>
        {/* )
        }

    </ProductContext.Consumer> */}
    </div>
    );


    
}

export default Product
