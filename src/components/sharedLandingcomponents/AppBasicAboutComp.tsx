import React from "react";
import {
  BgColorsOutlined,
  SafetyCertificateOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import "../sharedLandingcss/SharedComponent.css";

const AppBasicAbout = () => {
  return (
    <div className="bg-orange px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Row */}
          <div className="flex justify-center">
            <img
              style={{ width: "100%" }}
              src={`${process.env.PUBLIC_URL}/images/aboutPage/aboutpics3.jpg`}
              alt="Freshly painted interior space"
              className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-xl"
            />
          </div>

          {/* Text Row */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 fontKanitRegular leading-tight text-white">
              EVERY SPACE SHINES WITH THE RIGHT COLOUR.
            </h2>
            <p className="text-lg  font-medium fontAlbertSansRegular text-white">
              At CFI Glow Paint, we believe paint does more than cover a wall —
              it sets the mood, protects what matters, and brings your vision to
              life. We supply dependable paints and coatings for homes, offices,
              retail spaces, and commercial projects.
            </p>
            <p className="mt-5 text-lg font-medium fontAlbertSansRegular text-white/90">
              From helping you find the right shade to recommending the best
              finish for each surface, our focus is simple: excellent coverage,
              lasting protection, and spaces you will be proud to call your own.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-lg bg-white/15 p-4">
                <BgColorsOutlined className="text-2xl text-white" />
                <p className="mt-2 font-semibold text-white">Inspired Colour</p>
                <p className="mt-1 text-sm text-white/80">Choices for every style.</p>
              </div>
              <div className="rounded-lg bg-white/15 p-4">
                <SafetyCertificateOutlined className="text-2xl text-white" />
                <p className="mt-2 font-semibold text-white">Trusted Quality</p>
                <p className="mt-1 text-sm text-white/80">Finishes built to last.</p>
              </div>
              <div className="rounded-lg bg-white/15 p-4">
                <ToolOutlined className="text-2xl text-white" />
                <p className="mt-2 font-semibold text-white">Practical Support</p>
                <p className="mt-1 text-sm text-white/80">Advice for every project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBasicAbout;
