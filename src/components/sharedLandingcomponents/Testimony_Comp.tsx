import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules";
import {
  StarFilled,
  CommentOutlined,
} from "@ant-design/icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonyComponent = () => {
  const testimonies = [
    {
      name: "John Doe",
      text: "The colour guidance made choosing paint simple, and the finish transformed our living room.",
      image: `${process.env.PUBLIC_URL}/images/testimony/avatar.jfif`,
    },
    {
      name: "Jane Smith",
      text: "Excellent coverage and a beautiful, long-lasting result. We are very pleased with the quality.",
      image: `${process.env.PUBLIC_URL}/images/testimony/avatar.jfif`,
    },
    {
      name: "Sam Wilson",
      text: "Helpful service, quality products, and the right finish for our project. Highly recommended.",
      image: `${process.env.PUBLIC_URL}/images/testimony/avatar.jfif`,
    },
  ];

  return (
    <section className="py-20 bg-blue-950">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 rounded-full bg-amber-400 text-blue-950 font-bold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 fontPoppinsRegular">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-blue-100 max-w-3xl mx-auto text-lg">
            Discover why homeowners, contractors, and businesses trust our
            premium paints for exceptional quality and lasting beauty.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonies.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">

                {/* Top Color Bar */}
                <div className="h-3 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"></div>

                <div className="p-10 md:p-14 text-center">

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                    <CommentOutlined className="text-4xl text-blue-950" />
                  </div>

                  {/* Customer Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-amber-400 shadow-lg mx-auto mb-6"
                  />

                  {/* Stars */}
                  <div className="flex justify-center gap-1 text-yellow-500 text-xl mb-6">
                    {[...Array(5)].map((_, i) => (
                      <StarFilled key={i} />
                    ))}
                  </div>

                  {/* Testimony */}
                  <p className="text-xl italic text-gray-700 leading-9 max-w-3xl mx-auto">
                    "{item.text}"
                  </p>

                  {/* Name */}
                  <h4 className="mt-8 text-2xl font-bold text-blue-950">
                    {item.name}
                  </h4>

                  <p className="text-amber-500 font-semibold mt-1">
                    Valued Customer
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonyComponent;