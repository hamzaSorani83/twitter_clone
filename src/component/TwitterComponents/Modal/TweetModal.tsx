import React from 'react'

import Close from '@iconscout/react-unicons/icons/uil-multiply'

import './TweetModal.css'
import { TweetBox } from '../..'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectTweetModal, setTweetModal } from '../../../app/features/mainReducer';

const Modal: React.FC = () => {
  const isOpen = useAppSelector(selectTweetModal);
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <div className={['Modal', isOpen ? 'active' : ''].join(' ')}>
        <section className="p-3 border-b border-gray-200">
          <button onClick={() => dispatch(setTweetModal(false))} className='h-6 w-6 text-blue-500 hover:text-blue-400 cursor-pointer'>
            <Close />
          </button>
        </section>
        <TweetBox />
      </div>
    </div>
  )
}

export default Modal