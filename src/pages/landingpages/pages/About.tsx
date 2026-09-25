import { Link } from "react-router-dom";
import {
  AimOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
  EyeOutlined,
  SafetyCertificateOutlined,
  SmileOutlined,
  StarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import useHashScroll from "../../../hooks/useHashScroll";
import "../landingpages.css";

const coreOfferings = [
  "IT Training & Capacity Development",
  "Business Process Automation",
  "IT Infrastructure Services",
  "IT Consulting & Advisory Services",
];

const values = [
  {
    icon: <SafetyCertificateOutlined />,
    title: "Integrity",
    text: "We act with honesty, professionalism and respect for the confidentiality of our clients' information.",
  },
  {
    icon: <StarOutlined />,
    title: "Excellence",
    text: "We hold every engagement to high standards of quality and continuously improve how we deliver.",
  },
  {
    icon: <SmileOutlined />,
    title: "Client Focus",
    text: "We align every solution with our clients' business objectives and measure success by their outcomes.",
  },
  {
    icon: <TeamOutlined />,
    title: "Partnership",
    text: "We work alongside our clients as a long-term technology partner, not just a service provider.",
  },
];

export const AboutPage = () => {
  useHashScroll();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -left-24 -top-20" />
        <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl right-0 bottom-0" />

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
            ABOUT US
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            Innovating Business Through Technology Excellence
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl leading-9">
            Get to know who we are, what we do, and the principles that guide
            how we work with our clients.
          </p>
        </div>
      </section>

      {/* About Data Design Tech Solutions */}
      <section id="about-ddts" className="scroll-mt-28 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-3xl bg-blue-100"></div>
            <img
              src={`${process.env.PUBLIC_URL}/images/aboutPage/image1.jpg`}
              alt="Data Design Tech Solutions"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              About Data Design
              <span className="text-blue-700"> Tech Solutions</span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              <strong>Data Design Tech Solutions (DDTS)</strong> is a
              technology solutions and professional services company committed
              to delivering innovative, secure, and business-driven IT
              solutions that help organizations improve productivity, optimize
              operations, strengthen infrastructure, and accelerate digital
              transformation.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-9">
              As an advisory and implementation partner, we help enterprises
              solve complex business challenges by designing, implementing and
              supporting modern technology solutions.
            </p>

            <h3 className="mt-10 text-xl font-bold text-slate-900">
              Our core service offerings
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              {coreOfferings.map((offering) => (
                <div key={offering} className="flex gap-3">
                  <CheckCircleFilled className="text-blue-600 mt-1.5" />
                  <span className="text-gray-700">{offering}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section id="business-philosophy" className="scroll-mt-28 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#08134D]">
              Business Philosophy
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              We believe technology delivers its greatest value when it is
              secure, practical and aligned with real business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white rounded-3xl shadow-sm p-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 text-2xl flex items-center justify-center">
                <AimOutlined />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600 leading-8">
                To deliver innovative, secure, and business-driven IT solutions
                that improve productivity, optimize operations and empower our
                clients to grow.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm p-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 text-2xl flex items-center justify-center">
                <EyeOutlined />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600 leading-8">
                To be a trusted technology partner recognized for helping
                organizations accelerate digital transformation through
                technology excellence.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl transition"
              >
                <div className="text-3xl text-blue-600">{value.icon}</div>
                <h4 className="mt-5 text-xl font-semibold text-slate-900">
                  {value.title}
                </h4>
                <p className="mt-3 text-gray-600 leading-7">{value.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/policy"
              className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
            >
              Read Our Policy Statement
              <ArrowRightOutlined />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
