import React, { useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { TiPin } from 'react-icons/ti'
import { usePinCustomerMutation } from '../../context/customerApi'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'

const pin = {
    fname: "Ramziddin",
    lname: "Ergashaliyev",
    phone_primary: "998935747600",
    address: "Namangan",
    "budget": 0,
    "pin": true
}

const TableItem = ({ data }) => {

    const [showModal, setShowModal] = useState(false)

    const [pinCustomer, { data: qwerty }] = usePinCustomerMutation()

    const handlePinCustomer = (customerData) => {
        pinCustomer({data: customerData})
        console.log(qwerty);
    }

    return (
        <tr>
            <td>{data.__v}</td>
            <td className='pin'>{data.pin ? <TiPin /> : ""}</td>
            <td>{data.fname} {data.lname}</td>
            <td>{data.address}</td>
            <td>{data.phone_primary}</td>
            <td> <p style={{ color: `${data.budget < 0 ? "red" : "green"}`, fontWeight: `500` }}> {data.budget}</p></td>
            <td className='td'>
                <button onClick={() => setShowModal(prev => !prev)}>{showModal ? <IoClose /> : <HiOutlineDotsVertical />}</button>
                <div className={`td__modal ${showModal ? "td__show" : ""}`}>
                    <button onClick={() => {
                        setShowModal(false)
                        handlePinCustomer(data)
                    }}
                    >{data.pin ? "Unpin" : "Pin"}</button>
                    <Link onClick={()=> setShowModal(false)} to={`/admin/details/${data._id}`}>Details</Link>
                </div>
            </td>
        </tr>
    )
}

export default TableItem