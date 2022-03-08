import React from 'react'
import classes from './CartItem.module.css'

const CartItem = (props) => {
  return (
    <li className={classes['cart-item']}>
        <h2>{props.name}</h2>
        <div className="summary">
            <span className='price'>$ {props.price}</span>
            <span className="amount">x 3 {props.amount}</span>
        </div>  
    </li>
  )
}

export default CartItem