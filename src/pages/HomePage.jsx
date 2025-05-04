import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CategoriesContainer from "../components/CategoriesContainer";
import ProductsContainer from "../components/ProductsContainer";
import ProceedContainer from "../components/ProceedContainer";
import OrderForm from "../components/OrderForm";

const HomePage = () => {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <>
      <header>
        <Navbar name={"Your Logo"} />
        <CategoriesContainer />
      </header>
      <main>
        <ProductsContainer
          showDetails={true}
          showAddButtons={true}
          addBtnClass={"add-to-cart-btn"}
          addBtnContent={"Add"}
        />
      </main>
      <footer>
        <ProceedContainer setDisplayForm={setDisplayForm} />
      </footer>
      <OrderForm dispalyForm={displayForm} setDisplayForm={setDisplayForm} />
    </>
  );
};

export default HomePage;
