import React, { useState } from 'react'

import './createProducts.scss'
import { useGetSellersSearchQuery } from '../../../context/sellerApi'
import { IoClose } from 'react-icons/io5'
import { useCreateProductMutation } from '../../../context/productsApi'

const CreateProducts = () => {

    const [value, setValue] = useState("")
    const [seller, setSeller] = useState(null)
    const [title, setTitle] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [units, setUnits] = useState("")
    const [category, setCategory] = useState("")
    const [comment, setComment] = useState("")

    const [createProduct, { data: productData, isSuccess }] = useCreateProductMutation()
    const { data, isError } = useGetSellersSearchQuery({ value: value.trim() })

    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            title,
            price: +price,
            units,
            quantity,
            category,
            comment,
            sellerId: seller._id
        }

        createProduct(obj)
    }

    return (
        <div className='create-products'>
            <h1>Create Products</h1>

            <div className="forms">
                {
                    seller ? <p>{seller.fname} <button onClick={() => setSeller(null)}><IoClose /></button></p> :
                        <form className='form__main' action="">
                            <input autoFocus type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Seller Name' />
                            <div className="input__modal">
                                {
                                    !value.trim() ? <></> :
                                        isError ? <p>Sotuvchi topilmadi</p> :
                                            data?.innerData?.map(el => (
                                                <p key={el._id} onClick={() => {
                                                    setSeller(el)
                                                    setValue("")
                                                }}>{el.fname} {el.lname}</p>
                                            ))
                                }
                            </div>
                        </form>

                }
                <form onClick={handleSubmit} action="">
                    {
                        seller
                            ?
                            <>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' />
                                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="text" placeholder='quantity' />
                                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder='price' />
                                <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder='category' />
                                <select value={units} onChange={(e) => setUnits(e.target.value)} name="" id="">
                                    <option value="dona">dona</option>
                                    <option value="kg">kg</option>
                                    <option value="gr">gr</option>
                                    <option value="quti">quti</option>
                                </select>
                                <textarea value={comment} onChange={(e) => setComment(e.target.value)} name="" id="" placeholder='comment'></textarea>
                                <button className='btn'>Submit</button>
                            </>
                            :
                            <></>
                    }
                </form>
            </div>
        </div>

    )
}

export default CreateProducts