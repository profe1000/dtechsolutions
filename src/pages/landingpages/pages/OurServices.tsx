import { Link } from "react-router-dom";
import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import { serviceCategories } from "../../../utils/serviceCategories";
import { serviceCategoryIcons } from "../../../utils/serviceCategoryIcons";
import "../landingpages.css";

export const OurServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -left-24 -top-20" />
        <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl right-0 bottom-0" />

        <div className="relative max-w-7xl mx-auto px-6">
          <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
            OUR SERVICES
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            Technology Services for Every Stage of Your Business
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl leading-9">
            From consulting and training to infrastructure and everyday IT
            support, we deliver solutions that help your organization run
            securely and grow with confidence.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl shadow-sm p-8 md:p-10 flex flex-col hover:shadow-xl transition duration-300"
            >
              <span className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 text-2xl flex items-center justify-center">
                {serviceCategoryIcons[category.id]}
              </span>

              <h2 className="mt-6 text-3xl font-bold text-[#08134D]">
                {category.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-8">{category.summary}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {category.offerings.map((offering) => (
                  <li key={offering.id}>
                    <Link
                      to={`/our-services/${category.id}#${offering.id}`}
                      className="flex gap-3 text-gray-700 hover:text-blue-700 transition"
                    >
                      <CheckCircleFilled className="text-blue-600 mt-1" />
                      {offering.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                to={`/our-services/${category.id}`}
                className="inline-flex items-center gap-2 mt-8 self-start bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                View {category.title}
                <ArrowRightOutlined />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Not Sure Which Service You Need?
          </h2>

          <p className="mt-8 text-xl text-blue-100 leading-9">
            Talk to our experts and we'll recommend the right solution for your
            organization.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-12 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
            <ArrowRightOutlined />
          </Link>
        </div>
      </section>
    </>
  );
};

export default OurServicesPage;
