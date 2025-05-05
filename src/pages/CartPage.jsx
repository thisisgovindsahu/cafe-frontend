import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../contexts/Cart";
import { Link } from "react-router-dom";
import ProceedContainer from "../components/ProceedContainer";
import OrderForm from "../components/OrderForm";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [displayForm, setDisplayForm] = useState(false);

  const handleRemoveCart = (p) => {
    try {
      let newCart = [...cart];
      const index = newCart.findIndex((item) => item.id === p.id);
      newCart.splice(index, 1);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar name={"Your Logo"} />
      <div id="cart-page" className="products-container">
        {cart?.length ? (
          cart
            ?.slice()
            .reverse()
            .map((p, i) => (
              <div key={i} className="product">
                <div className="product-image">
                  <img
                    src={`${import.meta.env.VITE_API_URI}/uploaded_files/${
                      p.image
                    }`}
                    alt={p.name}
                  />
                </div>
                <div className="product-info">
                  <h2 className="product-name">
                    {p.price_type === "single"
                      ? ""
                      : p.half_price
                      ? "Half"
                      : "Full"}{" "}
                    {p.name}
                  </h2>
                  <div className="flex justify-center gap-5">
                    <p>Rs.{p.half_price ? p.half_price : p.full_price}</p>
                    <p>{p.category}</p>
                  </div>
                  <div className="remove-btn">
                    <button onClick={(e) => handleRemoveCart(p)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <span>Cart is empty!</span>
        )}
      </div>
      <footer>
        <ProceedContainer setDisplayForm={setDisplayForm} />
      </footer>
      <OrderForm dispalyForm={displayForm} setDisplayForm={setDisplayForm} />
    </>
  );
};

export default CartPage;
