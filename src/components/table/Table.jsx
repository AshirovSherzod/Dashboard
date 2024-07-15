import React from 'react'

import './table.scss'

const Table = ({ data }) => {
  console.log(data)

  let table = data?.map(el => (
    <tr key={el.id}>
      <th>{el.id}</th>
      <th>{el.firstName} {el.lastName}</th>
      <th>{el.address.country}</th>
      <th>{el.phone}</th>
      <th>{el.height}</th>
    </tr>
  ))
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>№</th>
          <th>Full Name</th>
          <th>Address</th>
          <th>Tel</th>
          <th>Budget</th>
        </tr>
      </thead>
      <tbody>
        {table}
      </tbody>

    </table>
  )
}

export default Table