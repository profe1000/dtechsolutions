import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import useHashScroll from "../../../hooks/useHashScroll";
import {
  getServiceCategory,
  serviceCategories,
} from "../../../utils/serviceCategories";
import { serviceCategoryIcons } from "../../../utils/serviceCategoryIcons";
import "../landingpages.css";

export const ServiceCategoryPage = () => {
  const { categoryId } = useParams();
  const category = getServiceCategory(categoryId);

  useHashScroll();

  if (!category) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Service Not Found
          </h1>
          <p className="mt-6 text-gray-600">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/our-services"
            className="inline-flex items-center gap-2 mt-10 bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition"
          >
            <ArrowLeftOutlined />
            Back to Our Services
          </Link>
        </div>
      </section>
    );
  }

  const otherCategories = serviceCategories.filter(
    (item) => item.id !== category.id
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -left-24 -top-20" />
        <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl right-0 bottom-0" />

        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            to="/our-services"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition"
          >
            <ArrowLeftOutlined />
            All Services
          </Link>

          <div className="mt-10 flex items-center gap-4">
            <span className="w-14 h-14 rounded-2xl bg-white/10 text-white text-2xl flex items-center justify-center">
              {serviceCategoryIcons[category.id]}
            </span>
            <span className="text-sm font-semibold tracking-wider text-blue-200">
              OUR SERVICES
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            {category.title}
          </h1>

          <p className="mt-4 text-2xl text-blue-100">{category.tagline}</p>

          <p className="mt-6 text-lg text-blue-100/80 max-w-3xl leading-8">
            {category.summary}
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            {category.offerings.map((offering) => (
              <Link
                key={offering.id}
                to={`/our-services/${category.id}#${offering.id}`}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
              >
                {offering.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      {category.offerings.map((offering, index) => (
        <section
          key={offering.id}
          id={offering.id}
          className={`scroll-mt-28 py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-5xl font-bold text-blue-100">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#08134D]">
                {offering.title}
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-8">
                {offering.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 text-blue-700 font-semibold hover:text-blue-900 transition"
              >
                Enquire about {offering.title}
                <ArrowRightOutlined />
              </Link>
            </div>

            <div
              className={`rounded-3xl p-8 md:p-10 ${
                index % 2 === 0 ? "bg-slate-50" : "bg-white shadow-sm"
              }`}
            >
              <h3 className="text-sm font-bold tracking-wider text-gray-500 mb-6">
                WHAT WE OFFER
              </h3>
              <ul className="grid sm:grid-cols-2 gap-5">
                {offering.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckCircleFilled className="text-blue-600 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Other services */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#08134D]">
            Explore Our Other Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {otherCategories.map((item) => (
              <Link
                key={item.id}
                to={`/our-services/${item.id}`}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <span className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 text-xl flex items-center justify-center">
                  {serviceCategoryIcons[item.id]}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-950">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-8 text-xl text-blue-100 leading-9">
            Speak with our experts and find the right solution for your
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

export default ServiceCategoryPage;
