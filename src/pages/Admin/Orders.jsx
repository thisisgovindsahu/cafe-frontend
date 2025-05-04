import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const aid = JSON.parse(localStorage.getItem("user"))?.id;

  const [loader, setLoader] = useState(false);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/orders/orders.php?aid=${aid}`
      );
      if (data?.success) {
        setOrders(data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSendHistory = async (order) => {
    try {
      await axios.post(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/order-histories/create.php`,
        { aid, history: order }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDone = async (id) => {
    try {
      setLoader(true);
      const { data } = await axios.delete(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/orders/delete.php?aid=${aid}&orderid=${id}`
      );
      if (data?.success) {
        setLoader(false);
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="admin-orders-page">
      <div id="orders-container">
        {orders?.length ? (
          orders.map((order) => (
            <div className="order-card relative" key={order.id}>
              <h2>Customer details</h2>
              <div className="order-card-body">
                <p>Customer name: {order.buyer}</p>
                <p>Customer table no: {order.tableNumber}</p>
              </div>{" "}
              <br />
              <h2>Ordered items</h2> <br />
              <div className="order-card-footer">
                {order.products.map((item, index) => (
                  <div className="order-item" key={index}>
                    <p>
                      Item name:{" "}
                      {item.price_type === "single"
                        ? ""
                        : item.half_price
                        ? "Half"
                        : "Full"}{" "}
                      {item.name}
                    </p>
                    <p>
                      Item price: Rs.
                      {item.half_price
                        ? item.half_price?.slice(-3)
                        : item.full_price?.slice(-3)}
                    </p>
                  </div>
                ))}
              </div>{" "}
              <br />
              <div className="bottom-content">
                <h3>Total: Rs.{order.total}</h3>
                {loader ? (
                  <span className="loader absolute right-0"></span>
                ) : (
                  <button
                    onClick={() => {
                      handleSendHistory(order);
                      handleDone(order.id);
                    }}>
                    Done
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="no-orders">
            <h2>No orders found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
