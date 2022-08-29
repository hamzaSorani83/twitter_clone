import React from 'react'
import { Link } from 'react-router-dom'
import { UserPhoto } from '../'
import { useNavigate } from 'react-router-dom'

import Replay from '@iconscout/react-unicons/icons/uil-comment-message'
import Retweet from '@iconscout/react-unicons/icons/uil-repeat'
import Like from '@iconscout/react-unicons/icons/uil-heart'
import Upload from '@iconscout/react-unicons/icons/uil-upload'

const Tweet = () => {
  const navigate = useNavigate();
  
  return (
    <div className='Tweet' onClick={() => navigate('/post/id')}>
      {/* // backend */}
      <div className="TweetUserDetails">
        <Link to='userProfile/id'>
          <UserPhoto />
          {/* <img src="" alt="" className='TweetUserImg' /> */}
        </Link>
        <p className='TweetUserName'>
          <Link to='userProfile/id'> userName </Link>
          <Link to='userProfile/id' className='TweetUserId'> <span>@userId</span> </Link>
        </p>
      </div>
      <div className="TweetPostDetails">
        <p className='TweetPostText'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aut reprehenderit accusamus dignissimos ab corporis minima atque expedita, architecto reiciendis ea cumque facere quidem at magni error, repudiandae cum illo.
        </p>
        <img className='TweetPostImg'
          src="https://images.nature.com/original/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459150.jpg" alt="" />
      </div>
      <div className="TweetReactions">
        <div className="ReactionParent hover:text-Replay group"> <span className='group-hover:bg-Replay/10'><Replay /></span>
          {/* backend */} <span>99</span>
        </div>
        <div className="ReactionParent hover:text-Retweet group"> <span className='group-hover:bg-Retweet/10'><Retweet /></span>
          {/* backend */} <span>12.3k</span>
        </div>
        <div className="ReactionParent hover:text-Like group"> <span className='group-hover:bg-Like/10'><Like /></span>
          {/* backend */}  <span>100</span>
        </div>
        <div className="ReactionParent hover:text-Replay group"> <span className='group-hover:bg-Replay/10'><Upload /></span>
        </div>
      </div>
    </div>
  )
}

export default Tweet