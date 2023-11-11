import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/AppContextProvider";
import { Cart } from "./index";

const Navbar = () => {
  const {
    showCart,
    setShowCart,
    cartItems,
    totalQuantities,
    setTotalQuantities,
    getFromLocalStorage,
    setTotalPrice,
    setCartItems
  } = useStateContext();

  useEffect(() => {
    if (cartItems.length === 0) {
      const cart = getFromLocalStorage();

      if (cart) {
        let quantities = 0;
        let price = 0;

        cart?.forEach((item) => {
          quantities += item.quantity;
          price += (item.price * item.quantity);
        });

        setCartItems(cart);
        setTotalQuantities(quantities);
        setTotalPrice(price)
      }
    }
  }, []);

  return (
    <div className="navbar-div">
      <Link href="/" className="link">
        <p>Phoenix Audio</p>
      </Link>
      <button
        type="button"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <div className="icon-div">
          <AiOutlineShopping className="icon" />
        </div>
        <span>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
