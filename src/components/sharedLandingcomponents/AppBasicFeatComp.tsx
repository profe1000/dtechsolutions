import React from "react";
import { Link } from "react-router-dom";
import {
  MobileOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";

const SoftLifeAppBasicComp = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-white via-blue-50 to-amber-50">
      {/* Decorative Background Blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-sky-200 rounded-full blur-3xl opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-blue-950 text-white px-5 py-2 rounded-full font-bold uppercase tracking-wider">
              <MobileOutlined />
              Colour Inspiration
            </span>

            {/* Heading */}
            <h2 className="mt-8 text-5xl md:text-6xl font-extrabold text-blue-950 leading-tight fontKanitRegular">
              Find the
              <span className="text-amber-500"> Perfect Colour </span>
              for Every Space.
            </h2>

            {/* Description */}
            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
              Explore inspiring colour ideas, compare premium finishes, and
              receive expert guidance to transform your home, office, or
              commercial project with confidence.
            </p>

            {/* Features */}
            <div className="space-y-5 mt-10">
              <div className="flex items-center gap-4">
                <CheckCircleFilled className="text-green-500 text-2xl" />
                <span className="text-gray-700 text-lg">
                  Browse premium paint collections
                </span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircleFilled className="text-green-500 text-2xl" />
                <span className="text-gray-700 text-lg">
                  Discover trending colour inspirations
                </span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircleFilled className="text-green-500 text-2xl" />
                <span className="text-gray-700 text-lg">
                  Get professional painting advice
                </span>
              </div>

              <div className="flex items-center gap-4">
                <CheckCircleFilled className="text-green-500 text-2xl" />
                <span className="text-gray-700 text-lg">
                  Choose finishes for every project
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-12">
              <Link
                to="/shop"
                className="inline-flex items-center gap-3 bg-blue-950 hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Colours
                <ArrowRightOutlined />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
            {/* Soft Glow */}
            <div className="absolute w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-60"></div>

            {/* Phone Mockup */}
            <div className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-[40px] p-5 shadow-2xl">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/glowPaint.png`}
                alt="CFI Glow Paint App"
                className="w-full max-w-sm object-contain"
              />

              {/* Floating Card 1 */}
              <div className="absolute -left-8 top-16 bg-white rounded-2xl shadow-xl px-5 py-4">
                <h4 className="text-3xl font-bold text-blue-950">
                  500+
                </h4>
                <p className="text-gray-500 text-sm">
                  Colour Options
                </p>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-8 bottom-16 bg-amber-400 rounded-2xl shadow-xl px-5 py-4">
                <h4 className="text-2xl font-bold text-blue-950">
                  Premium
                </h4>
                <p className="text-blue-950 text-sm font-medium">
                  Quality Finishes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftLifeAppBasicComp;