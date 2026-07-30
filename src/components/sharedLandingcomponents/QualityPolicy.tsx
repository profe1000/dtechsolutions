import React from "react";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

export default function QualityPolicySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
            Our Commitment
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-blue-950 fontPoppinsRegular">
            Quality, Safety & Sustainability
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            We are committed to manufacturing premium-quality paint products
            while maintaining the highest standards of safety, environmental
            responsibility, and customer satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">

            {/* Quality Policy */}
            <div className="bg-blue-950 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">

              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"></div>

              <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center mb-6">
                <CheckCircleOutlined className="text-3xl text-blue-950" />
              </div>

              <h3 className="text-3xl font-bold mb-5">
                Quality Policy
              </h3>

              <p className="text-blue-100 leading-8 text-lg">
                At <strong>Chris-Feddek International Nigeria Limited</strong>,
                quality remains the foundation of our operations. Every stage of
                production is carefully monitored to ensure consistency,
                durability, excellent coverage, colour retention, and customer
                satisfaction.
              </p>

              <p className="text-blue-100 leading-8 text-lg mt-5">
                We are committed to continuous improvement and strict adherence
                to industry best practices, ensuring every product meets the
                highest standards of quality and performance.
              </p>

            </div>

            {/* HSE */}
            <div className="bg-amber-50 rounded-3xl border-l-8 border-amber-500 p-8 shadow-lg">

              <div className="w-16 h-16 rounded-full bg-blue-950 flex items-center justify-center mb-6">
                <SafetyCertificateOutlined className="text-3xl text-amber-400" />
              </div>

              <h3 className="text-3xl font-bold text-blue-950 mb-5">
                Health, Safety & Environment
              </h3>

              <p className="text-gray-700 leading-8 text-lg">
                We are committed to maintaining safe manufacturing practices,
                protecting the environment, and ensuring the health and safety
                of our employees, customers, and stakeholders.
              </p>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">

              <img
                src={`${process.env.PUBLIC_URL}/images/aboutPage/quality-policy.jpg`}
                alt="Quality Policy"
                className="w-full h-[620px] object-cover"
              />

            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-amber-400 rounded-2xl shadow-xl p-6">

              <h4 className="text-4xl font-bold text-blue-950">
                100%
              </h4>

              <p className="font-semibold text-blue-950">
                Quality Focused
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}