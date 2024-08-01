import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Navbar, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeFromCart } from "../redux/slices/cartSlice";

const NavbarCom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleOpenDropdown = () => setIsOpen(!isOpen);
  const handleCloseDropdown = () => setIsOpen(false);
  const handleDelete = (id) => dispatch(removeFromCart(id));

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white shadow-md">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-2xl py-5 dark:text-white uppercase tracking-widest font-bold">
          Feshion
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 relative">
        <button
          onClick={handleOpenDropdown}
          className="relative flex items-center"
        >
          <IoCartOutline className="text-2xl" />
          <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-[#FF4C3B] text-white text-xs flex items-center justify-center">
            {cartItems.length || 0}
          </span>
        </button>
        {isOpen && (
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
              <Button color="gray" onClick={handleCloseDropdown}>
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Blogs</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCom;
