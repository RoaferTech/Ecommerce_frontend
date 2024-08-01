import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Navbar } from "flowbite-react";

const NavbarCom = () => {
  return (
    <Navbar fluid rounded className="bg-white shadow-md">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-2xl py-4 dark:text-black uppercase tracking-widest font-bold">
          Feshion
        </span>
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <IoCartOutline className="text-2xl text-black mx-4" />
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
