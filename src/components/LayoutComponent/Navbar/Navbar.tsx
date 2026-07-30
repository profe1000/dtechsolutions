import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center"
            onClick={closeMenu}
          >
            <img
              src={`${process.env.PUBLIC_URL}/logob.png`}
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/home"
              className="text-gray-800 hover:text-blue-600 transition duration-300 font-semibold tracking-wide"
            >
              HOME
            </Link>

            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 transition duration-300 font-semibold tracking-wide"
            >
              ABOUT
            </Link>

            <Link
              to="/brands"
              className="text-gray-800 hover:text-blue-600 transition duration-300 font-semibold tracking-wide"
            >
              OUR SERVICES
            </Link>

            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 transition duration-300 font-semibold tracking-wide"
            >
              CONTACT
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-7 bg-gray-800 transition-all duration-300 ${
                  showMenu ? "rotate-45 translate-y-2" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-7 bg-gray-800 transition-all duration-300 ${
                  showMenu ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-7 bg-gray-800 transition-all duration-300 ${
                  showMenu ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-500 z-40 ${
          showMenu
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-center">
          <Link
            to="/home"
            onClick={closeMenu}
            className="text-gray-800 text-3xl font-semibold hover:text-blue-600 transition"
          >
            HOME
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="text-gray-800 text-3xl font-semibold hover:text-blue-600 transition"
          >
            ABOUT
          </Link>

          <Link
            to="/brands"
            onClick={closeMenu}
            className="text-gray-800 text-3xl font-semibold hover:text-blue-600 transition"
          >
            OUR SERVICES
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-gray-800 text-3xl font-semibold hover:text-blue-600 transition"
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-28"></div>
    </>
  );
};

export default Navbar;