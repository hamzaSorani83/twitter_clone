import React from 'react'

import Close from '@iconscout/react-unicons/icons/uil-multiply'

import './TweetModal.css'
import { Overlay, TweetBox } from '../'

interface IProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const Modal: React.FC<IProps> = ({isOpen, onRequestClose}) => {
  return (
    <div>
      <Overlay isOpen={isOpen} onRequestClose={onRequestClose} />
      <div className={['Modal', isOpen ? 'active' : ''].join(' ')}>
          <section className="p-3 border-b border-gray-200">
            <button onClick={onRequestClose} className='h-6 w-6 text-blue-500 hover:text-blue-400 cursor-pointer'>
              <Close />
            </button>
          </section>
          <TweetBox />
      </div>
    </div>
  )
}

export default Modal