import React, { useEffect, useState } from 'react'
import Table from '../../../components/table/Table'
import axios from 'axios'

import './store.scss'
import { useGetProductsQuery } from '../../../context/productsApi'

const Store = () => {

  const { data } = useGetProductsQuery()

  console.log(data);

  let table = data?.innerData.map(el => (
    <tr key={el._id}>
      <td>{el.__v}</td>
      <td>{el.title}</td>
      <td>{el.quantity}</td>
      <td>{el.units}</td>
      <td> <p style={{ backgroundColor: `${el.price < 0 ? "#ef38264d" : "#00b69b66"}`, color: `${el.price < 0 ? "red" : "green"}` }}> {el.price}</p></td>
    </tr>
  ))

  return (
    <div className='store'>
      <table className='store__table'>
        <thead>
          <tr>
            <th>№</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Units</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>

      </table>
    </div>
  )
}

export default Store