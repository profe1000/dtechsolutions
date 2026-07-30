import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo & Description */}
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/logob.png`}
              alt="Logo"
              className="h-20 mb-6 rounded-md"
            />

            <p className="leading-7 text-gray-400">
              Transform every space with premium paints, vibrant colours, and
              finishes made to last. Quality and inspiration in every coat.
            </p>

            <div className="flex mt-8 space-x-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-900 hover:border-red-900 transition-all duration-300"
              >
                <FacebookOutlined />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-900 hover:border-red-900 transition-all duration-300"
              >
                <InstagramOutlined />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-900 hover:border-red-900 transition-all duration-300"
              >
                <TwitterOutlined />
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Paint Solutions
            </h3>

            <ul className="space-y-4">

              <li className="hover:text-white transition cursor-pointer">
                <Link
                  to="/paint-calculator"
                  className="hover:text-white transition"
                >   Paint Calculator</Link>
              </li>

              <li className="hover:text-white transition cursor-pointer">
                <Link
                  to="/colour-chart"
                  className="hover:text-white transition"
                > Colour Chart
                </Link>
              </li>

              <li className="hover:text-white transition cursor-pointer">
                <Link
                  to="/photo-visualizer"
                  className="hover:text-white transition"
                > Photo Visualizer
                </Link>
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Texture Finishes
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Colour Consultation
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Surface Preparation
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Protective Coatings
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/home"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition"
                >
                  Faq
                </Link>
              </li>

            </ul>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-red-900 hover:bg-red-700 px-6 py-3 rounded-full text-white transition-all duration-300"
            >
              Request a Colour Consultation
            </Link>

          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start">
                <MailOutlined className="mt-1 mr-3 text-red-500" />
                <span>info@cfiglowpaints.com</span>
              </div>

              <div className="flex items-start">
                <PhoneOutlined className="mt-1 mr-3 text-red-500" />
                <span>+234 907 565 7273</span>
              </div>

              <div className="flex items-start">
                <EnvironmentOutlined className="mt-1 mr-3 text-red-500" />
                <span>
                  H15A Road 35,
                  <br />
                  Osubi, Okpe,
                  Delta State.
                </span>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <p>Mon - Sat : 7.00am - 5.00pm</p>
                <p>Last Sat of Month : 10:00 AM - 5:00 PM</p>
                <p>Sunday : Closed</p>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center">

            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} CFI Glow Paint. All rights reserved.
            </p>

            <p className="mt-4 md:mt-0 text-center text-xl md:text-2xl font-semibold text-white tracking-wide">
              IT'S NOT JUST PAINT.
              <br className="md:hidden" />
              IT'S THE FEELING OF HOME.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
