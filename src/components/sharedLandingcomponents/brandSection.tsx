import React from "react";
import { Link } from "react-router-dom";
import {
  BgColorsOutlined,
  AppstoreOutlined,
  CheckCircleOutlined,
  ShoppingCartOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const brands = [
  {
    name: "Glow Paints",
    tagline: "You Too Can Glow",
    description:
      "Glow Paints is our premium decorative paint brand developed to provide superior finishes, durability, elegance, and long-lasting protection for residential, commercial, and institutional projects.",
    color: "from-amber-400 to-orange-500",
    image: `${process.env.PUBLIC_URL}/images/brands/glowpaints.png`,
    products: [
      "Glow Satin",
      "Glow Silk / Vinyl",
      "Glow Matt Emulsion",
      "Glow Super Smooth Putty",
      "GlowPlus Emulsion",
      "Glow Chrome",
      "Glow Marble Trowel",
      "Glow Gravitex",
      "Glow Super Bond",
      " POP Screeding Paint",
    ],
  },
  {
    name: "Bexcoat Paints",
    tagline: "Premium Paint & Coating Solutions",
    description:
      "Bexcoat Paints offers reliable and cost-effective coating solutions designed to meet the needs of contractors, property developers, businesses, and homeowners seeking quality finishes at competitive prices.",
    color: "from-blue-700 to-blue-950",
    image: `${process.env.PUBLIC_URL}/images/brands/bexcoat.png`,
    products: [
      "Bexcoat Satin",
      "Bexcoat Matt",
      "Bexcoat Putty",
      "Bexcoat Gravitex",
      "Bexcoat Gloss",
    ],
  },
];

export default function BrandsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
            Our Products
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-5 fontPoppinsRegular">
            Our Brands & Products
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            We proudly manufacture premium decorative and protective paints
            under two trusted brands, delivering quality finishes for homes,
            commercial buildings, and industrial projects.
          </p>
        </div>

        <div className="space-y-20">

          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* Brand Image */}
              <div className="relative group">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="rounded-3xl shadow-2xl w-full h-[520px] object-cover transition duration-500 group-hover:scale-[1.02]"
                />

                <div
                  className={`absolute top-6 left-6 bg-gradient-to-r ${brand.color} text-white px-6 py-3 rounded-xl shadow-lg`}
                >
                  <h3 className="text-2xl font-bold">
                    {brand.name}
                  </h3>

                  <p className="italic text-sm">
                    {brand.tagline}
                  </p>
                </div>
              </div>

              {/* Brand Details */}
              <div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-950 flex items-center justify-center">
                    <BgColorsOutlined className="text-3xl text-amber-400" />
                  </div>

                  <h3 className="text-4xl font-bold text-blue-950">
                    {brand.name}
                  </h3>
                </div>

                <p className="text-xl italic text-amber-600 font-semibold mb-5">
                  "{brand.tagline}"
                </p>

                <p className="text-lg text-gray-700 leading-8 mb-8">
                  {brand.description}
                </p>

                {/* Product Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">

                  <div className="flex items-center gap-3 mb-6">
                    <AppstoreOutlined className="text-2xl text-blue-950" />

                    <h4 className="text-2xl font-bold text-blue-950">
                      Product Range
                    </h4>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {brand.products.map((product) => (
                      <div
                        key={product}
                        className="flex items-center gap-3"
                      >
                        <CheckCircleOutlined className="text-green-500" />

                        <span className="text-gray-700 font-medium">
                          {product}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 mt-10">

                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300 hover:shadow-xl"
                    >
                      <ShoppingCartOutlined />
                      Shop Products
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
                    >
                      <PhoneOutlined />
                      Request a Quote
                    </Link>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}