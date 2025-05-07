import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CategoriesContainer = ({ setCategory }) => {
  const [categories, setCategories] = useLocalStorage("categories", []);
  const categoriesRef = React.useRef(null);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/categories/categories.php`
      );
      if (data?.success) {
        setCategories(data?.data);
      } else if (data?.success === false) {
        setCategories([]);
      } else {
        console.log("Server Problem");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const activeCategory = (e) => {
    const categories = categoriesRef.current.querySelectorAll(".category");
    categories.forEach((category) => {
      category.classList.remove("active-category");
    });
    e.target.classList.add("active-category");
  };

  return categories?.length === 0 ? (
    <h1>No categories found.</h1>
  ) : (
    <div
      ref={categoriesRef}
      className="categories-container w-full flex items-center gap-[50px] fixed top-16 h-15 lg:h-20 left-0 z-1 ">
      <span
        className="active-category category"
        onClick={(e) => {
          setCategory("");
          activeCategory(e);
        }}>
        All
      </span>
      {categories?.map((c) => (
        <span
          key={c.id}
          className="category text-nowrap"
          onClick={(e) => {
            setCategory(c.name);
            activeCategory(e);
          }}>
          {c.name}
        </span>
      ))}
    </div>
  );
};

export default CategoriesContainer;
