import React, { useState } from 'react'

import './table.scss'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import TableItem from './TableItem'

const Table = ({ data }) => {
  console.log(data)

  let table = data?.map(el => (
    <TableItem data={el} />
  ))

  return (
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
        </tr>
      </thead>
      <tbody>
        {table}
      </tbody>

    </table>
  )
}

export default Table