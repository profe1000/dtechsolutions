import React from "react";
import {
  ApartmentOutlined,
  CalendarOutlined,
  BgColorsOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

export default function CompanyOverviewSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
            About Chris-Feddek
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-blue-950 fontPoppinsRegular">
            Company Overview
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering premium paint solutions with quality, innovation, and
            reliability since 2015.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-blue-950 flex items-center justify-center">
                <ApartmentOutlined className="text-3xl text-amber-400" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-950">
                  Chris-Feddek International Nigeria Limited
                </h3>

                <div className="flex items-center gap-2 mt-2 text-gray-500">
                  <CalendarOutlined />
                  <span>Established on 13th July 2015</span>
                </div>
              </div>
            </div>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              Chris-Feddek International Nigeria Limited is a proudly
              Nigerian-owned paint manufacturing company specializing in the
              production, distribution, and marketing of premium decorative and
              protective paints under its flagship brands,
              <strong className="text-blue-950"> Glow Paints</strong> and
              <strong className="text-blue-950"> Bexcoat Paints</strong>.
            </p>

            <p className="text-lg leading-8 text-gray-700 mb-6">
              Over the years, we have earned a reputation for producing durable,
              cost-effective, and environmentally friendly paint products that
              meet the needs of homeowners, contractors, property developers,
              institutions, and industrial users.
            </p>

            <p className="text-lg leading-8 text-gray-700 mb-8">
              Our products are manufactured using carefully selected raw
              materials and modern production processes to deliver excellent
              coverage, durability, outstanding aesthetic appeal, and
              long-lasting protection. Guided by quality, innovation, and
              customer satisfaction, we continue to strengthen our presence
              across Nigeria's building and construction industry.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
                <CheckCircleOutlined className="text-amber-500 text-xl" />
                <span className="font-semibold text-gray-700">
                  Nigerian-Owned Company
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
                <BgColorsOutlined className="text-amber-500 text-xl" />
                <span className="font-semibold text-gray-700">
                  Premium Paint Brands
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
                <CheckCircleOutlined className="text-amber-500 text-xl" />
                <span className="font-semibold text-gray-700">
                  Decorative & Protective Paints
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
                <CheckCircleOutlined className="text-amber-500 text-xl" />
                <span className="font-semibold text-gray-700">
                  Trusted Across Nigeria
                </span>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <img
              src={`${process.env.PUBLIC_URL}/images/aboutPage/overviewb.png`}
              alt="Chris-Feddek International Nigeria Limited"
              className="rounded-3xl shadow-2xl w-full h-[650px] object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-6">

              <h4 className="text-4xl font-bold text-blue-950">
                Since 2015
              </h4>

              <p className="text-gray-600 mt-2">
                Manufacturing trusted paint solutions for homes,
                businesses, and industries across Nigeria.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}