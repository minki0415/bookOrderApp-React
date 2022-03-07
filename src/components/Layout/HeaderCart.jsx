import React from 'react'
import classes from './HeaderCart.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCart = () => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>내 장바구니</span>
    </button>
  )
}

export default HeaderCart