import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

import './admin.scss'
import AdminHeader from '../../components/adminHeader/AdminHeader'

const Admin = () => {
  return (
    <main className='admin'>
      <Sidebar />
      <div className="admin__content">
        <AdminHeader />
        <Outlet />
      </div>
    </main>
  )
}

export default Admin