import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Products = () => {
  const categories = JSON.parse(localStorage.getItem("categories") || "[]");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [category, setCategory] = React.useState("");
  const [productName, setProductName] = React.useState("");
  const [productId, setProductId] = React.useState("");
  const [priceType, setPriceType] = React.useState("single");
  const [price, setPrice] = useState("");
  const [halfPrice, setHalfPrice] = useState("");
  const [fullPrice, setFullPrice] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const imageRef = useRef();
  const refImage = useRef();
  const formRef = useRef();
  const validateCategoryRef = useRef();
  const formData = new FormData(formRef.current);

  const [updateMode, setUpdateMode] = useState(false);

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products") || "[]")
  );

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/products/products.php`
      );
      if (data?.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      validateCategoryRef.current.style.display = "block";
      return;
    }
    try {
      const { data } = await axios.post(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/products/create.php?aid=${user?.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data?.success) {
        setProductName("");
        setCategory("");
        setPriceType("single");
        setPrice("");
        setHalfPrice("");
        setFullPrice("");
        setImage("");
        setImagePreview(null);
        formRef.current.reset();
        fetchProducts();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProduct = async (p) => {
    setUpdateMode(true);
    setProductName(p.name);
    setCategory(p.category);
    setPriceType(p.price_type);
    setPrice(p.full_price);
    setHalfPrice(p.half_price);
    setFullPrice(p.full_price);
    setProductId(p.id);
    // setImage(p.image);
    setImagePreview(
      `${import.meta.env.VITE_API_URI}/uploaded_files/${p.image}`
    );
  };

  const handleUpdateRequest = async (p) => {
    if (!category) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      validateCategoryRef.current.style.display = "block";
      return;
    }
    try {
      const { data } = await axios.post(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/products/update.php?productid=${productId}&aid=${
          user?.id
        }`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data?.success) {
        setProductName("");
        setCategory("");
        setPriceType("single");
        setPrice("");
        setHalfPrice("");
        setFullPrice("");
        setImage("");
        setImagePreview(null);
        formRef.current.reset();
        fetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const { data } = await axios.delete(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/products/delete.php?productid=${id}&aid=${user?.id}`
      );
      if (data?.success) {
        fetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="products-page">
      <div className="form-container">
        <form ref={formRef} id="add-product-form" className="flex flex-col">
          <h1 className="text-[30px] font-bold">
            {updateMode ? "Update" : "Add"} Product
          </h1>
          <div className="input-container flex flex-col gap-2">
            <label htmlFor="product-name">Product Name</label>
            <input
              required
              value={productName}
              type="text"
              name="name"
              id="product-name"
              placeholder="Product Name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="input-container flex flex-col gap-2">
            <label>Select Category</label>
            <span
              ref={validateCategoryRef}
              className="text-[red]"
              style={{ display: "none" }}>
              category name required
            </span>
            <select
              required
              name="category"
              id="select-input"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                validateCategoryRef.current.style.display = "none";
              }}
              className="bg-[#222] text-white outline">
              <option hidden value="">
                Select Category
              </option>
              {categories?.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container flex flex-col gap-2">
            <label>Price Type</label>
            <select
              required
              value={priceType}
              name="price_type"
              id="select-input"
              onChange={(e) => setPriceType(e.target.value)}
              className="bg-[#222] text-white outline">
              <option value="single">single</option>
              <option value="both">both</option>
            </select>
          </div>
          <div className="input-container flex flex-col gap-2">
            {priceType === "single" ? (
              <>
                <label htmlFor="product-price">Product Price</label>
                <input
                  required
                  name="full_price"
                  value={price}
                  type="number"
                  id="product-price"
                  placeholder="Product Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </>
            ) : (
              <>
                <label htmlFor="product-price">Half Price</label>
                <input
                  required
                  name="half_price"
                  value={halfPrice}
                  type="number"
                  id="product-price"
                  placeholder="Half Price"
                  onChange={(e) => setHalfPrice(e.target.value)}
                />
                <label htmlFor="product-price">Full Price</label>
                <input
                  required
                  name="full_price"
                  value={fullPrice}
                  type="number"
                  id="product-price"
                  placeholder="Full Price"
                  onChange={(e) => setFullPrice(e.target.value)}
                />
              </>
            )}
          </div>
          <div className="input-container flex flex-col gap-2">
            <div
              className="input-container flex flex-col gap-2"
              style={{ display: updateMode ? "none" : "flex" }}>
              <label htmlFor="product-image">Product Image</label>
              <input
                required
                ref={refImage}
                name="image"
                type="file"
                id="product-image"
                value={image}
                accept=".jpg, .png, .jpeg"
                onChange={(e) => {
                  setImage(e.target.value);
                  handleImagePreview(e);
                }}
              />
            </div>
            <span
              style={{
                display: updateMode ? "block" : "none",
              }}
              className="upt-img"
              onClick={(e) => {
                refImage.current.click();
              }}>
              Change Image
            </span>

            <img
              ref={imageRef}
              src={imagePreview}
              alt="Product Preview"
              className="w-[200px] object-cover"
              style={{
                display: imagePreview ? "block" : "none",
              }}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              updateMode ? handleUpdateRequest(productId) : handleSubmit(e);
              setUpdateMode(false);
            }}
            className="w-[50%] lg:w-[20%] ">
            {updateMode ? "Update" : "Add"} Product
          </button>
        </form>
      </div>
      <div className="products-container admin-products-container">
        {products?.length ? (
          products.map((p) => (
            <div key={p.id} className="product">
              <div className="product-image">
                <img
                  src={`${import.meta.env.VITE_API_URI}/uploaded_files/${
                    p.image
                  }`}
                  alt="Product"
                />
              </div>
              <div className="product-info">
                <h2 className="text-[20px] font-bold">{p.name}</h2>
                <p className="text-[18px] font-bold">{p.category}</p>
                <p className="text-[16px] font-bold">
                  {p.price_type === "single" ? (
                    <span>Price: {p.full_price} </span>
                  ) : (
                    <span>
                      Half Price: {p.half_price} <br /> Full Price:{" "}
                      {p.full_price}
                    </span>
                  )}
                </p>
              </div>
              <div className="product-actions flex gap-5 justify-center items-center">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDeleteProduct(p.id)}>
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={(e) => {
                    handleUpdateProduct(p);

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}>
                  Update
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>No Products</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
