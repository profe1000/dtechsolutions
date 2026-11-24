import { Link } from "react-router-dom";
import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import { serviceCategories } from "../../utils/serviceCategories";
import { serviceCategoryIcons } from "../../utils/serviceCategoryIcons";

// Uses the same categories as the "What We Offer" menu so the header,
// footer and this section always list identical services.
const MyServices = () => {
  return (
    <section id="services-section" className="py-24 bg-gray-50 scroll-mt-44">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-[#08134D]">What We Offer</h2>

          <p className="mt-6 text-gray-600 max-w-2xl">
            We provide enterprise IT services designed to protect, optimize and
            transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-3xl border border-gray-200 bg-white p-8 flex flex-col hover:shadow-xl transition"
            >
              <span className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 text-2xl flex items-center justify-center">
                {serviceCategoryIcons[category.id]}
              </span>

              <h3 className="mt-6 text-2xl font-bold text-[#08134D]">
                {category.title}
              </h3>

              <p className="mt-4 text-gray-600">{category.summary}</p>

              <ul className="mt-6 space-y-2 flex-1">
                {category.offerings.slice(0, 4).map((offering) => (
                  <li key={offering.id}>
                    <Link
                      to={`/our-services/${category.id}#${offering.id}`}
                      className="flex gap-2 text-sm text-gray-700 hover:text-blue-700 transition"
                    >
                      <CheckCircleFilled className="text-blue-600 mt-0.5" />
                      {offering.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="border-t mt-8 pt-6">
                <Link
                  to={`/our-services/${category.id}`}
                  className="text-blue-600 font-semibold flex items-center gap-2"
                >
                  Learn More
                  <ArrowRightOutlined />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
