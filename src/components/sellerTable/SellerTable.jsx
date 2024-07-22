import React, { useState } from 'react'

import './sellertable.scss'
import { Pagination } from '@mui/material'
import SellerTableItem from './SellerTableItem'

const SellerTable = ({ data, page, setPage, count }) => {

  let table = data?.map(el => (
    <SellerTableItem key={el._id} data={el} />
  ))

  const handleChange = (event, value) => {
    setPage(value)
  }

  let pagenationCount = Math.ceil(count / 10)

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>№</th>
            <th></th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Tel</th>
            <th>Budget</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
      <Pagination count={pagenationCount} onChange={handleChange} page={page} className='pagenation' color='primary' />
    </>
  )
}

export default SellerTable