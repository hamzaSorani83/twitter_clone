import React from 'react'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header flex justify-between p-4 dark:bg-'>
      <span>Home</span>
      <Link to="/" className='Link'>
        <Twitter color="#1d9bf0" />
      </Link>
    </div>
  )
}

export default Header