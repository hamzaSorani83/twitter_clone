import Images from '@iconscout/react-unicons/icons/uil-image'
import Smile from '@iconscout/react-unicons/icons/uil-smile'
import Calender from '@iconscout/react-unicons/icons/uil-calender'
import Position from '@iconscout/react-unicons/icons/uil-map-pin-alt'
import { UserPhoto } from '../'

const TweetBox = () => {
  return (
    <section className="TweetBox">
      <div className="flex p-4">
        <UserPhoto />
        <textarea placeholder="What's happening?"></textarea>
      </div>
      <div className="flex p-4 w-full justify-between">
      {/* backend */}
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