import React from "react";
import {
  UserOutlined,
    CommentOutlined,
} from "@ant-design/icons";

export default function FoundersMessageSection() {
  return (
    <section className="py-20 bg-blue-950">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Founder Image */}
          <div className="relative flex justify-center">

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400">

              <img
                src={`${process.env.PUBLIC_URL}/images/aboutPage/founder.jpg`}
                alt="Founder"
                className="w-full max-w-md h-[600px] object-cover"
              />

            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl px-6 py-5 flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-blue-950 flex items-center justify-center">
                <UserOutlined className="text-2xl text-amber-400" />
              </div>

              <div>
                <h4 className="font-bold text-blue-950">
                  Founder
                </h4>
                <p className="text-gray-500 text-sm">
                  Chris-Feddek International
                </p>
              </div>

            </div>

          </div>

          {/* Message */}
          <div>

            <span className="inline-block bg-amber-400 text-blue-950 px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
              Founder's Message
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 fontPoppinsRegular">
              A Vision Built on Quality
            </h2>

            <div className="mt-8 bg-white rounded-3xl p-10 shadow-2xl relative">

              <div className="absolute -top-6 left-8 w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center shadow-lg">
                <CommentOutlined className="text-3xl text-blue-950 rotate-180" />
              </div>

              <p className="text-gray-700 text-lg leading-9 italic mt-6">
                "Chris-Feddek International Nigeria Limited was established
                with a vision to provide quality paint solutions capable of
                meeting international standards while remaining affordable to
                the Nigerian market.
              </p>

              <p className="text-gray-700 text-lg leading-9 italic mt-5">
                Through dedication, innovation, and a commitment to excellence,
                we continue to strengthen our position as a trusted partner in
                the paint and coatings industry."
              </p>

              <div className="mt-10 border-t pt-6">
                <h4 className="text-2xl font-bold text-blue-950">
                  Founder & Chief Executive Officer
                </h4>

                <p className="text-amber-600 font-semibold mt-1">
                  Chris-Feddek International Nigeria Limited
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}