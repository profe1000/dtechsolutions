import React from "react";
import {
  EyeOutlined,
  AimOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const values = [
  "Quality Excellence",
  "Integrity",
  "Customer Satisfaction",
  "Innovation",
  "Professionalism",
  "Reliability",
  "Continuous Improvement",
];

const Card = ({ icon, title, children }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-amber-400">
    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
      {icon}
    </div>

    <h3 className="text-3xl font-bold text-blue-950 mb-4">
      {title}
    </h3>

    <p className="text-gray-600 leading-8 text-lg">
      {children}
    </p>
  </div>
);

export default function VisionMissionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-5 fontPoppinsRegular">
            Vision, Mission & Values
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            Guided by excellence and driven by innovation, we are committed to
            delivering premium paint solutions that inspire confidence and
            lasting value.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <Card
            title="Our Vision"
            icon={<EyeOutlined className="text-3xl text-blue-950" />}
          >
            To become one of Nigeria's most trusted and preferred paint
            manufacturing companies, recognized for quality, innovation, and
            excellence.
          </Card>

          <Card
            title="Our Mission"
            icon={<AimOutlined className="text-3xl text-blue-950" />}
          >
            To manufacture and supply premium-quality paint products that
            enhance and protect surfaces while delivering exceptional value to
            customers through continuous innovation and superior service.
          </Card>
        </div>

        {/* Values */}
        <div className="bg-blue-950 rounded-3xl p-10 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center">
              <TrophyOutlined className="text-2xl text-blue-950" />
            </div>

            <h3 className="text-3xl font-bold text-white">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {values.map((value) => (
              <div
                key={value}
                className="bg-white rounded-xl p-5 text-center shadow hover:bg-amber-50 hover:scale-105 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-blue-950">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}