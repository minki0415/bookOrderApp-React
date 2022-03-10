import React, { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {
    const [cartState, setCartState] = useState({
        items: [{id: 'book1', name: 'THE OLD MAN AND SEA', price: 15.23, amount: 5}],
        totalAmount: 76.15
    });

    const cartContext ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
    }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartProvider