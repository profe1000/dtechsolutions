import React from "react";
import "../sharedLandingcss/SharedComponent.css";

const PagerHeaderComp = ({ image, title, subtitle }) => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={image}
        alt="Pager Header Background"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-none fontKanitRegular">
          {title}
        </h1>
        <h2 className="text-white text-xl md:text-2xl font-semibold mt-4 fontAlbertSansRegular">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};

export default PagerHeaderComp;
