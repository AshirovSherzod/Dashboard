import React, { useEffect, useState } from 'react'

import './customer.scss'
import Table from '../../../components/table/Table.jsx'
import { useGetCustomersQuery } from '../../../context/customerApi/index.js'
import { useSelector } from 'react-redux'

const Customer = () => {

  const showSidebar = useSelector(state => state.showheader.value)
  const {data} = useGetCustomersQuery()


  return (
    <div className={`customer ${ showSidebar ? "customer__move" : ""}`}>
      <Table data={data?.innerData} />
    </div>

  )
}

export default Customer