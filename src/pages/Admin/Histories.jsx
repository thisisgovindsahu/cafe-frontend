import axios from "axios";
import React, { useEffect, useState } from "react";

const Histories = () => {
  const [histories, setHistories] = useState([]);

  const aid = JSON.parse(localStorage.getItem("user"))?.id;

  const fetchHistories = async () => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/order-histories/histories.php?aid=${aid}`
      );
      if (data?.success) {
        setHistories(data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHistories();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/order-histories/delete.php?aid=${aid}&historyid=${id}`
      );
      if (data?.success) {
        setHistories((prevHistories) =>
          prevHistories.filter((history) => history.id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="histories-page" className="">
      {histories?.length > 0 ? (
        <div className="histories-container flex gap-4 flex-wrap">
          {histories.map((history) => {
            const parsedHistory = JSON.parse(history.history);
            return (
              <div key={history.id} className="order-card">
                <h2>Customer details</h2>
                <br />
                <div className="order-card-body">
                  <p>Customer name: {parsedHistory?.buyer}</p>
                  <p>Customer table no: {parsedHistory?.tableNumber}</p>
                </div>
                <br />
                <h2>Ordered items</h2>
                <br />
                <div className="order-card-footer">
                  {parsedHistory?.products.map((item, index) => (
                    <div className="order-item" key={index}>
                      <p>
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
                          ? item.half_price.substring(
                              item.half_price.length - 3
                            )
                          : item.full_price?.substring(
                              item.full_price.length - 3
                            )}
                      </p>
                    </div>
                  ))}
                </div>
                <br />
                <div className="bottom-content-h">
                  <h3>Total: Rs.{parsedHistory?.total}</h3>
                  <button
                    id="delete-btn"
                    onClick={(e) => {
                      handleDelete(history.id);
                    }}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No histories found.</p>
      )}
    </div>
  );
};

export default Histories;
