import { Link } from 'react-router-dom'
import { TwitterLogo } from '../../../'

const Header = () => {
  return (
    <div className="Header">
      <Link to={'#home'} >Home</Link>
      <TwitterLogo />
    </div>
  )
}

export default Header