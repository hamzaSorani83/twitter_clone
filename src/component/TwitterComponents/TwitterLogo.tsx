import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import { Link } from "react-router-dom";

interface IProps {
  className?: string;
}

const TwitterLogo: React.FC<IProps> = ({ className }) => {
  return (
    <Link to={'/'} className={[className, "TwitterLogo"].join(" ")}>
      <Twitter color="#1d9bf0" size="35px" />
    </Link>
  )
}

export default TwitterLogo