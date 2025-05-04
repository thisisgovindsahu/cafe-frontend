import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CategoriesContainer = () => {
  const [categories, setCategories] = useLocalStorage("categories", []);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URI
        }/components/routes/categories/categories.php`
      );
      if (data?.success) {
        setCategories(data?.data);
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

  return categories?.length === 0 ? (
    <h1>No categories found.</h1>
  ) : (
    <div className="categories-container w-full flex items-center gap-[50px] fixed top-16 md:top-20 h-20 left-0 ">
      <span>All</span>
      {categories?.map((c) => (
        <span key={c.id} className="category text-nowrap">
          {c.name}
        </span>
      ))}
    </div>
  );
};

export default CategoriesContainer;
