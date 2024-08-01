import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Navbar } from "flowbite-react";
import { useSelector } from "react-redux";

const NavbarCom = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  return (
    <Navbar fluid rounded className="bg-white shadow-md">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-2xl py-4 dark:text-black uppercase tracking-widest font-bold">
          Feshion
        </span>
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <div className="relative">
          <IoCartOutline className="text-2xl" />
          {cartItemsCount > 0 && (
            <span className="absolute top-[-10px] right-[-10px] bg-[#FF4C3B] text-white rounded-full text-xs px-2 py-1">
              {cartItemsCount}
            </span>
          )}
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="#"
          className="text-black bg-white"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <span
            className="block hover:text-[#FF4C3B] active:text-[#FF4C3B]"
            style={{ transition: "color 0.3s ease-in-out" }}
          >
            Home
          </span>
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-black bg-white"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <span
            className="block hover:text-[#FF4C3B] active:text-[#FF4C3B]"
            style={{ transition: "color 0.3s ease-in-out" }}
          >
            Services
          </span>
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-black bg-white"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <span
            className="block hover:text-[#FF4C3B] active:text-[#FF4C3B]"
            style={{ transition: "color 0.3s ease-in-out" }}
          >
            About
          </span>
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-black bg-white"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <span
            className="block hover:text-[#FF4C3B] active:text-[#FF4C3B]"
            style={{ transition: "color 0.3s ease-in-out" }}
          >
            Blogs
          </span>
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="text-black bg-white"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <span
            className="block hover:text-[#FF4C3B] active:text-[#FF4C3B]"
            style={{ transition: "color 0.3s ease-in-out" }}
          >
            Contact
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCom;
