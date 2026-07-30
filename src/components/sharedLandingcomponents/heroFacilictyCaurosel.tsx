import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import { Image } from "antd";

export default function OurFacilitiesSection() {
  const images = [
    {
      src: `${process.env.PUBLIC_URL}/images/home/facility1.png`,
      caption: "Manufacturing Plant",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/home/facility2.png`,
      caption: "Production Line",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/home/facility3.png`,
      caption: "Quality Control",
    },
    {
      src: `${process.env.PUBLIC_URL}/images/home/facility4.png`,
      caption: "Warehouse & Distribution",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-400 text-blue-950 px-5 py-2 rounded-full font-bold uppercase tracking-widest">
            Manufacturing Excellence
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 fontPoppinsRegular">
            Our Facilities
          </h2>

          <p className="text-blue-100 text-lg max-w-3xl mx-auto mt-5">
            Our manufacturing facility in <strong>Warri, Delta State</strong>,
            is equipped with modern production systems that ensure consistent
            manufacturing, strict quality control, and reliable nationwide
            supply.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-blue-950 mb-6">
                Built for Quality & Reliability
              </h3>

              <p className="text-gray-700 leading-8 text-lg mb-8">
                Every product manufactured by Chris-Feddek International Nigeria
                Limited passes through carefully monitored production and
                quality assurance processes to guarantee durability, colour
                consistency, and customer satisfaction.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
                    <BuildOutlined className="text-2xl text-amber-600" />
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-950 text-lg">
                      Modern Production
                    </h4>

                    <p className="text-gray-600">
                      Advanced manufacturing equipment for consistent paint
                      production.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <SafetyCertificateOutlined className="text-2xl text-green-600" />
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-950 text-lg">
                      Quality Assurance
                    </h4>

                    <p className="text-gray-600">
                      Every batch undergoes strict quality testing before
                      delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                    <EnvironmentOutlined className="text-2xl text-blue-700" />
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-950 text-lg">
                      Strategic Location
                    </h4>

                    <p className="text-gray-600">
                      Located in Warri, Delta State, enabling efficient
                      distribution across Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <Image.PreviewGroup>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                centeredSlides
                loop
                slidesPerView={"auto"}
                spaceBetween={20}
              >
                {images.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ width: "85%" }}
                    className="rounded-3xl overflow-hidden"
                  >
                    <div className="relative group">
                      <Image
                        src={img.src}
                        alt={img.caption}
                        preview
                        width="100%"
                        style={{
                          height: "520px",
                          objectFit: "cover",
                          borderRadius: "24px",
                          cursor: "zoom-in",
                        }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl pointer-events-none" />

                      {/* Caption */}
                      <div className="absolute bottom-8 left-8 pointer-events-none">
                        <span className="bg-amber-400 text-blue-950 px-4 py-2 rounded-full font-semibold shadow-lg">
                          {img.caption}
                        </span>
                      </div>

                      {/* Hover Hint */}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-2 rounded-full text-sm font-medium text-blue-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        🔍 Click to Enlarge
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Image.PreviewGroup>
          </div>
        </div>
      </div>

      <style>{`
        .swiper-slide {
          opacity: .45;
          transform: scale(.92);
          transition: all .4s ease;
        }

        .swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1) !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #fbbf24;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: .6;
        }

        .swiper-pagination-bullet-active {
          background: #fbbf24;
          opacity: 1;
        }

        .ant-image {
          width: 100%;
          display: block;
        }

        .ant-image img {
          transition: transform .4s ease;
        }

        .group:hover .ant-image img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}