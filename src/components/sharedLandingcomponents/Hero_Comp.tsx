import React from "react";
import "../sharedLandingcss/SharedComponent.css";
import { BgColorsOutlined, ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { useState } from "react";

const HeroComp = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fallback Background */}
      {!videoLoaded && (
        <img
          src={`${process.env.PUBLIC_URL}/images/hero/sub_hero4.png`}
          alt="CFI Glow Paint"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Video */}
      <video
        poster={`${process.env.PUBLIC_URL}/images/hero/sub_hero4.png`}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        src={`${process.env.PUBLIC_URL}/images/hero/home_hero4.mp4`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-6xl md:text-8xl font-bold leading-none fontKanitRegular">
          CFI Glow Paint
        </h1>

        <h2 className="text-white text-2xl md:text-3xl font-semibold mt-4 fontAlbertSansRegular">
          Bring Every Space to Life with Colour
        </h2>
      </div>
    </div>
  );
};
export default HeroComp;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 pt-32 pb-24">

      {/* Background Decorations */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-amber-400 text-blue-950 px-5 py-2 rounded-full font-bold uppercase tracking-wider">
            <BgColorsOutlined />
            Premium Paint Manufacturer
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-tight fontPoppinsRegular">
            Bringing
            <span className="text-amber-400"> Colour </span>
            to Every
            <br />
            Space.
          </h1>

          {/* Description */}
          <p className="mt-8 text-xl text-blue-100 leading-9 max-w-xl">
            Premium decorative and protective paint solutions crafted for
            homeowners, contractors, developers, and commercial projects across
            Nigeria.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-12">

            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-blue-950 font-bold px-8 py-4 rounded-xl transition duration-300 shadow-xl"
            >
              Explore Products
              <ArrowRightOutlined />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-blue-950 px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Contact Us
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16">

            <div>
              <h3 className="text-4xl font-bold text-amber-400">
                10+
              </h3>
              <p className="text-blue-100">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-amber-400">
                1000+
              </h3>
              <p className="text-blue-100">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-amber-400">
                20+
              </h3>
              <p className="text-blue-100">
                Premium Products
              </p>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative">

          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-[40px] rotate-6"></div>

          <div className="relative bg-white p-4 rounded-[40px] shadow-2xl">

            <img
              src={`${process.env.PUBLIC_URL}/images/hero/sub_hero1.png`}
              alt="Chris-Feddek Paints"
              className="rounded-[30px] w-full h-[650px] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircleFilled className="text-2xl text-green-600" />
              </div>

              <div>
                <h4 className="font-bold text-blue-950">
                  Premium Quality
                </h4>

                <p className="text-gray-500">
                  Trusted Across Nigeria
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}