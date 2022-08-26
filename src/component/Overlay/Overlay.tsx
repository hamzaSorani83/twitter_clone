import React from 'react'

const Overlay = ({isOpen, onRequestClose}) => {
  return (
    <div className={['Overlay', isOpen ? 'active' : ''].join(' ')} onClick={onRequestClose}></div>
  )
}

export default Overlay