import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const DetailProduct = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === parseInt(id))
  );
  const quantity = cartItem ? cartItem.quantity : 1;
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4 max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-10">
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <img
          src={`/${product.imageUrl}`}
          alt={product.title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
          <p className="text-xl text-[#FF4C3B] mb-2">
            ${product.discountedPrice}
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Original Price: ${product.price}
          </p>
          <div className="flex items-center mb-4 gap-5">
            Quantity:
            <input
              type="text"
              value={quantity}
              readOnly
              className="text-center border-t border-b border-gray-300 p-2 w-16"
            />
          </div>
        </div>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          commodi labore aut error architecto sit enim asperiores, dolor
          cupiditate et, nulla eveniet! Eius commodi illum rerum deserunt natus
          nisi dignissimos.
        </p>
        <div className="flex gap-4">
          <button
            className="bg-[#FF4C3B] text-white py-2 px-4 rounded-lg flex-1"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg flex-1">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
