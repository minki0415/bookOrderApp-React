import React, { useContext } from 'react'
import classes from './Book.module.css'
import AddBookForm from './AddBookForm'
import CartContext from '../../store/CartContext'

const Book = (props) => {
  const cartContext = useContext(CartContext);
  // console.log(cartContext);

  const addItemToCartHandler = (amount) => {
    // console.log('addItemToCartHandler');
    // console.log(amount);

    const book = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    }

    cartContext.addItem(book);
  }



  return (
    <li className={classes.book}>
      <div className={classes.book__info}>
        <h3>{props.name} - <span className={classes.author}>{props.author}</span></h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <AddBookForm onAddToCart={addItemToCartHandler} />
    </li>
  )
}

export default Book;