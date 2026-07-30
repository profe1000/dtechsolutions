import React from "react";
import { Image } from "antd";
import "../sharedLandingcss/SharedComponent.css";

const FeatureGallery = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/1.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/2.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/3.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/4.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/5.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/6.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/7.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/8.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/9.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/10.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/11.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/12.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/13.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/14.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/15.png`,
    `${process.env.PUBLIC_URL}/images/glowpaintInspo/16.png`,
  ];

  return (
    <div>
      {/* Heading */}
      <div className="bg-white px-6 py-16 text-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-orange-600">
          Colour Ideas
        </p>

        <h2 className="mt-3 fontKanitRegular text-4xl md:text-5xl font-extrabold text-gray-900">
          Get Inspired
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Explore colour combinations and finishes to inspire your next space.
        </p>
      </div>

      {/* Gallery */}
  <Image.PreviewGroup>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-2">
    {images.map((image, index) => (
      <div
        key={index}
        className="aspect-square overflow-hidden rounded-2xl shadow-lg group"
      >
        <Image
          src={image}
          alt={`Gallery ${index + 1}`}
          preview
          width="100%"
          height="100%"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    ))}
  </div>
</Image.PreviewGroup>
    </div>
  );
};

export default FeatureGallery;