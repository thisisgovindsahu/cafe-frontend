import React from "react";
import { CartProvider } from "./contexts/Cart";
import HomePage from "./pages/HomePage";

const App = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log(registration);
        })
        .catch((err) => console.log("ServiceWorker error:", err));
    });
  }
  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
