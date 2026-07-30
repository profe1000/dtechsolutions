import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";

const activities = [
  "Manufacturing of decorative and protective paints and coatings.",
  "Production of emulsions, satin, putty, and specialty coating products under the Glow Paints and Bexcoat Paints brands.",
  "Formulation and blending of paint and allied chemical products.",
  "Distribution and marketing of finished paint products to dealers, contractors, and end users.",
  "Supply of paint products for residential, commercial, institutional, and industrial projects.",
  "Provision of technical advisory and product support services to customers and distributors.",
];

const CoreBusinessActivities = () => {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-400">
              Chris-Feddek International Nigeria Limited
            </p>
            <h2 className="mt-4 fontKanitRegular text-4xl font-extrabold leading-tight md:text-5xl">
              Our Core Business Activities
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Since commencement of operations, we have built our business around
              producing quality paint solutions and supporting every stage of our
              customers&apos; projects.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {activities.map((activity) => (
              <article
                key={activity}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10"
              >
                <CheckCircleFilled className="mt-1 text-lg text-orange-400" />
                <p className="leading-7 text-slate-200">{activity}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBusinessActivities;
