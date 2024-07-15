import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaStore, FaUser, FaUserTie } from 'react-icons/fa'

import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1><span>Side</span>bar</h1>
      <ul className='sidebar__links'>
        <NavLink to={"/customer"}>
          <li>
            <FaUser />
            <span>Customer</span>
          </li>
        </NavLink>
        <NavLink to={"/seller"}>
          <li>
            <FaUserTie />
            <span>Seller</span>
          </li>
        </NavLink>
        <NavLink to={"/store"}>
          <li>
            <FaStore />
            <span>Store</span>
          </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Sidebar