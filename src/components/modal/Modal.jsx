import React from 'react'

import './modal.scss'

const Modal = ({ children, setPaymentModal }) => {
  return (
    <>
      <div className='modal'>
        {children}
      </div>
      <div onClick={()=> setPaymentModal(false)} className="overlay"></div>
    </>
  )
}

export default Modal