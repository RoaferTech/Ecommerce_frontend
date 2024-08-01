import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { productsData } from "../data/data";

const TopProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("NEW ARRIVAL");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = productsData.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="max-w-[1260px] mx-auto py-24 px-4">
      <h5 className="text-[#FF4C3B] capitalize pb-2 text-lg tracking-widest text-center">
        exclusive products
      </h5>
      <h2 className="text-4xl uppercase font-bold tracking-wider pb-2 text-center">
        special products
      </h2>
      <div className="border-[3px] border-[#FF4C3B] w-24 mx-auto mb-2"></div>
      <div className="flex justify-center gap-10 py-4 uppercase text-lg">
        {["NEW ARRIVAL", "FEATURED", "SPECIAL"].map((category) => (
          <p
            key={category}
            className={`cursor-pointer ${
              selectedCategory === category ? "text-[#FF4C3B]" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
