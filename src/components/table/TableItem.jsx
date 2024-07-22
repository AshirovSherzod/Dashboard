import React, { useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { TiPin } from 'react-icons/ti'
import { usePinCustomerMutation } from '../../context/customerApi'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import Modal from '../modal/Modal'
import { useCreatePaymentMutation } from '../../context/paymentSlice'

const formatter = new Intl.NumberFormat('en')

const TableItem = ({ data }) => {

    const [showModal, setShowModal] = useState(false)
    const [payment, setPayment] = useState("")
    const [paymentComment, setPaymentComment] = useState("")
    const [showPaymentModal, setPaymentModal] = useState(false)

    const [pinCustomer, { data: qwerty }] = usePinCustomerMutation()
    const [createPayment, { data: paymentData, isLoading, isSuccess, error }] = useCreatePaymentMutation()

    const handlePinCustomer = (customerData) => {
        pinCustomer({ data: customerData })
        console.log(qwerty);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let paymentData = {
            customerId: data._id,
            amount: payment,
            comment: paymentComment
        }
        createPayment(paymentData)
    }

    return (
        <>
            <tr>
                <td>{data.__v}</td>
                <td className='pin'>{data.pin ? <TiPin /> : ""}</td>
                <td>{data.fname} {data.lname}</td>
                <td>{data.address}</td>
                <td>{data.phone_primary}</td>
                <td> <p style={{ color: `${data.budget < 0 ? "red" : "green"}`, fontWeight: `500` }}> {formatter.format(data.budget)} so'm</p></td>
                <td>
                    <button className='payment' onClick={() => setPaymentModal(true)}>Payment</button>
                </td>
                <td className='td'>
                    <button onClick={() => setShowModal(prev => !prev)}>{showModal ? <IoClose /> : <HiOutlineDotsVertical />}</button>
                    <div className={`td__modal ${showModal ? "td__show" : ""}`}>
                        <button onClick={() => {
                            setShowModal(false)
                            handlePinCustomer(data)
                        }}
                        >{data.pin ? "Unpin" : "Pin"}</button>
                        <Link onClick={() => setShowModal(false)} to={`/admin/customer/${data._id}`}>Details</Link>
                    </div>
                </td>

            </tr>
            {
                showPaymentModal
                    ?
                    <Modal setPaymentModal={setPaymentModal}>
                        <form onSubmit={handleSubmit} className='payment-modal' action="">
                            <button onClick={() => setPaymentModal(false)} type='button'><IoClose /></button>
                            <input value={payment} onChange={(e) => setPayment(e.target.value)} name='payment' type="text" placeholder='Payment amount' />
                            <textarea value={paymentComment} onChange={(e) => setPaymentComment(e.target.value)} name='paymentComment' id="" placeholder='Your comment is here'></textarea>
                            <button className='payment-modal__payment-btn'>Payment</button>
                        </form>
                    </Modal>
                    :
                    <></>
            }
        </>
    )
}

export default TableItem