import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-div">
      <Link href="/" className="link">
        <p>Phoenix Headphones</p>
      </Link>
      
      <button type="button" onClick="">
        <AiOutlineShopping className="icon"/>
        <span>2</span>
      </button>
    </div>
  )
}

export default Navbar;