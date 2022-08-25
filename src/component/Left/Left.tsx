import React, { useRef, useState } from 'react'

import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Home from '@iconscout/react-unicons/icons/uil-house-user'
import Notivication from '@iconscout/react-unicons/icons/uil-bell'
import Message from '@iconscout/react-unicons/icons/uil-envelope'
import Bookmarks from '@iconscout/react-unicons/icons/uil-bookmark'
import Lists from '@iconscout/react-unicons/icons/uil-list-ul'
import Profile from '@iconscout/react-unicons/icons/uil-user'
import More from '@iconscout/react-unicons/icons/uil-ellipsis-h'

import { NavLink } from 'react-router-dom'

import Links from './Links.json'
import './Left.css'
import {MoreList} from '../'

const Left: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  
  const icons = [
    { Home: Home },
    { Explore: '#' },
    { Notivication: Notivication },
    { Message: Message },
    { Bookmarks: Bookmarks },
    { Lists: Lists },
    { Profile: Profile },
    { More: More },
  ];
  
  const renderLinks = () => {
    return Links.links.map((el, index) => {
      const Icon = icons[index][el.name];
      return (
        <NavLink key={index} to={el.path} className='Link'>
          {typeof Icon == 'string' ? <span className='text-4xl font-italic font-normal'>{Icon}</span> : <Icon/>}
          <span className='LinkText'>{el.name}</span>
        </NavLink>
      )
    })
  };
  
  const moreHandler = (show:boolean) => {
    setShowMore(show);
  }
  
  return (
    <div className='Left'>
      <NavLink to="/" className='Link my-4' >
        <span className='TwitterLogo'>
          <Twitter color="#1d9bf0" size="40px" />
        </span>
      </NavLink>
      {renderLinks()}
      <button className={["Link", showMore ? 'active' : null].join(' ')} onClick={() => moreHandler(!showMore)}>
        <More />
        <span className={['LinkText'].join(' ')}>More</span>
      </button>
      <MoreList className={[showMore ? "active" : null]} />
    </div>
  )
}

export default Left