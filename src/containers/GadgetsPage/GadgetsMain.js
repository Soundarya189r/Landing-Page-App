import React, { Component } from 'react'
import Hoc from "../../wrapper/hoc"
import GadgetSelect from "../../components/Gadgets/GadgetsSelect/GadgetsSelect"
import Modal from '../../../src/components/UI/Modal/Modal'
import OrderSummary from '../../../src/components/Gadgets/OrderSummary/OrderSummary'
import axios from 'axios';


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

        persons:[]
        
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
        .then(res=>
            {
                console.log(res);
this.setState({persons:res.data});
        })
    }
    updatePurchaseState(gadgets){
//         const gadgets={
// ...this.state.gadgets
//         };
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

    purchaseHandler=()=>{
        this.setState({purchasing : true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing :false});
    }
    purchaseContinueHandler = ()=>{
        alert('You Continue!')
        const price= this.state.totalPrice

        axios.post(`https://jsonplaceholder.typicode.com/posts`,{price})
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
