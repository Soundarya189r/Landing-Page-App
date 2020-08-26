import React, { Component } from 'react'
import Hoc from "../../wrapper/hoc"
import GadgetSelect from "../../components/Gadgets/GadgetsSelect/GadgetsSelect"
import Modal from '../../../src/components/UI/Modal/Modal'
import OrderSummary from '../../../src/components/Gadgets/OrderSummary/OrderSummary'
import axios from 'axios';
import Gadgets from '../../components/Gadgets/Gadgets'
import {Title} from '../../styledComp/viewComp'

const  GADGET_PRICES={
    pc:50000,
    iphone:60000,
    android:30000,
    laptop: 65000
    };

export class GadgetsMain extends Component {
    
    state = {
        gadgets: {
            iphone: 0,
            laptop: 0,
            pc: 0,
            android: 0
            },
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
        order:false
        
    }
    updatePurchaseState(gadgets){
        const sum=Object.keys(gadgets)
        .map(igKey=>{
            return gadgets[igKey];
        })
        .reduce( (sum,el)=>{
            return sum+el;
        },0);
        this.setState( { purchasable: sum > 0 } );
    }

    addGadgetsHandler=(type)=>{
      const oldCount = this.state.gadgets[type];
      const updatedCount=oldCount +1;
      const updatedGadgets={
          ...this.state.gadgets
      };
      updatedGadgets[type]=updatedCount;

      const priceAddition = GADGET_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState( { totalPrice: newPrice, gadgets: updatedGadgets } ); 
      this.updatePurchaseState(updatedGadgets);
    }


    orderHandler=()=>{
        this.setState({order : true});
    }

    purchaseHandler=()=>{
        this.setState({purchasing : true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing :false});
        const newPrice=0;
        this.setState({totalPrice:newPrice});
        
    }

    purchaseContinueHandler = ()=>{
        alert('You Order is placed!')
        const price= this.state.totalPrice
        const Gadget = this.state.gadgets

        axios.post(`https://jsonplaceholder.typicode.com/posts`,{price, Gadget})
        .then(res => 
            {
                console.log(res.data);

            });

    
    }

    render() {
        return (    
     <Hoc>
         <Modal show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
<OrderSummary gadgets={this.state.gadgets}
price={this.state.totalPrice}
purchaseCancel={this.purchaseCancelHandler}
purchaseContinue={this.purchaseContinueHandler}
></OrderSummary>
         </Modal>
         <Title>Shopping Cart</Title>
<Gadgets/>
         <GadgetSelect gadgetsAdded={this.addGadgetsHandler}
price={this.state.totalPrice}
purchasable={this.state.purchasable}
ordered={this.purchaseHandler}
/>
            </Hoc>
         
        )
    }
}

export default GadgetsMain
