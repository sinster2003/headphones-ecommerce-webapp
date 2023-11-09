import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/AppContextProvider";
import { Cart } from "./index";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-div">
      <Link href="/" className="link">
        <p>Phoenix Headphones</p>
      </Link>
      <button type="button" onClick={() => {setShowCart(true)}}>
        <div className="icon-div">
          <AiOutlineShopping className="icon" />
        </div>
        <span>{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>
  );
};

export default Navbar;
