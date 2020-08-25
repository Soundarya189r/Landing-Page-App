import React from "react"
import Hoc from "../../../wrapper/hoc"

const orderSummary = ( props ) => {
    // const gagdetsSummary = Object.keys(props.gadgets).map( igKey => {
    // return (
    //     <li key={igKey}>
    //         <span style={{ textTransform: 'capitalize' }}>
    //             {igKey}</span>: {props.gadgets[igKey]}
    //     </li> );
    // } );

    return(
      <Hoc>
        <h3>Your Order</h3>
            {/* <p> Your Gadget Orders:</p> */}
             {/* <ul> {gagdetsSummary} </ul> */}
            <p><strong>Total Amount to be Paid:{props.price.toFixed(2)}</strong></p>
            <p>Continue to Order?</p>
     <button onClick={props.purchaseCancel} style={{color:"red"}}>CANCEL</button>
     <button onClick={props.purchaseContinue}
     style={{color:"green"}}
     >CONTINUE</button>
    
      </Hoc>
      );
};

export default orderSummary;
