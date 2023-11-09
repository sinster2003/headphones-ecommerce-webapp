import { useRef } from "react";
import Link from "next/link";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShoppingCart,
  AiOutlineLeft,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "@/context/AppContextProvider";
import { urlFor } from "@/lib/client";

const Cart = () => {
  const cartRef = useRef();

  const { qty, incQty, decQty, cartItems, setShowCart, totalQuantities } = useStateContext();

  console.log(cartRef.current);
  return (
    <div ref={cartRef} className="cart-container-wrapper">
      <div className="cart-container">
        <div>
          <button onClick={() => {setShowCart(false)}} className="flex-top">
            <AiOutlineLeft />
            <p>Your Cart</p>
            <p>({totalQuantities} items)</p>
          </button>
        </div>
        <div>
          {cartItems?.map((item) => (
            <div key={item._id} className="cart-item">
              <img
                src={urlFor(item?.image[0])}
                alt={item.productName}
                width={150}
              />
              <div className="cart-item-desc">
              <div className="cart-item-price">
                <p>{item.productName}</p>
                <p>${item.price}</p>
              </div>
              <div className="quantity-bar">
                <button onClick={decQty}>
                  <AiOutlineMinus />
                </button>
                <span>{qty}</span>
                <button onClick={incQty}>
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
