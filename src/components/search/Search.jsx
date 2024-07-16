import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

import './search.scss'

const Search = () => {
    return (
        <form className='search' action="">
            <IoSearchOutline />
            <input type="text" placeholder='Search' />
        </form>
    )
}

export default Search