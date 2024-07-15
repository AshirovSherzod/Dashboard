import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import { FaBell } from 'react-icons/fa'

import './adminHeader.scss'
import Search from '../search/Search'
import img from '../../assets/user.png'

const AdminHeader = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="nav__left">
          <button className="nav__burger"><IoMdMenu /></button>
          <Search />
        </div>
        <div className="nav__right">
          <button><FaBell /></button>
          <div className="nav__right-user">
            <div className="nav__right-user__img">
              <img src={img} alt="" />
            </div>
            <h3>Moni Roy</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader