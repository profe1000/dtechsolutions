import { Link } from "react-router-dom";
import { CheckCircleFilled, FileProtectOutlined } from "@ant-design/icons";
import useHashScroll from "../../../hooks/useHashScroll";
import { policyOverview, policySections } from "../../../utils/policy";
import "../landingpages.css";

const tableOfContents = [
  { id: "overview", title: "Overview" },
  ...policySections.map((section) => ({
    id: section.id,
    title: section.number ? `${section.number}. ${section.title}` : section.title,
  })),
];

export const PolicyPage = () => {
  useHashScroll();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -left-24 -top-20" />
        <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl right-0 bottom-0" />

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <FileProtectOutlined />
            POLICY STATEMENT
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            IT Services Policy Statement Manual
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl leading-9">
            The guiding principles, standards, and responsibilities that govern
            how Data Design Tech Solutions delivers its services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-36 bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-sm font-bold tracking-wider text-gray-500 mb-4">
                CONTENTS
              </h3>
              <nav className="space-y-1">
                {tableOfContents.map((entry) => (
                  <Link
                    key={entry.id}
                    to={`/policy#${entry.id}`}
                    className="block py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    {entry.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-10 min-w-0">
            {/* Overview */}
            <article
              id="overview"
              className="scroll-mt-32 bg-white rounded-3xl shadow-sm p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Overview
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-9">
                {policyOverview.intro}
              </p>

              <p className="mt-6 text-lg text-gray-600">
                {policyOverview.offeringsIntro}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {policyOverview.offerings.map((offering) => (
                  <div
                    key={offering}
                    className="flex items-center gap-3 bg-blue-50 rounded-xl px-5 py-4"
                  >
                    <CheckCircleFilled className="text-blue-600" />
                    <span className="font-semibold text-slate-900">
                      {offering}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-lg text-gray-600 leading-9">
                {policyOverview.closing}
              </p>
            </article>

            {/* Policy sections */}
            {policySections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-32 bg-white rounded-3xl shadow-sm p-8 md:p-12"
              >
                <div className="flex items-start gap-5">
                  {section.number && (
                    <span className="shrink-0 w-12 h-12 rounded-2xl bg-blue-700 text-white text-xl font-bold flex items-center justify-center">
                      {section.number}
                    </span>
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 pt-1">
                    {section.title}
                  </h2>
                </div>

                {section.statement && (
                  <div className="mt-8 border-l-4 border-blue-600 bg-blue-50/60 rounded-r-2xl px-6 py-5">
                    <h3 className="text-sm font-bold tracking-wider text-blue-700">
                      POLICY STATEMENT
                    </h3>
                    <p className="mt-2 text-lg text-gray-700 leading-8">
                      {section.statement}
                    </p>
                  </div>
                )}

                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  {section.blocks.map((block) => (
                    <div key={block.heading}>
                      <h3 className="text-xl font-bold text-slate-900">
                        {block.heading}
                      </h3>

                      {block.intro && (
                        <p className="mt-3 text-gray-600 leading-8">
                          {block.intro}
                        </p>
                      )}

                      {block.points && (
                        <ul className="mt-4 space-y-3">
                          {block.points.map((point) => (
                            <li key={point} className="flex gap-3">
                              <CheckCircleFilled className="text-blue-600 mt-1.5" />
                              <span className="text-gray-700 leading-7">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}

            {/* Sign-off */}
            <div className="text-center pt-6">
              <p className="text-2xl font-bold text-[#08134D]">
                Data Design Tech Solutions
              </p>
              <p className="mt-2 italic text-gray-600">
                Innovating Business Through Technology Excellence
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicyPage;
