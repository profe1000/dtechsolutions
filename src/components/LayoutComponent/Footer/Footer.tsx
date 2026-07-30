import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <img
              src={`${process.env.PUBLIC_URL}/logob.png`}
              alt="Data Design Tech Solutions"
              className="h-20 mb-6"
            />

            <p className="leading-8 text-gray-400">
              Data Design Tech Solutions is an advisory and implementation
              company helping businesses harness the power of technology,
              data, and digital transformation through innovative enterprise
              solutions.
            </p>

            <div className="flex mt-8 space-x-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <FacebookOutlined />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <InstagramOutlined />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <LinkedinOutlined />
              </a>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/services/data-management"
                  className="hover:text-white transition"
                >
                  Data Management
                </Link>
              </li>

              <li>
                <Link
                  to="/services/backup-recovery"
                  className="hover:text-white transition"
                >
                  Backup & Recovery
                </Link>
              </li>

              <li>
                <Link
                  to="/services/application-support"
                  className="hover:text-white transition"
                >
                  Software Application Support
                </Link>
              </li>

              <li>
                <Link
                  to="/services/consulting-training"
                  className="hover:text-white transition"
                >
                  Consulting & Training
                </Link>
              </li>

              <li>
                <Link
                  to="/services/data-analytics"
                  className="hover:text-white transition"
                >
                  Data Analytics
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Company
            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/home#about-section" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/home#services-section" className="hover:text-white transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-medium transition"
            >
              Request Consultation
            </Link>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex items-start">
                <MailOutlined className="mt-1 mr-3 text-blue-500" />
                <span>info@datadesigntech.com</span>
              </div>

              <div className="flex items-start">
                <PhoneOutlined className="mt-1 mr-3 text-blue-500" />
                <span>+234 XXX XXX XXXX</span>
              </div>

              <div className="flex items-start">
                <EnvironmentOutlined className="mt-1 mr-3 text-blue-500" />

                <span>
                  Your Office Address
                  <br />
                  City, State
                  <br />
                  Nigeria
                </span>

              </div>

              <div className="pt-4 border-t border-gray-700">

                <p>Monday - Friday : 8:00 AM - 5:00 PM</p>

                <p>Saturday : By Appointment</p>

                <p>Sunday : Closed</p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-16 pt-8">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

            <p className="text-gray-500 text-center lg:text-left">
              © {new Date().getFullYear()} Data Design Tech Solutions. All
              Rights Reserved.
            </p>

            <p className="text-center text-lg md:text-xl font-semibold text-white">
              Transforming Data.
              <span className="text-blue-400">
                {" "}Empowering Businesses.
              </span>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;