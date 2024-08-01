import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Navbar } from "flowbite-react";
import CartModal from "./CartModal";
import { useSelector } from "react-redux";
const NavbarCom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const handleOpenDropdown = () => setIsOpen(!isOpen);
  const handleCloseDropdown = () => setIsOpen(false);
  return (
    <Navbar fluid rounded className="sticky top-0 z-50 bg-white">
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
        <CartModal isOpen={isOpen} handleClose={handleCloseDropdown} />
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
