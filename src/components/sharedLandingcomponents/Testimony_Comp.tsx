import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
} from "swiper/modules";

import {
  StarFilled,
} from "@ant-design/icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonies = [
  {
    name: "Michael Johnson",
    role: "Operations Manager",
    company: "Prime Logistics Ltd.",
    image: `${process.env.PUBLIC_URL}/images/testimony/avatar.jfif`,
    text: "Data Design Tech Solutions completely transformed our data management processes. Their expertise and professionalism helped us improve operational efficiency while keeping our business data secure.",
  },
  {
    name: "Sarah Williams",
    role: "IT Administrator",
    company: "Nova Healthcare",
    image: `${process.env.PUBLIC_URL}/images/testimony/avatar.jfif`,
    text: "Their backup and disaster recovery solution gave us complete confidence that our critical business information is always protected. The implementation was seamless and the support has been outstanding.",
  },
  {
    name: "David Okoro",
    role: "Managing Director",
    company: "Axis Manufacturing",
    image: `${process.env.PUBLIC_URL}/images/testimony/avatar.jfif`,
    text: "The consulting and training sessions equipped our team with practical knowledge that immediately improved productivity. Their consultants truly understand enterprise technology.",
  },
];

export default function TestimonyComponent() {
  return (
    <section className="py-24 bg-[#07104D]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="inline-flex px-5 py-2 rounded-full bg-blue-300 text-blue-700 font-semibold">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Trusted by Businesses
            <span className="text-blue-500"> Across Industries</span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            We build lasting partnerships by delivering reliable technology
            solutions, expert support, and measurable business results.
          </p>

        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonies.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl mx-auto overflow-hidden">

                {/* Blue Top */}

                <div className="h-2 bg-gradient-to-r from-blue-700 to-cyan-500"></div>

                {/* Quote */}

                {/* <QuoteLeftOutlined className="absolute text-[180px] text-blue-100 right-10 top-10 opacity-30" /> */}

                <div className="relative p-12 md:p-16">

                  <div className="flex flex-col items-center">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 rounded-full border-4 border-blue-600 object-cover shadow-lg"
                    />

                    <div className="flex mt-6 text-yellow-500 text-xl gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarFilled key={i} />
                      ))}
                    </div>

                    <p className="mt-8 text-xl text-gray-700 italic leading-10 text-center max-w-3xl">
                      "{item.text}"
                    </p>

                    <div className="mt-10 text-center">

                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.name}
                      </h3>

                      <p className="text-blue-600 font-semibold mt-1">
                        {item.role}
                      </p>

                      <p className="text-gray-500">
                        {item.company}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}