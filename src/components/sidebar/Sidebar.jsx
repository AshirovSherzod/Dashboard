import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaStore, FaUser, FaUserEdit, FaUserTie } from 'react-icons/fa'

import './sidebar.scss'
import { useDispatch, useSelector } from 'react-redux'

const Sidebar = () => {

  const dispatch = useDispatch()
  const showSidebar = useSelector(state => state.showheader.value)

  console.log(showSidebar);
  return (
    <div className={`sidebar ${showSidebar ? "sidebar__hidden" : ""}`}>
      {/*  */}
      <ul className={`sidebar__links`}>
        <NavLink to={"/admin/customer"}>
          <p><FaUser /></p>
          <p>Customer</p>
        </NavLink>
        <NavLink to={"/admin/createCustomer"}>
          <p><FaUserEdit /></p>
          <p>Create Customer</p>
        </NavLink>
        <NavLink to={"/admin/seller"}>
          <p><FaUserTie /></p>
          <p>Seller</p>
        </NavLink>
        <NavLink to={"/admin/store"}>
          <p><FaStore /></p>
          <p>Store</p>
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar