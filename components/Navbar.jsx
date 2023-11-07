import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/AppContextProvider";

const Navbar = () => {
  const { showCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-div">
      <Link href="/" className="link">
        <p>Phoenix Headphones</p>
      </Link>

      {showCart && (
        <button type="button">
          <div className="icon-div">
          <AiOutlineShopping className="icon" />

          </div>
          <span>{totalQuantities}</span>
        </button>
      )}
    </div>
  );
};

export default Navbar;
