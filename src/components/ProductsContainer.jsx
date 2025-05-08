import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";
import { useCart } from "../contexts/Cart";
import toast from "react-hot-toast";
import usePWAStandalone from "../hooks/usePWAStandalone";
import { driver } from "driver.js";

const ProductsContainer = ({
  showDetails,
  showAddButtons,
  addBtnClass,
  addBtnContent,
  showSingleBtn,
  singleBtnContent,
  showMenipulateBtn,
  category,
}) => {
  const [products, setProducts] = useLocalStorage("products", []);
  const [cart, setCart] = useCart();

  const isStandAlone = usePWAStandalone();

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/products/products.php`
      );
      if (data?.success) {
        setProducts(data?.data);
      } else if (data?.message === "No products found.") {
        setProducts([]);
      } else {
        console.log("Something went wrong while fetching products.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // -------------------------------------------------------------//

  const imageUrls = products.map(
    (p) => `${import.meta.env.VITE_API_URI}/uploaded_files/${p.image}`
  );

  // Cache these images
  if ("caches" in window) {
    caches.open("product-images-v1").then((cache) => {
      cache.addAll(imageUrls).catch((err) => {
        console.error("Failed to cache images:", err);
      });
    });
  }

  //-----------------------------------------------------------------//

  const handleAddCart = (p, e) => {
    let product = {
      id: p.id,
      name: p.name,
      image: p.image,
      category: p.category,
      price_type: p.price_type,
    };

    if (e.target.parentNode.classList.contains("full-price-content")) {
      product = {
        ...product,
        full_price: p.full_price,
      };
    } else {
      product = {
        ...product,
        half_price: p.half_price,
      };
    }
    setCart((prevCart) => [...prevCart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  };

  const toggleFullscreen = () => {
    const isFullscreen =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;

    if (!isFullscreen) {
      const element = document.documentElement;

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  // -------------------------------------------------------------//

  if (!localStorage.getItem("firstTime")) {
    // Add slight delay for mobile rendering
    setTimeout(() => {
      const driverObj = driver({
        className: "driverjs-mobile-fix",
        onNext: () => {
          // Force reflow for mobile browsers
          driverObj.refresh();
        },
        onDismiss: () => {
          driverObj.reset();
        },
        scrollIntoViewOptions: {
          behavior: "smooth",
          block: "center",
        },
      });

      // Mobile-specific configuration
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);

      driverObj.highlight({
        element: ".full-screen-icon",
        popover: {
          title: "App Mode",
          description: "Switch to app mode for better experience.",
          position: isMobile ? "top" : "left", // Better positioning for mobile
        },
      });

      localStorage.setItem("firstTime", "true");
    }, 1000); // 1-second delay for mobile rendering
  }

  // -------------------------------------------------------------//

  return products?.length === 0 ? (
    <h1 className="">No products found.</h1>
  ) : (
    <>
      {!isStandAlone ? (
        <i
          className="ri-fullscreen-line full-screen-icon text-[16px]"
          onClick={() => {
            toggleFullscreen();
          }}></i>
      ) : (
        ""
      )}
      <div className="products-container">
        {products
          ?.filter((p) => p.category === category || category === "")
          .map((p) => (
            <div key={p.id} className="product">
              <div className="product-image">
                <img
                  src={`${import.meta.env.VITE_API_URI}/uploaded_files/${
                    p.image
                  }`}
                  alt={p.name}
                />
              </div>
              <div className="product-info">
                <h2 className="product-name">{p.name}</h2>
                {showDetails ? (
                  p.price_type === "single" ? (
                    <div className="full-price-content">
                      <p className="product-price">Rs.{p.full_price}</p>
                      {showAddButtons ? (
                        <button
                          onClick={(e) => {
                            handleAddCart(p, e);
                            toast.success("Added to cart!");
                          }}
                          className={addBtnClass}>
                          {addBtnContent}
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="half-price-content">
                        <p className="product-price">
                          <span>Half</span> Rs.{p.half_price}
                        </p>
                        {showAddButtons ? (
                          <button
                            onClick={(e) => {
                              handleAddCart(p, e);
                              toast.success("Added to cart!");
                            }}
                            className={addBtnClass}>
                            {addBtnContent}
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="full-price-content">
                        <p className="product-price">
                          <span>Full</span> Rs.{p.full_price}
                        </p>
                        {showAddButtons ? (
                          <button
                            onClick={(e) => {
                              handleAddCart(p, e);
                              toast.success("Added to cart!");
                            }}
                            className={addBtnClass}>
                            {addBtnContent}
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  )
                ) : (
                  ""
                )}
              </div>
              {showSingleBtn ? <button>{singleBtnContent}</button> : ""}
              {showMenipulateBtn ? (
                <div className="edit-buttons">
                  <button className="update-btn">Update</button>
                  <button className="delete-btn">Delete</button>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductsContainer;
