import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";
import { Button } from "flowbite-react";

const CartModal = ({ isOpen, handleClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(removeFromCart({ id }));
  const handleIncrement = (id) => dispatch(incrementQuantity({ id }));
  const handleDecrement = (id) => dispatch(decrementQuantity({ id }));

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-72 max-h-[400px] overflow-y-auto p-4 border border-gray-200">
      <h3 className="font-bold text-lg mb-2">Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b py-2"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex-1 ml-4">
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-gray-500 text-xs">
                    ${item.discountedPrice.toFixed(2)}
                  </p>
                  <div className="flex items-center mt-1">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded-l-md"
                    >
                      -
                    </button>
                    <span className="px-2 py-1 bg-gray-100">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </>
      )}
      <div className="mt-4 text-center">
        <Button color="gray" onClick={handleClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default CartModal;
