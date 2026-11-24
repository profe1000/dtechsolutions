import { Link } from "react-router-dom";
import {
  ArrowRightOutlined,
  CustomerServiceOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const primaryCtaClass =
  "inline-block bg-yellow-400 hover:bg-yellow-300 text-[#07104D] text-xl px-12 py-5 rounded-2xl font-bold shadow-xl ring-4 ring-yellow-200 transition whitespace-nowrap";

const differentiators = [
  {
    icon: <TeamOutlined />,
    title: "Local Nigerian Team",
    text: "Hands-on enterprise IT experience, based in Lagos and close to the businesses we serve.",
  },
  {
    icon: <CustomerServiceOutlined />,
    title: "End-to-End Support",
    text: "Advisory, implementation and 24/7 maintenance from one accountable team.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Security & Compliance First",
    text: "A strong focus on data security and compliance for regulated industries.",
  },
];

const steps = [
  {
    title: "Discovery Call",
    text: "We learn about your business, your data and your goals.",
  },
  {
    title: "Proposal",
    text: "You receive a clear scope, timeline and cost for the work.",
  },
  {
    title: "Delivery & Support",
    text: "We implement the solution and keep it running with ongoing support.",
  },
];

export const WhyChooseUs = () => (
  <section id="why-choose-us" className="py-24 bg-white scroll-mt-44">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
          WHY CHOOSE US
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#08134D]">
          A Technology Partner You Can Rely On
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {differentiators.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-gray-200 bg-gray-50 p-8 hover:shadow-xl transition"
          >
            <span className="w-14 h-14 rounded-2xl bg-blue-700 text-white text-2xl flex items-center justify-center">
              {item.icon}
            </span>
            <h3 className="mt-6 text-2xl font-bold text-[#08134D]">
              {item.title}
            </h3>
            <p className="mt-4 text-gray-600 leading-8">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const HowWeWork = () => (
  <section id="how-we-work" className="py-24 bg-gray-50 scroll-mt-44">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
          HOW WE WORK
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#08134D]">
          Three Simple Steps
        </h2>
      </div>

      <ol className="grid md:grid-cols-3 gap-8 mt-16">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-3xl bg-white border border-gray-200 p-8"
          >
            <span className="w-12 h-12 rounded-full bg-[#07104D] text-white text-xl font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <h3 className="mt-6 text-2xl font-bold text-[#08134D]">
              {step.title}
            </h3>
            <p className="mt-4 text-gray-600 leading-8">{step.text}</p>
            {index < steps.length - 1 && (
              <ArrowRightOutlined className="hidden md:block absolute top-1/2 -right-7 -translate-y-1/2 text-2xl text-blue-600" />
            )}
          </li>
        ))}
      </ol>

      <div className="text-center mt-14">
        <Link to="/contact" className={primaryCtaClass}>
          Book a Free Consultation
        </Link>
      </div>
    </div>
  </section>
);
