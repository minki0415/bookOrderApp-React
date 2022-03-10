import React, { useRef, useState } from 'react'
import Button from '../Commons/Button'
import Input from '../Commons/Input';
import classes from './AddBookForm.module.css'
import _uniqueId from 'lodash/uniqueId';

const AddBookForm = (props) => {
    const [id] = useState(_uniqueId('prefix-'));

    const inputRef = useRef();
    // console.log(inputRef);

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log('submitHandler called');
        // console.log(event.target.value);
        // console.log(inputRef.current.value);
        // const amountValue = parseInt(inputRef.current.value);
        // const amoutValueToNumber = +amountValue; // 바꾸려는 값이 숫자일 경우 사용가능
        // console.log(typeof amountValue);
        const amountValue = parseInt(inputRef.current.value);

        props.onAddToCart(amountValue);
    };

  return (
    <form className={classes.form}>
        <Input ref={inputRef} label="Amount" input={ {id : id, type:'number', defaultValue:'1'} }/>
        <Button type="submit" onClick={submitHandler}>Add</Button>
    </form>
  )
}

export default AddBookForm