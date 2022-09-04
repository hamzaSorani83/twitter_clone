import React from 'react'
import { Link } from 'react-router-dom'
import { UserPhoto } from '../../../'

const Right = () => {
  return (
    <div className='Right'>
      <div className="relative m-2">
        <i className="fa-solid fa-magnifying-glass text-gray-600 absolute left-4 top-1/2 -translate-y-1/2"></i>
        <input type="text"
          className="w-full bg-gray-200 dark:bg-dim-400 border-gray-200 dark:border-dim-400 text-gray-100  focus:outline-none  font-normal h-9  pl-12 text-sm rounded-full"
          placeholder="Search Twitter" />
      </div>
      <div className="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
        <h3 className="text-gray-900 dark:text-white font-bold p-3 border-b border-gray-200 dark:border-dim-200">
          What’s happening
        </h3>
        <div className="p-3 border-b border-gray-200 dark:border-dim-200">
          <h4 className="font-bold  text-gray-800 dark:text-white">
            #Palestine
          </h4>
          <p className="text-xs text-gray-400">29.7K Tweets</p>
        </div>
        <div className="p-3 border-b border-gray-200 dark:border-dim-200">
          <h4 className="font-bold  text-gray-800 dark:text-white">
            #Palestine
          </h4>
          <p className="text-xs text-gray-400">29.7K Tweets</p>
        </div>
        <div className="p-3 border-b border-gray-200 dark:border-dim-200">
          <h4 className="font-bold  text-gray-800 dark:text-white">
            #Palestine
          </h4>
          <p className="text-xs text-gray-400">29.7K Tweets</p>
        </div>
        <div className="text-blue-400  p-3 cursor-pointer">
          Show more
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
        <h3 className="text-gray-900 dark:text-white font-bold p-3 border-b border-gray-200 dark:border-dim-200">
          Who to follow
        </h3>
        <div className="p-5 border-b border-gray-200 dark:border-dim-200 flex justify-between items-center">
          <div className="flex ">
            <UserPhoto />
            <div className=" ml-2  text-sm ">
              <h5 className="text-gray-900 dark:text-white font-bold">
                hamza
              </h5>
              <p className="text-gray-400 ">@hamzasorani83</p>
            </div>
          </div>
          <Link to="#" className="text-xs font-bold text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400">Follow</Link>
        </div>
        <div className="p-5 border-b border-gray-200 dark:border-dim-200 flex justify-between items-center">
          <div className="flex ">
          <UserPhoto />
            <div className=" ml-2  text-sm ">
              <h5 className="text-gray-900 dark:text-white font-bold">
                abdoelazizgamal
              </h5>
              <p className="text-gray-400 ">@abdoelazizgamal</p>
            </div>
          </div>
          <Link to="#" className="text-xs font-bold text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400">Follow</Link>
        </div>
        <div className="p-5 border-b border-gray-200 dark:border-dim-200 ">
          <div className="flex gap-x-4 animate-pulse">
            <div className="rounded-full bg-gray-400 h-12 w-12"></div>
            <div className="flex-1  space-y-2 py-1">
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
              <div className="h-4 bg-gray-400 rounded w-3/4"></div>
              <div className="h-4 bg-gray-400 rounded w-4/6"></div>
            </div>
          </div>

        </div>

        <div className="text-blue-400  p-3 cursor-pointer">
          Show more
        </div>
      </div>
    </div>
  )
}

export default Right