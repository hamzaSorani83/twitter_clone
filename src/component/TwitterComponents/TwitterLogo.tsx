import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import { Link } from "react-router-dom";

const TwitterLogo = () => {
  return (
    <Link to={'/'} className="TwitterLogo">
      <Twitter color="#1d9bf0" size="40px" />
    </Link>
  )
}

export default TwitterLogo