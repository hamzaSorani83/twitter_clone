import { TwitterLogo } from '../../../'

const Header = () => {
  return (
    <div className="Header">
      <h4 onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} >Home</h4>
      <TwitterLogo />
    </div>
  )
}

export default Header