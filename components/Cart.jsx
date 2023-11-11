import { useEffect, useRef } from "react";
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
import toast from "react-hot-toast";
import getStripe from "@/lib/getStripe";

const Cart = () => {
  const cartRef = useRef();

  const {
    qty,
    incQty,
    decQty,
    cartItems,
    setShowCart,
    totalPrice,
    setTotalPrice,
    totalQuantities,
    setTotalQuantities,
    setCartItems,
    incCartItem,
    decCartItem,
    removeCartItem,
  } = useStateContext();

  const handleCheckout = async () => {

    const stripe = await getStripe();

    const response = await fetch("/api/stripe",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cartItems)
    })

    if(response.statusCode === 500) return;

    const data = await response.json();

    console.log("Data",data);
    console.log(data);

    toast.loading("Redirecting...");

    /*

    // in server stripe.js ---> return res.status(200).json({url: session.url})
    
    if(data?.url) {
      window.location.href = data.url
    }
    */

    stripe.redirectToCheckout({sessionId: data.id})
  }

  return (
    <div ref={cartRef} className="cart-container-wrapper">
      <div className="cart-container">
        <div>
          <button
            onClick={() => {
              setShowCart(false);
            }}
            className="flex-top"
          >
            <AiOutlineLeft className="left-icon" />
            <p
              style={{
                color: "rgb(0,0,0)",
                fontWeight: "600",
                margin: "0 0.5rem",
              }}
            >
              Your Cart
            </p>
            <p style={{ color: "rgb(255,0,0)", fontWeight: "600" }}>
              ({totalQuantities} items)
            </p>
          </button>
        </div>
        <div className="empty-cart">
          {cartItems.length < 1 && (
            <div>
              <AiOutlineShoppingCart />
              <p>Nothing in the cart</p>
              <Link href="/">
                <button
                  className="hero-banner-button empty-cart-btn"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="card-items-box">
          {cartItems &&
            cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img
                  src={urlFor(item.image[0])}
                  alt={item.productName}
                  width={150}
                />
                <div className="cart-item-desc">
                  <div className="cart-item-price">
                    <p style={{ color: "rgb(0,0,0)", fontWeight: "600" }}>
                      {item.productName}
                    </p>
                    <p style={{ color: "rgb(255,0,0)", fontWeight: "600" }}>
                      ${item.price}
                    </p>
                  </div>
                  <div className="quantity-bar">
                    <button
                      onClick={() => {
                        decCartItem(item._id);
                      }}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => {
                        incCartItem(item._id);
                      }}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    style={{
                      position: "absolute",
                      bottom: "10%",
                      right: "8%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      removeCartItem(item._id);
                    }}
                  >
                    <TiDeleteOutline style={{ color: "rgb(255, 64, 64)" }} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      {cartItems.length >= 1 && (
        <div className="price-cart-total">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0 2rem",
            }}
          >
            <p style={{ color: "rgb(0,0,0)", fontWeight: "600" }}>Subtotal</p>
            <p style={{ color: "rgb(0,0,0)", fontWeight: "700" }}>
              ${totalPrice}
            </p>
          </div>
          <button className="hero-banner-button stripe-btn" onClick={handleCheckout}>
            Buy with Stripe
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
