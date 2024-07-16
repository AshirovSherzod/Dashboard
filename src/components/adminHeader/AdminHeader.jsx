import React from 'react'
import { IoMdMenu } from 'react-icons/io'
import { FaBell } from 'react-icons/fa'

import './adminHeader.scss'
import Search from '../search/Search'
import img from '../../assets/user.png'
import { useDispatch } from 'react-redux'
import { showHeader } from '../../context/header/headerSlice'

const AdminHeader = () => {

  const dispatch = useDispatch()

  return (
    <header className='header'>
      <nav className='nav'>
        <div className="nav__left">
          <h1>Sidebar</h1>
          <button onClick={() => dispatch(showHeader())} className="nav__burger"><IoMdMenu /></button>
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
      </nav>
    </header>
  )
}

export default AdminHeader