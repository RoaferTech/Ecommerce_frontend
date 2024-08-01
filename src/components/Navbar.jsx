import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Navbar } from "flowbite-react";
import { useSelector } from "react-redux";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";
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
          <span className="absolute top-[-6px] right-[-4px] h-4 w-4 rounded-full bg-[#FF4C3B] text-white text-xs flex items-center justify-center">
            {cartItems.length || 0}
          </span>
        </button>
        <CartModal isOpen={isOpen} handleClose={handleCloseDropdown} />
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/" className="custom-navbar-link">
          Home
        </Link>
        <Navbar.Link href="#" className="custom-navbar-link">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="custom-navbar-link">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="custom-navbar-link">
          Blogs
        </Navbar.Link>
        <Navbar.Link href="#" className="custom-navbar-link">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCom;
