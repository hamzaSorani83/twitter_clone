import React from 'react'
import Images from '@iconscout/react-unicons/icons/uil-image'
import Smile from '@iconscout/react-unicons/icons/uil-smile'
import Calender from '@iconscout/react-unicons/icons/uil-calender'
import Position from '@iconscout/react-unicons/icons/uil-map-pin-alt'
// backend
import UserPhoto from '@iconscout/react-unicons/icons/uil-user-circle'

const TweetBox = () => {
  return (
    <section className="TweetBox">
      <div className="flex p-4">
        <span className='UserImg' >
          <UserPhoto size="50px"/>
        </span>
        <textarea placeholder="What's happening?"></textarea>
      </div>
      <div className="flex p-4 w-full justify-between">
          <div className="Icons">
            <span><Images /></span>
            <span><Smile /></span>
            <span><Position /></span>
            <span><Calender /></span>
          </div>
          <div>
            <button className="Btn font-bold">Tweet</button>
          </div>
      </div>
    </section>
  )
}

export default TweetBox