import React from "react";
import {
  HomeOutlined,
  ApartmentOutlined,
  BuildOutlined,
  BankOutlined,
  BookOutlined,
  TeamOutlined,
  ShopOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Fade from "react-reveal/Fade";

const marketsWeServe = [
  {
    title: "Building Contractors",
    icon: <BuildOutlined className="text-3xl text-amber-500" />,
    color: "bg-amber-100",
  },
  {
    title: "Property Developers",
    icon: <ApartmentOutlined className="text-3xl text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    title: "Construction Companies",
    icon: <BuildOutlined className="text-3xl text-green-600" />,
    color: "bg-green-100",
  },
  {
    title: "Government Agencies",
    icon: <BankOutlined className="text-3xl text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    title: "Educational Institutions",
    icon: <BookOutlined className="text-3xl text-red-500" />,
    color: "bg-red-100",
  },
  {
    title: "Religious Organisations",
    icon: <TeamOutlined className="text-3xl text-indigo-600" />,
    color: "bg-indigo-100",
  },
  {
    title: "Paint Dealers & Distributors",
    icon: <ShopOutlined className="text-3xl text-orange-600" />,
    color: "bg-orange-100",
  },
  {
    title: "Architects & Engineers",
    icon: <ToolOutlined className="text-3xl text-cyan-600" />,
    color: "bg-cyan-100",
  },
  {
    title: "Individual Homeowners",
    icon: <HomeOutlined className="text-3xl text-pink-600" />,
    color: "bg-pink-100",
  },
];

function MarketCard({ title, icon, color }) {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div
        className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-blue-950 leading-8">
        {title}
      </h3>

      <div className="mt-6 w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
    </div>
  );
}

export function BusinessTypesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-amber-50">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <Fade bottom>
          <div className="text-center mb-16">

          <span className="inline-block bg-blue-950 text-white px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
            Our Clients
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-blue-950 fontPoppinsRegular">
            Markets We Serve
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            We proudly serve homeowners, contractors, developers, institutions,
            and businesses across Nigeria with premium decorative and
            protective paint solutions.
          </p>

          </div>
        </Fade>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {marketsWeServe.map((item, index) => (
            <Fade bottom delay={index * 100} key={item.title}>
              <MarketCard {...item} />
            </Fade>
          ))}

        </div>

      </div>

    </section>
  );
}
