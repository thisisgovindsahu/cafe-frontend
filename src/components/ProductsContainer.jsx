import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";
import { useCart } from "../contexts/Cart";

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

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/products/products.php`
      );
      if (data?.success) {
        setProducts(data?.data);
      } else {
        console.log("Server Problem");
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

  return products?.length === 0 ? (
    <h1>No products found.</h1>
  ) : (
    <div className="products-container">
      {products
        ?.filter((p) => p.category.includes(category))
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
  );
};

export default ProductsContainer;
