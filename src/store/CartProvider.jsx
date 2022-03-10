import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const [cartState, setCartState] = useState({
        // items: [{id: 'book1', name: 'THE OLD MAN AND SEA', price: 15.23, amount: 5}],
        // totalAmount: 76.15
        items:[],
        totalAmount:0,
    });

    const addItemToCartHandler = (item) => {
        // console.log('addItemToCartHandler called');
        console.log(item);

        // 1. 기본으로 add할 경우, 
        // 기존에 cart에 등록된 items에 방금 새로 전달된 item 추가.
        const updatedItem = [
            ...cartState.items,
            item
        ];

        setCartState({items:updatedItem});
    };


    const cartContext ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
    }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartProvider