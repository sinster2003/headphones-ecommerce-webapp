import { useEffect } from "react";
import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";
import { useStateContext } from "@/context/AppContextProvider";
import getConfetti from "@/lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    getConfetti();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="bg-success">
        <div className="success-container">
          <BiShoppingBag color="green" style={{ fontSize: "2rem" }} />
          <h2 style={{ fontSize: "1.75rem" }}>Order Successful</h2>
          <h4 style={{ color: "rgb(80, 80, 80)", fontSize: "1rem" }}>
            Check your email inbox for order receipt
          </h4>
          <p style={{ fontSize: "1rem",marginTop: "0.5rem" }}>
            In case of queries or replacement issues contact here
          </p>
          <a
            target="_blank"
            href="mailto:order@example.com"
            style={{ fontSize: "1rem", textDecoration: "none", color: "rgb(170,20,20)" }}
          >
            order@example.com
          </a>
        </div>
        <Link href="/">
          <button className=".btn-success">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
