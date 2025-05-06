import axios from "axios";
import React, { useEffect, useState } from "react";
import FiltereInput from "../../components/FiltereInput";

const Histories = () => {
  const [histories, setHistories] = useState([]);

  const [name, setName] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  const [loader, setLoader] = useState(false);

  const filteredHistories = histories?.filter(
    (order) =>
      JSON.parse(order.history).buyer.toLowerCase().includes(name) &&
      JSON.parse(order.history).tableNumber.includes(tableNumber)
  );

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
      setLoader(true);
      const { data } = await axios.delete(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/order-histories/delete.php?aid=${aid}&historyid=${id}`
      );
      if (data?.success) {
        setLoader(false);
        setHistories((prevHistories) =>
          prevHistories.filter((history) => history.id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotal = (h) => {
    let total = 0;
    h.forEach((history) => {
      const parsedHistory = JSON.parse(history.history);
      total += parseFloat(parsedHistory.total);
    });
    console.log(total);
    return total;
  };

  return (
    <div id="histories-page" className="">
      <FiltereInput
        name={name}
        setName={setName}
        tableNumber={tableNumber}
        setTableNumber={setTableNumber}
      />
      {histories?.length > 0 ? (
        <div className="histories-container flex gap-4 flex-wrap">
          {filteredHistories.map((history) => {
            const parsedHistory = JSON.parse(history.history);
            return (
              <div key={history.id} className="order-card">
                <h2>Customer details</h2>
                <br />
                <div className="order-card-body">
                  <p onClick={() => setName(parsedHistory?.buyer)}>
                    Customer name: {parsedHistory?.buyer}
                  </p>
                  <p onClick={() => setTableNumber(parsedHistory?.tableNumber)}>
                    Customer table no: {parsedHistory?.tableNumber}
                  </p>
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
                  {loader ? (
                    <span className="loader absolute right-0"></span>
                  ) : (
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(history.id)}>
                      Delete
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {name.length || tableNumber.length ? (
            <div className="receipt-box">
              Total: {calculateTotal(filteredHistories)}{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <p>No histories found.</p>
      )}
    </div>
  );
};

export default Histories;
