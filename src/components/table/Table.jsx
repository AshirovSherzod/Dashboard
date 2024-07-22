import React, { useState } from 'react'

import './table.scss'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import TableItem from './TableItem'
import { Pagination } from '@mui/material'

const Table = ({ data, page, setPage, count }) => {

  let table = data?.map(el => (
    <TableItem key={el._id} data={el} />
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

export default Table