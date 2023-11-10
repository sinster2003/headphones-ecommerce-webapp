import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const setToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getFromLocalStorage = () => {
    if (typeof localStorage !== "undefined") {
      const cartShop = JSON.parse(localStorage.getItem("cart"));
      if (cartShop) {
        return cartShop;
      }
    }
    return [];
  };

  const onAdd = (product, quantity) => {
    const totalQuantities = (prevTotalQuantities) =>
      prevTotalQuantities + quantity;

    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + quantity * product.price
    );

    setTotalQuantities(totalQuantities);

    if (checkProductInCart) {
      const newCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });

      setCartItems(newCartItems);
      setToLocalStorage(newCartItems);
    } else {
      product.quantity = quantity;
      const newCartItems = [...cartItems, { ...product }];

      setCartItems(newCartItems);
      setToLocalStorage(newCartItems);
    }

    toast.success(`${quantity} ${product.productName} is added to the cart.`);
  };

  const incCartItem = (id) => {
    const selectedCartItem = cartItems?.find((item) => item._id === id);
    const totalQuantities = (prevTotalQuantities) => prevTotalQuantities + 1;

    const newCartItems = cartItems?.map((item) => {
      if (item._id === id) {
        return {
          ...selectedCartItem,
          quantity: selectedCartItem.quantity + 1,
        };
      }
      return item;
    });

    setCartItems(newCartItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + selectedCartItem.price);
    setTotalQuantities(totalQuantities);
    setToLocalStorage(newCartItems);
  };

  const decCartItem = (id) => {
    const selectedCartItem = cartItems.find((item) => item._id === id);
    const totalQuantities = (prevTotalQuantities) => prevTotalQuantities - 1;

    if (selectedCartItem.quantity > 1) {
      const newCartItems = cartItems.map((item) => {
        if (item._id === id) {
          return {
            ...selectedCartItem,
            quantity: selectedCartItem.quantity - 1,
          };
        }
        return item;
      });

      setCartItems(newCartItems);
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice - selectedCartItem.price
      );
      setTotalQuantities(totalQuantities);
      setToLocalStorage(newCartItems);
    }
  };

  const removeCartItem = (id) => {
    const deletedCartItem = cartItems.find((item) => item._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);
    const totalQuantities = (prevTotalQuantities) =>
      prevTotalQuantities - deletedCartItem.quantity;

    setCartItems(newCartItems);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - deletedCartItem.price * deletedCartItem.quantity
    );
    setTotalQuantities(totalQuantities);
    setToLocalStorage(newCartItems);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    if (qty === 1) return;

    setQty((prevQty) => prevQty - 1);
  };

  return (
    <AppContext.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setShowCart,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        getFromLocalStorage,
        setQty,
        incQty,
        decQty,
        onAdd,
        incCartItem,
        decCartItem,
        removeCartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom context hook

export const useStateContext = () => {
  const value = useContext(AppContext);
  return value;
};

export default AppContextProvider;
