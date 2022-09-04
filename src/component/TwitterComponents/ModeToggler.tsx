import React from 'react'
import { selectIsDark, toggleIsDark } from '../../app/features/themeReducer';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'

const ModeToggler = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(selectIsDark);
  
  const modeHandler = () => {
    let mode = !isDark;
    localStorage.setItem('mode', mode.toString());
    dispatch(toggleIsDark())
  }
  
  return (
    <div className="py-2 border border-gray-200 dark:border-dim-200 bg-gray-50 dark:bg-dim-300  ">
    <div className="text-center p-6 bg-white dark:bg-dim-900 border-b border-t border-gray-200 dark:border-dim-200 ">
      <h3 className="dark:text-white text-gray-900 text-2xl font-bold mb-2">
        Customize your view
      </h3>
      <p className="text-gray-500 mb-5  text-sm">
        Manage your font size, color and background. These settings
        affect all the Twitter accounts on this browser.
      </p>
      <button onClick={modeHandler}
        className="mx-auto w-11 h-11 xl:w-48 flex items-center justify-center bg-blue-500 py-3 rounded-full text-white font-bold">
          <span className="block xl:hidden font-bold text-lg">
            <span className="dark:hidden"><Moon /></span>
            <span className="hidden dark:block"><Sun /></span>
          </span>
        <span className="hidden xl:block font-bold ">Toggle Dark Mode</span>
      </button>
    </div>
  </div>
  )
}

export default ModeToggler