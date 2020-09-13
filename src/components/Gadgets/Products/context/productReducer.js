import {ADD_CART, REMOVE_CART, CLEAR_CART} from './types'


const addCart=(products, state)=>{
    const updatedCart=([...state.cart, {...products}]);
    const Price=(state.price + products.price);

    console.log(updatedCart,Price);
    return {...state, cart: updatedCart, price: Price};
};


const removeFromCart = (products, state) =>{
    const updatedCart=(state.cart.filter((prd) => prd !== products));
    const Price=(state.price-products.price);
    console.log('Hi'+Price);
    return{...state, cart: updatedCart, price: Price};
};

const clearCart =(state)=>{
    const updatedCart= [];
    const Price=0;
    return {...state, cart:updatedCart, price:Price};
}


export const productReducer=(state,action)=>{
        switch(action.type){
            case ADD_CART:
                    localStorage.setItem("Product", JSON.stringify("totalPrice",state.price));
                    return addCart(action.products, state);


            case CLEAR_CART:
            return clearCart(state);

            case REMOVE_CART:
            return removeFromCart(action.products, state);

            default: return state;

}};

