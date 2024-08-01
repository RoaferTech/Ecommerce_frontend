import React from "react";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  if (!product) {
    return <div>Error: Product not found.</div>;
  }

  return (
    <div className="bg-white overflow-hidden mt-4 w-full">
      <div className="relative group overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-[437px] object-cover transition-transform duration-300 cursor-pointer group-hover:scale-110"
          />
        </Link>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white mx-2" onClick={handleAddToCart}>
            <FaShoppingCart size={24} />
          </button>
          <button className="text-white mx-2">
            <FaHeart size={24} />
          </button>
          <Link to={`/product/${product.id}`}>
            <button className="text-white mx-2">
              <FaEye size={24} />
            </button>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-[#FF4C3B]">
            ${product.discountedPrice}
          </span>
          <del className="text-gray-500 text-sm">${product.price}</del>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
