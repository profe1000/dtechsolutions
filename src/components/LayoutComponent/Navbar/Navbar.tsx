import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-950/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center space-x-3"
            onClick={closeMenu}
          >
            <img
              src={`${process.env.PUBLIC_URL}/logob.png`}
              alt="Logo"
              className="h-20 rounded-md  w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/home"
              className="text-white hover:text-blue-300 transition duration-300 font-medium tracking-wide"
            >
              HOME
            </Link>

            <Link
              to="/about"
              className="text-white hover:text-blue-300 transition duration-300 font-medium tracking-wide"
            >
              ABOUT
            </Link>

            <Link
              to="/brands"
              className="text-white hover:text-blue-300 transition duration-300 font-medium tracking-wide"
            >
             OUR SERVICES
            </Link>


            <Link
              to="/contact"
              className="text-white hover:text-blue-300 transition duration-300 font-medium tracking-wide"
            >
              CONTACT
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-7 bg-white transition-all duration-300 ${showMenu ? "rotate-45 translate-y-2" : ""
                  }`}
              />

              <span
                className={`block h-0.5 w-7 bg-white transition-all duration-300 ${showMenu ? "opacity-0" : ""
                  }`}
              />

              <span
                className={`block h-0.5 w-7 bg-white transition-all duration-300 ${showMenu ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-blue-950 transition-all duration-500 z-40 ${showMenu
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-center">
          <Link
            to="/home"
            onClick={closeMenu}
            className="text-white text-3xl font-semibold hover:text-blue-300 transition"
          >
            HOME
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="text-white text-3xl font-semibold hover:text-blue-300 transition"
          >
            ABOUT
          </Link>

          <Link
            to="/brands"
            onClick={closeMenu}
            className="text-white text-3xl font-semibold hover:text-blue-300 transition"
          >
            OUR SERVICES
          </Link>
          
          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-white text-3xl font-semibold hover:text-blue-300 transition"
          >
            CONTACT
          </Link>
        </div>
      </div>

      <div className="h-28 md:h-28"></div>


    </>
  );
};

export default Navbar;