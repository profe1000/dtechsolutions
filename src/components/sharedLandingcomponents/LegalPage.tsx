import { ReactNode } from "react";
import useHashScroll from "../../hooks/useHashScroll";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface Props {
  badge: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const LegalPage = ({ badge, title, updated, intro, sections }: Props) => {
  useHashScroll();

  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {badge}
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            {title}
          </h1>
          <p className="mt-4 text-blue-200">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 bg-white rounded-3xl shadow-sm p-8 md:p-12">
          <p className="text-lg text-gray-600 leading-9">{intro}</p>

          {sections.map((section, index) => (
            <div key={section.id} id={section.id} className="scroll-mt-44 mt-12">
              <h2 className="text-2xl font-bold text-[#08134D]">
                {index + 1}. {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-gray-600 leading-8 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LegalPage;
