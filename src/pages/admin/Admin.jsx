import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

import './admin.scss'
import AdminHeader from '../../components/adminHeader/AdminHeader'
import { useSelector } from 'react-redux'

const Admin = () => {

  const showSidebar = useSelector(state => state.showheader.value)
  return (
    <main className='admin'>
      <AdminHeader />
      <div className={`admin__content ${showSidebar ? "admin__move" : ""}`}>
        <Sidebar />
        <Outlet />
      </div>
    </main>
  )
}

export default Admin