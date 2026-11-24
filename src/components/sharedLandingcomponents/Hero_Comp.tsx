import React from "react";
import { Link } from "react-router-dom";
import { BgColorsOutlined, SafetyCertificateOutlined, CheckCircleFilled } from "@ant-design/icons";




const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F9FAFB]">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(#E5E7EB 1px, transparent 1px),
            linear-gradient(90deg, #E5E7EB 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
              Trusted Technology Partner
            </span>

            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#07104D]">
              Secure Data Management &amp;{" "}
              <span className="text-sky-500">Digital Transformation</span> for
              Growing Businesses in Lagos, Nigeria
            </h1>

            <p className="mt-8 text-gray-600 text-lg leading-9 max-w-xl">
              We help enterprises protect, manage, and unlock the value of their data with reliable infrastructure, analytics, and 24/7 support.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-[#07104D] text-xl px-12 py-5 rounded-2xl font-bold shadow-xl ring-4 ring-yellow-200 transition whitespace-nowrap"
              >
                Book a Free Consultation
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20">
              <div>
                <h2 className="text-5xl font-bold text-[#07104D]">
                  2
                </h2>
                <p className="text-gray-500 mt-2">
                  Successful Projects
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-[#07104D]">
                  2
                </h2>
                <p className="text-gray-500 mt-2">
                  Enterprise Clients
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-[#07104D]">
                  24/7
                </h2>
                <p className="text-gray-500 mt-2">
                  Technical Support
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-[#07104D]">
                  2
                </h2>
                <p className="text-gray-500 mt-2">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-sky-100 to-blue-200">
              <img
                src={`${process.env.PUBLIC_URL}/images/hero/hero1.png`}
                alt="Data Design Tech Solutions Team"
                className="w-full h-full object-contain object-bottom"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute left-6 right-6 bottom-6 bg-[#07104D] rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="uppercase text-gray-300 tracking-widest text-sm">
                  Trusted Technology Partner
                </p>

                <h3 className="text-white text-3xl md:text-4xl font-bold mt-2 leading-tight">
                  Driving
                  <span className="text-sky-400">
                    {" "}
                    Innovation{" "}
                  </span>
                  Through Data
                </h3>

                <p className="text-blue-100 mt-3 max-w-md">
                </p>
              </div>

              <a
                href="tel:+2347057173516"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#07104D] text-lg px-8 py-4 rounded-2xl font-bold transition whitespace-nowrap"
              >
                Call 07057173516
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 pt-32 pb-24">
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-sky-400 text-blue-950 px-5 py-2 rounded-full font-bold uppercase tracking-wider">
            <SafetyCertificateOutlined />
            Trusted IT Solutions Partner
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white leading-tight fontPoppinsRegular">
            Empowering
            <span className="text-sky-400"> Businesses </span>
            Through
            <br />
            Technology.
          </h1>

          {/* Description */}
          <p className="mt-8 text-xl text-blue-100 leading-9 max-w-xl">
            We help organizations transform the way they work through secure
            data management, backup & recovery, software application support,
            IT consulting, professional training, and advanced data analytics
            solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-12">
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-[#07104D] text-xl px-12 py-5 rounded-2xl font-bold shadow-xl ring-4 ring-yellow-200 transition whitespace-nowrap"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16">
            <div>
              <h3 className="text-4xl font-bold text-sky-400">2</h3>
              <p className="text-blue-100 mt-2">Successful Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-sky-400">2</h3>
              <p className="text-blue-100 mt-2">Enterprise Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-sky-400">24/7</h3>
              <p className="text-blue-100 mt-2">Technical Support</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-sky-400">2</h3>
              <p className="text-blue-100 mt-2">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-orange-500 rounded-[40px] rotate-6" />

          <div className="relative bg-white p-4 rounded-[40px] shadow-2xl">
            <img
              src={`${process.env.PUBLIC_URL}/images/aboutPage/image1.jpg`}
              alt="Our team collaborating with clients"
              className="rounded-[30px] w-full h-[550px] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircleFilled className="text-2xl text-green-600" />
              </div>

              <div>
                <h4 className="font-bold text-blue-950">
                  Trusted IT Partner
                </h4>

                <p className="text-gray-500">
                  Secure • Reliable • Scalable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

