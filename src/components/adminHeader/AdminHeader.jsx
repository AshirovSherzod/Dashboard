import React, { useEffect, useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { FaBell } from 'react-icons/fa'

import './adminHeader.scss'
import Search from '../search/Search'
import img from '../../assets/user.png'
import { useDispatch } from 'react-redux'
import { showHeader } from '../../context/header/headerSlice'
import { useGetProfileQuery } from '../../context/adminSlice'

const AdminHeader = () => {

  const dispatch = useDispatch()
  // const [shortFname, setShortFname] = useState("")
  // const [shortLname, setShortLname] = useState("")


  const { data } = useGetProfileQuery()
  let fname = data?.innerData?.user?.fname
  let lname = data?.innerData?.user?.lname
  let role = data?.innerData?.user?.role
  // setShortFname(fname.split()
  // setShortLname(lname.split(""))


  return (
    <header className='header'>
      <nav className='nav'>
        <div className="nav__left">
          <div className="nav__left-profile">
            <div className="nav__left-profile__img">
              {fname?.split("")[0]}{lname?.split("")[0]}
            </div>
            <div className="nav__left-profile__title">
              <h1>{fname} {lname}</h1>
              <p>{role}</p>
            </div>
          </div>
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