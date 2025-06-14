import React, { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";
import { useCart } from "../contexts/Cart";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const OrderForm = ({ dispalyForm, setDisplayForm, setShowPOPUp }) => {
  const [name, setName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [showTableValidate, setShowTableValidate] = useState(false);

  const [loader, setLoader] = useState(false);

  const [cart, setCart] = useCart();

  const navigate = useNavigate();

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseInt(item.half_price ? item.half_price : item.full_price);
    });
    return total;
  };

  const orderData = {
    products: cart,
    tableNumber: tableNumber,
    buyer: name,
    total: getTotalPrice(),
  };

  const handleDisplayForm = (e) => {
    if (e.target.classList.contains("order-form")) {
      setDisplayForm(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tableNumber === "") {
      setShowTableValidate(true);
      return;
    } else {
      setShowTableValidate(false);
    }
    try {
      setLoader(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URI}/components/routes/orders/create.php`,
        orderData
      );
      if (data.success) {
        sendPushNotification();
        setLoader(false);
        setDisplayForm(false);
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
        navigate("/");
        toast.success("Order Placed Successfully", {
          duration: 2000,
          position: "top-right",
        });
        if (!localStorage.getItem("setShowPOPUp")) {
          localStorage.setItem("setShowPOPUp", true);
          setShowPOPUp(true);
        }
      } else {
        setLoader(false);
        setDisplayForm(false);
        toast.error("Order Failed, Something is wrong.", {
          duration: 2000,
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setDisplayForm(false);
      toast.error("Order Failed, Problem in server", {
        duration: 2000,
        position: "top-right",
      });
    }
  };

  const sendPushNotification = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URI}/push-notification/send-push.php`
      );
      console.log(data);
    } catch (error) {
      console.error("Error sending push notification:", error);
    }
  };

  return (
    <div
      className={`z-3 order-form h-full w-full ${
        dispalyForm ? "flex" : "hidden"
      }`}
      onClick={(e) => handleDisplayForm(e)}>
      <div
        id="form"
        className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]">
        <h2>Done Your Order</h2>
        <form action="">
          <div>
            <label htmlFor="#name">Name: (Optional)</label>
            <br /> <br />
            <input
              type="text"
              id="name"
              placeholder="Enter your Name (Optional)"
              value={name}
              onChange={(e) => {
                if (e.target.value === "authpage") {
                  navigate("/loginpage");
                }
                setName(e.target.value);
              }}
            />
          </div>
          <div className="relative">
            <label htmlFor="#table-number">Table No:</label> <br />
            <span
              className="table-no-validate"
              style={{ display: `${showTableValidate ? "unset" : "none"}` }}>
              Table No. is Required
            </span>
            <br />
            <input
              max={2}
              type="number"
              id="table-number"
              placeholder="Enter your Table No."
              value={tableNumber}
              onChange={(e) => {
                setTableNumber(e.target.value);
                setShowTableValidate(false);
              }}
            />
          </div>
          <div>
            {loader ? (
              <span className="loader"></span>
            ) : (
              <input
                type="button"
                id="confirm-btn"
                value={"Order"}
                onClick={(e) => handleSubmit(e)}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
