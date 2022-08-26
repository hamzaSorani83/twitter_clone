import React from 'react'

import Close from '@iconscout/react-unicons/icons/uil-multiply'
import Images from '@iconscout/react-unicons/icons/uil-image'
import Smile from '@iconscout/react-unicons/icons/uil-smile'
import Calender from '@iconscout/react-unicons/icons/uil-calender'
import Position from '@iconscout/react-unicons/icons/uil-map-pin-alt'
// backend
import UserPhoto from '@iconscout/react-unicons/icons/uil-user-circle'

import './TweetModal.css'
import { Overlay } from '../'

interface IProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal: React.FC<IProps> = ({isOpen, onRequestClose}) => {
  return (
    <>
    <Overlay isOpen={isOpen} onRequestClose={onRequestClose} />
    <div className={['Modal', isOpen ? 'active' : ''].join(' ')}>
        <section className="p-3 border-b border-gray-600">
          <button onClick={onRequestClose} className='h-6 w-6 text-blue-500 hover:text-blue-400 cursor-pointer'>
            <Close />
          </button>
        </section>
        <section className="w-full flex px-3 py-2">
          <div className="mr-1">
            <span className='rounded-full text-blue-400' >
              <UserPhoto size="50px"/>
            </span>
          </div>
          <div className="flex-1">
            <textarea className="w-full p-2 bg-transparent outline-none placeholder-gray-400 text-white resize-none" rows={4} placeholder="What's happening?"></textarea>
            <div className="flex items-center justify-between pt-2 border-t border-gray-700">
              <div className="flex text-blue-500 gap-2">
                <Images />
                <Smile />
                <Position />
                <Calender />
              </div>
              <div>
                <button className="Btn font-bold">Tweet</button>
              </div>
            </div>
          </div>
        </section>
    </div>
    </>
  )
}

export default Modal