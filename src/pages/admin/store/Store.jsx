import React, { useEffect, useState } from 'react'
import Table from '../../../components/table/Table'
import axios from 'axios'

import './store.scss'

const API = "https://dummyjson.com"

const Store = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then(res => setData(res.data.users))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='store'>
      <Table data={data} />
    </div>
  )
}

export default Store