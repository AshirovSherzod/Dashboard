import React, { useEffect, useState } from 'react'

import './customer.scss'
import Table from '../../../components/table/Table.jsx'
import axios from 'axios'

const API = "https://dummyjson.com"

const Customer = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then(res => setData(res.data.users))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='customer'>
      <Table data={data} />
    </div>

  )
}

export default Customer