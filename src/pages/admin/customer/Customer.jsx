import React, { useEffect, useState } from 'react'

import './customer.scss'
import Table from '../../../components/table/Table.jsx'
import { useGetCustomersQuery } from '../../../context/customerApi/index.js'
import { useSelector } from 'react-redux'
import { GrPowerReset } from 'react-icons/gr'


const Customer = () => {

  const [page, setPage] = useState(1)
  const [paid, setPaid] = useState("")
  const [debt, setDebt] = useState("")
  const showSidebar = useSelector(state => state.showheader.value)
  const { data } = useGetCustomersQuery({ skip: page - 1, paidToday: paid, debt: debt })
  console.log(data);

  return (
    <div className={`customer ${showSidebar ? "customer__move" : ""}`}>
      <div className="customer__top">
        <h1>Jami Mijozlar: {data?.totalCount}</h1>
        <div className="customer__top-select">
          <select value={paid} onChange={(e) => {
            setPaid(e.target.value)
            setPage(1)
          }} name="" id="">
            <option value="" hidden disabled>To'lov qilganlar filterlash</option>
            <option value="2">Barchasi</option>
            <option value="1">To'lov Qilgan</option>
            <option value="-1">To'lov Qilmagan</option>
          </select>
          <select value={debt} onChange={(e) => {
            setPage(1)
            setDebt(e.target.value)
          }} name="" id="">
            <option value="" hidden disabled> Qarzdor va Haqdorlar</option>
            <option value="2">Barchasi</option>
            <option value="-1">Qarzdorlar</option>
            <option value="0">Nollar</option>
            <option value="1">Haqdorlar</option>
          </select>
          <button><span><GrPowerReset /> </span>Filterni Tozalash</button>
        </div>
      </div>
      <Table count={data?.totalCount} setPage={setPage} page={page} data={data?.innerData} />
    </div>

  )
}

export default Customer