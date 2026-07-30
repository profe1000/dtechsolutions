import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ImageCarousel() {
  const images = [
    {
      src: "https://cdn.prod.website-files.com/67336b2139b6b0905c503a61/6758712ce86ff6e2b04ebc5e_goldie-home-hair2.avif",
      caption: "Modern Interiors",
    },
    {
      src: "https://cdn.prod.website-files.com/67336b2139b6b0905c503a61/6758608b83baf67feecf5e73_goldie-homepage-slider-5.avif",
      caption: "Luxury Space",
    },
    {
      src: "https://cdn.prod.website-files.com/67336b2139b6b0905c503a61/675860899e8a0e6bacdc178a_goldie-homepage-slider-2.avif",
      caption: "Inspiring Colour",
    },
    {
      src: "https://cdn.prod.website-files.com/67336b2139b6b0905c503a61/6758608908cd5dd861f3823a_goldie-homepage-slider-3.avif",
      caption: "Beautiful Finishes",
    },
  ];

  return (
    <div className="w-full py-12">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="relative rounded-2xl overflow-hidden transition-all duration-500"
            style={{ width: "70%" }} // Center slide width
          >
            {/* Caption */}
            <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded-md text-sm z-20">
              {img.caption}
            </div>

            {/* Image */}
            <img
              src={img.src}
              alt={`Slide ${index}`}
              className="w-full h-[350px] md:h-[600px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Style override for side slides */}
      <style>
        {`
          .swiper-slide {
            opacity: 0.5;
            transform: scale(0.9);
          }
          .swiper-slide-active {
            opacity: 1 !important;
            transform: scale(1) !important;
          }
        `}
      </style>
    </div>
  );
}
