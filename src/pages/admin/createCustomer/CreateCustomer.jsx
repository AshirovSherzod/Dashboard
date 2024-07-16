import React, { useState } from 'react'
import { useCreateCustomerMutation } from '../../../context/customerApi'

import './createCustomer.scss'

const initialState = {
    fname: "",
    lname: "",
    phone_primary: "",
    address: "",
    budget: "",
}


const CreateCustomer = () => {
    const [createCustomer, { data }] = useCreateCustomerMutation()
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        createCustomer(formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }



    return (
        <div className="createCustomer">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={formData.fname} onChange={handleChange} name="fname" id="" placeholder='first name' />
                <input type="text" value={formData.lname} onChange={handleChange} name="lname" id="" placeholder='last name' />
                <input type="text" value={formData.phone_primary} onChange={handleChange} name="phone_primary" id="" placeholder='phone number' />
                <input type="text" value={formData.address} onChange={handleChange} name="address" id="" placeholder='address' />
                <input type="text" value={formData.budget} onChange={handleChange} name="budget" id="" placeholder='budget' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateCustomer