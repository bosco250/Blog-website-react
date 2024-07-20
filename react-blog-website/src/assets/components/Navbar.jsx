import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//recat icons
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import Model from "./Model";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModelOpen, setIsmodelOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //nav items
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contacts", link: "Contacts" },
  ];
  //model detail
  const openModel = () => {
    setIsmodelOpen(true);
  };
  const closeModel = () => {
    setIsmodelOpen(false);
  };
  return (
    <header className=" bg-black text-white fixed top-0 left-0 w-screen">
      <nav className=" px-4 py-4 max-w-7xl mx-auto flex justify-between items-center ">
        <a href="/" className=" text-xl font-bold text-white">
          Design<span className=" text-orange-500">DK</span>{" "}
        </a>
        {/* navitems for lg devices */}
        <ul className=" md:flex gap-12 hidden">
          {navItems.map(({ path, link }) => (
            <li className=" text-white" key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* menu icons */}
        <div className=" text-white gap-4 items-center lg:flex hidden">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <button
            onClick={openModel}
            className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
          >
            Log in
          </button>
        </div>

        {/* our model is here */}
        <Model isOpen={isModelOpen} onClose={closeModel} />

        {/* mobile menu btn, dispaly mobile screen */}

        <div className=" md:hidden">
          <button className=" cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className=" w-5 h-5" />
            ) : (
              <FaBars className=" w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* menu items for only mobile  */}
      <div className="">
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-gray-200 ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-200"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className=" text-black" key={path}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
