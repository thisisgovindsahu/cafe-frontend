import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Products = () => {
  const categories = JSON.parse(localStorage.getItem("categories") || "[]");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [category, setCategory] = React.useState("");
  const [productName, setProductName] = React.useState("");
  const [priceType, setPriceType] = React.useState("single");
  const [price, setPrice] = useState("");
  const [halfPrice, setHalfPrice] = useState("");
  const [fullPrice, setFullPrice] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const imageRef = useRef();
  const formRef = useRef();
  const formData = new FormData(formRef.current);

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
        console.log(data);
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="products-page">
      <div className="form-container">
        <form
          ref={formRef}
          id="add-product-form"
          className="flex flex-col gap-10">
          <h1 className="text-[30px] font-bold">Add Product</h1>
          <div className="input-container flex flex-col gap-5">
            <label htmlFor="product-name">Product Name</label>
            <input
              value={productName}
              type="text"
              name="name"
              id="product-name"
              placeholder="Product Name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="input-container flex flex-col gap-5">
            <label>Select Category</label>
            <select
              name="category"
              id="select-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#222] text-white outline">
              <option defaultChecked hidden value="">
                Select Category
              </option>
              {categories?.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container flex flex-col gap-5">
            <label>Price Type</label>
            <select
              value={priceType}
              name="price_type"
              id="select-input"
              onChange={(e) => setPriceType(e.target.value)}
              className="bg-[#222] text-white outline">
              <option value="single">single</option>
              <option value="both">both</option>
            </select>
          </div>
          <div className="input-container flex flex-col gap-5">
            {priceType === "single" ? (
              <>
                <label htmlFor="product-price">Product Price</label>
                <input
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
                  name="half_price"
                  value={halfPrice}
                  type="number"
                  id="product-price"
                  placeholder="Half Price"
                  onChange={(e) => setHalfPrice(e.target.value)}
                />
                <label htmlFor="product-price">Full Price</label>
                <input
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
          <div className="input-container flex flex-col gap-5">
            <label htmlFor="product-image">Product Image</label>
            <input
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
              handleSubmit(e);
            }}
            type="submit">
            Add Product
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
                  className="w-[200px] object-cover"
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
                      Half Price: {p.half_price} , Full Price: {p.full_price}
                    </span>
                  )}
                </p>
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
