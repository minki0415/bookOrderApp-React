import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const ModalWindow = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>    
        </div>
    )
}

const portalElement = document.getElementById('modal-window');

const Modal = (props) => {

  return (
      ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)
  )
}

export default Modal