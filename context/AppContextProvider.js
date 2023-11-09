import { createContext, useContext, useState, useEffect } from "react";
import toast, { Toast } from "react-hot-toast";
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {

    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + quantity * product.price
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

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
    } 
    else {

        product.quantity = quantity;
        const newCartItems = [...cartItems,{...product}];

        setCartItems(newCartItems);
    }

    toast.success(`${quantity} ${product.productName} is added to the cart.`)
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
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom context hook

export const useStateContext = () => {
  const value = useContext(AppContext);
  console.log(value);
  return value;
};

export default AppContextProvider;
