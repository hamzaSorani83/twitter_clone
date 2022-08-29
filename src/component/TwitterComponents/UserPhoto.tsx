import Profile from '@iconscout/react-unicons/icons/uil-user-circle'
import { Link } from 'react-router-dom'

const UserPhoto = () => {
  return (
    <Link to={'/profile'} className='UserImg' >
      {/* // backend */}
      <Profile size="50px"/>
    </Link>
  )
}

export default UserPhoto