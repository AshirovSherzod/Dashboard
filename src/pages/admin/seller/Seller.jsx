import React, { useEffect, useState } from 'react'
import Table from '../../../components/table/Table'

import './seller.scss'
import { useGetSellersQuery } from '../../../context/sellerApi'

const Seller = () => {

  const { data } = useGetSellersQuery()

  console.log(data);
  return (
    <div className='seller'>
      <Table data={data?.innerData} />
    </div>
  )
}

export default Seller