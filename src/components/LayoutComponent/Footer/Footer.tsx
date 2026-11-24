import React from "react";
import { Link } from "react-router-dom";
import { serviceCategories } from "../../../utils/serviceCategories";
import { COMPANY } from "../../../utils/company";
import { openCookieSettings } from "../../sharedLandingcomponents/CookieConsent";
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
              src={`${process.env.PUBLIC_URL}/logoTrans.png`}
              alt="Data Design Tech Solutions"
              className="h-20 mb-6"
            />

            <p className="leading-8 text-gray-400">
              Data Design Tech Solutions is an advisory and implementation
              company helping businesses harness the power of technology,
              data, and digital transformation through innovative enterprise
              solutions.
            </p>

            <h3 className="text-white text-xl font-semibold mt-8 mb-4">
              Connect with Us
            </h3>

            <div className="flex space-x-4">
              {[
                { label: "Facebook", icon: <FacebookOutlined />, url: COMPANY.social.facebook },
                { label: "Instagram", icon: <InstagramOutlined />, url: COMPANY.social.instagram },
                { label: "LinkedIn", icon: <LinkedinOutlined />, url: COMPANY.social.linkedin },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.url || undefined}
                  target={item.url ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              What We Offer
            </h3>

            <ul className="space-y-4">

              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/our-services/${category.id}`}
                    className="hover:text-white transition"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}

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
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/our-services" className="hover:text-white transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/policy" className="hover:text-white transition">
                  Policy
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
              Book a Free Consultation
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
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition">{COMPANY.email}</a>
              </div>

              <div className="flex items-start">
                <PhoneOutlined className="mt-1 mr-3 text-blue-500" />
                <a href={COMPANY.phoneHref} className="hover:text-white transition">{COMPANY.phoneDisplay}</a>
              </div>

              <div className="flex items-start">
                <EnvironmentOutlined className="mt-1 mr-3 text-blue-500" />

                <span>
                  Lekki, Lagos
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
              {COMPANY.cacNumber && <> CAC Reg. No: {COMPANY.cacNumber}.</>}
            </p>

            <p className="text-center text-lg md:text-xl font-semibold text-white">
              Transforming Data.
              <span className="text-blue-400">
                {" "}Empowering Businesses.
              </span>
            </p>

          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-8 text-sm">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-white transition">
              Terms of Use
            </Link>
            <Link to="/privacy-policy#cookies" className="hover:text-white transition">
              Cookie Policy
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="hover:text-white transition"
            >
              Cookie Settings
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;