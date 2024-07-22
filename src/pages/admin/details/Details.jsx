import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleCustomerQuery, useHistoryPaymentCustomerQuery, useUpdateCustomerMutation } from '../../../context/customerApi'
import { FaMoneyBillAlt, FaPhone, FaUser } from 'react-icons/fa'
import { IoClose, IoLocationSharp } from 'react-icons/io5'

import './details.scss'
import { useCreatePaymentMutation } from '../../../context/paymentSlice'
import Modal from '../../../components/modal/Modal'
import loading from '../../../assets/loading.gif'
import { Pagination } from '@mui/material'

const formatter = new Intl.NumberFormat('en')


const Details = () => {

  let { id } = useParams()
  const { data } = useGetSingleCustomerQuery(id)


  const [payment, setPayment] = useState("")
  const [paymentComment, setPaymentComment] = useState("")

  const [fname, setFname] = useState(data?.innerData?.fname)
  const [lname, setLname] = useState(data?.innerData?.lname)
  const [phone, setPhone] = useState(data?.innerData?.phone_primary)
  const [address, setAddres] = useState(data?.innerData?.address)

  console.log(data?.innerData?.fname);


  const [paymentModal, setPaymentModal] = useState(false)
  const [editCustomer, setEditCustomer] = useState(false)
  const [historyPayment, setHistoryPayment] = useState(false)
  const [page, setPage] = useState(1)

  const [updateCustomer, { data: updatedCustomer }] = useUpdateCustomerMutation(data?.innerData?._id)
  const [createPayment, { data: paymentData, isLoading, isSuccess }] = useCreatePaymentMutation()
  const { data: historyCustomerData } = useHistoryPaymentCustomerQuery(data?.innerData?._id, { skip: page - 1 })

  const handleSubmit = (event) => {
    event.preventDefault()
    let paymentData = {
      customerId: data?.innerData?._id,
      amount: payment,
      comment: paymentComment
    }
    createPayment(paymentData)
  }

  const handleChange = (event, value) => {
    setPage(value)
  }

  let pagenationCount = Math.ceil(historyCustomerData?.totalCount / 10)

  let historyPaymentTable = historyCustomerData?.innerData?.map(el => (
    <tr key={el._id}>
      <td>{el.adminId.fname} {el.adminId.lname}</td>
      <td>{el.customerId.fname} {el.customerId.lname}</td>
      <td>{formatter.format(el.amount)} so'm</td>
      <td>{el.type}</td>
      <td>{el.updatedAt.split("T")[0]}</td>
      <td>{el.comment}</td>
    </tr>
  ))

  return (
    <div className='details'>
      <div className="details__top">
        <ul className='details__top-data'>
          <li><FaUser /> {data?.innerData?.fname} {data?.innerData?.lname}</li>
          <li><FaPhone /> {data?.innerData?.phone_primary}</li>
          <li><IoLocationSharp /> {data?.innerData?.address}</li>
          <li><FaMoneyBillAlt /> {formatter.format(data?.innerData?.budget)} so'm</li>
        </ul>
        <div className="details__top-btns">
          <button onClick={() => setPaymentModal(true)}>Change Payment</button>
          <button onClick={() => setEditCustomer(true)}>Edit Customer</button>
          <button onClick={() => setHistoryPayment(true)}>History Payment</button>
        </div>
        {
          paymentModal
            ?
            <Modal setPaymentModal={setPaymentModal}>
              <form onSubmit={handleSubmit} className='payment-modal' action="">
                <button onClick={() => setPaymentModal(false)} type='button'><IoClose /></button>
                <input value={payment} onChange={(e) => setPayment(e.target.value)} name='payment' type="text" placeholder='Payment amount' />
                <textarea value={paymentComment} onChange={(e) => setPaymentComment(e.target.value)} name='paymentComment' id="" placeholder='Your comment is here'></textarea>
                <button className='payment-modal__payment-btn'> {
                  isLoading
                    ?
                    <p>Loading...</p>
                    :
                    <p>Payment</p>
                }</button>
              </form>
            </Modal>
            :
            <></>
        }
        {
          editCustomer
            ?
            <Modal setPaymentModal={setEditCustomer}>
              <form className='edit-customer' action="">
                <button type='button' onClick={() => setEditCustomer(false)}><IoClose /></button>
                <div className="edit-customer__input">
                  <label htmlFor="">Fist Name</label>
                  <input value={fname} onChange={(e) => setFname(e.target.value)} name='fname' type="text" />
                </div>
                <div className="edit-customer__input">
                  <label htmlFor="">Last Name</label>
                  <input value={lname} onChange={(e) => setLname(e.target.value)} name='lname' type="text" />
                </div>
                <div className="edit-customer__input">
                  <label htmlFor="">Phone Number</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' type="text" />
                </div>
                <div className="edit-customer__input">
                  <label htmlFor="">Address</label>
                  <input value={address} onChange={(e) => setAddres(e.target.value)} name='address' type="text" />
                </div>
                <button>Create Customer</button>
              </form>
            </Modal>
            :
            <></>
        }
        {
          historyPayment
            ?
            <Modal setPaymentModal={setHistoryPayment}>
              <button className='details-table__close' onClick={() => setHistoryPayment(false)}><IoClose /></button>
              <table className='details-table'>
                <thead>
                  <th>Admin</th>
                  <th>Mijoz</th>
                  <th>To'lov summasi</th>
                  <th>To'lov turi</th>
                  <th>To'lov qilingan vaqt</th>
                  <th>Qoldirilgan sharx</th>
                </thead>
                <tbody>
                  {historyPaymentTable}
                </tbody>
              </table>
              <Pagination count={pagenationCount} onChange={handleChange} page={page} className='pagenation' color='primary' />
            </Modal>
            :
            <></>
        }

      </div>
    </div>
  )
}

export default Details