import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IList } from "../../utils/generalType";
import "../sharedLandingcss/SharedComponent.css";
import Slide from "react-reveal/Slide";

export const TrustedBrandComp = () => {
  const trustedClient: IList[] = [
    {
      image: `${
        process.env.PUBLIC_URL + "/images/brands/home-3-Client-01.png"
      }`,
    },
    {
      image: `${
        process.env.PUBLIC_URL + "/images/brands/home-3-Client-02.png"
      }`,
    },
    {
      image: `${
        process.env.PUBLIC_URL + "/images/brands/home-3-Client-03.png"
      }`,
    },
    {
      image: `${
        process.env.PUBLIC_URL + "/images/brands/home-3-Client-04.png"
      }`,
    },
    {
      image: `${
        process.env.PUBLIC_URL + "/images/brands/home-3-Client-05.png"
      }`,
    },
    {
      image: `${
        process.env.PUBLIC_URL + "/images/brands/home-3-Client-06.png"
      }`,
    },
  ];

  return (
    <>
      {" "}
      {/* Trusted */}
      <div className="bg-gray-100 w-full py-8">
        <div className="max-w-7xl mx-auto">
          <Slide up>
            <div>
              <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true} // Added loop property
                spaceBetween={5}
                slidesPerView={4}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  // when window width is >= 600px
                  600: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                  // when window width is >= 840px
                  720: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                  },
                }}
              >
                {trustedClient.map((item: IList, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="p-2">
                      <div className="p-4">
                        <img
                          className="mt-4 mb-4"
                          src={item.image}
                          alt={`brand_${index}`}
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Slide>
        </div>
      </div>
      {/* Trusted */}
    </>
  );
};

export default TrustedBrandComp;
