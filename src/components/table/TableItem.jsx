import React, { useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { TiPin } from 'react-icons/ti'
import { usePinCustomerMutation } from '../../context/customerApi'

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
    const [isPin, setIsPin] = useState(false)
    const [pinCustomer, { data: customerData }] = usePinCustomerMutation()
    console.log(customerData);

    const handlePinCustomer = () => {

        let pin = {
            fname: `${data.fname}`,
            lname: `${data.lname}`,
            phone_primary: `${data.phone_primary}`,
            address: `${data.address}`,
            budget: `${data.budget}`,
            pin: isPin
        }

        pinCustomer(pin)
    }

    return (
        <tr>
            <td>{data.__v}</td>
            <td className='pin'>{data.pin ? <TiPin /> : ""}</td>
            <td>{data.fname} {data.lname}</td>
            <td>{data.address}</td>
            <td>{data.phone_primary}</td>
            <td> <p style={{ backgroundColor: `${data.budget < 0 ? "#ef38264d" : "#00b69b66"}`, color: `${data.budget < 0 ? "red" : "green"}` }}> {data.budget}</p></td>
            <td className='td'>
                <button onClick={() => setShowModal(prev => !prev)}><HiOutlineDotsVertical /></button>
                <div className={`td__modal ${showModal ? "td__show" : ""}`}>
                    <button onClick={() => {
                        setShowModal(prev => !prev)
                        setIsPin(prev => data.pin ? true : false)
                        console.log(isPin)
                        handlePinCustomer()
                    }}
                    > <span><TiPin /> </span> {data.pin ? "Unpin" : "Pin"}</button>
                </div>
            </td>
        </tr>
    )
}

export default TableItem