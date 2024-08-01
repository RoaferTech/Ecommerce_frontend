import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/data";
const DetailProduct = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img
        src={`/${product.imageUrl}`}
        alt={product.title}
        className="w-full h-[500px] object-cover mb-4"
      />
      <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
      <p className="text-lg text-[#FF4C3B] mb-2">${product.discountedPrice}</p>
      <p className="text-gray-500 text-sm mb-4">
        Original Price: ${product.price}
      </p>
    </div>
  );
};

export default DetailProduct;
