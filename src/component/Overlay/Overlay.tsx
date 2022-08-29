import React from 'react'
import { selectOverlay, setOverlay } from '../../app/features/mainReducer'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

const Overlay = () => {
  const isOpen = useAppSelector(selectOverlay);
  const dispatch = useAppDispatch();
  
  return (
    <div className={['Overlay', isOpen ? 'active' : ''].join(' ')} onClick={() => dispatch(setOverlay())}></div>
  )
}

export default Overlay