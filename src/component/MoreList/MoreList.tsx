import './MoreList.css'
import Links from './Links.json'

import { NavLink } from 'react-router-dom'

import Topic from '@iconscout/react-unicons/icons/uil-comment-message'
import Moments from '@iconscout/react-unicons/icons/uil-bolt'
import Newsletters from '@iconscout/react-unicons/icons/uil-newspaper'
import Professionals from '@iconscout/react-unicons/icons/uil-rocket'
import Ads from '@iconscout/react-unicons/icons/uil-arrow-up-right'
import Analytics from '@iconscout/react-unicons/icons/uil-analysis'
import Settings from '@iconscout/react-unicons/icons/uil-setting'
import Help from '@iconscout/react-unicons/icons/uil-question-circle'
import Display from '@iconscout/react-unicons/icons/uil-monitor-heart-rate'
import Keyboard from '@iconscout/react-unicons/icons/uil-accessible-icon-alt'

import { Overlay } from '../'


const MoreList = ({className, isOpen, onRequestClose}) => {
  const icons = [
    { Topic: Topic },
    {  Moments:  Moments },
    {  Newsletters:  Newsletters },
    {  Professionals:  Professionals },
    {  Ads:  Ads },
    {  Analytics:  Analytics },
    {  Settings:  Settings },
    {  Help:  Help },
    {  Display:  Display },
    {  Keyboard:  Keyboard },
  ];
  
  const renderLinks = () => {
    return Links.links.map((el, index) => {
      const Icon = icons[index][el.name];
      return (
        <NavLink key={index} to={el.path} className='Link justify-start px-3 py-3 mb-0 hover:bg-gray-100 hover:text-gray-500'>
          <Icon/>
          <span className='LinkText block ml-4'>{el.name}</span>
        </NavLink>
      )
    })
  };
  
  return (
    <>
      <Overlay isOpen={isOpen} onRequestClose={onRequestClose} />
      <div className={["Dropdown", className].join(" ")}>
          {renderLinks()}
      </div>
    </>
  )
}

export default MoreList;