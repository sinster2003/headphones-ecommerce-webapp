import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-div">
      <p>Copyrights reserved Phoenix Audio 2023</p>
      <div className="icons">
        <AiFillInstagram className="insta"/>
        <RiTwitterXFill className="twitter"/>
      </div>
    </div>
  )
}

export default Footer;