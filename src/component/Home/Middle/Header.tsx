import React from 'react'
import {Twitter} from '@iconscout/react-unicons/icons/uil-twitter'

const Header = () => {
  return (
    <div className='Header flex justify-between p-4 dark:bg-'>
      <span>Home</span>
      <Twitter />
      {/* <img src={Logo} alt="Logo" /> */}
    </div>
  )
}

export default Header