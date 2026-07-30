import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { services } from "../../../utils/services";


export default function ServiceDetails() {
  const { id } = useParams();

  const service = useMemo(
    () => services.find((item) => item.id === id),
    [id]
  );

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Service Not Found
          </h1>

          <p className="mt-6 text-gray-600">
            The service you're looking for doesn't exist.
          </p>

          <Link
            to="/home"
            className="inline-flex items-center gap-2 mt-10 bg-blue-700 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition"
          >
            <ArrowLeftOutlined />
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}

      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 pt-36 pb-24 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -left-24 -top-20" />
        <div className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl right-0 bottom-0" />

        <div className="relative max-w-7xl mx-auto px-6">

          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition"
          >
            <ArrowLeftOutlined />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">

            <div>

              <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {service.tag}
              </span>

              <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white">
                {service.title}
              </h1>

              <p className="mt-8 text-xl text-blue-100 leading-9">
                {service.description}
              </p>

              <Link
                to="/contact"
                className="inline-flex mt-10 items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Request Consultation
                <ArrowRightOutlined />
              </Link>

            </div>

            <div>

              <img
                src={`${process.env.PUBLIC_URL}${service.image}`}
                alt={service.title}
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Overview */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20">

            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                Service Overview
              </h2>

              <p className="mt-8 text-lg text-gray-600 leading-9">
                {service.longDescription}
              </p>

            </div>

            <div>

              <div className="bg-slate-50 rounded-3xl p-10">

                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Key Benefits
                </h3>

                <div className="space-y-6">

                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex gap-4"
                    >
                      <CheckCircleFilled className="text-blue-600 mt-1 text-xl" />

                      <span className="text-gray-700">
                        {benefit}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Why Choose */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-slate-900">
              Why Choose Data Design Tech Solutions?
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Delivering enterprise technology solutions with excellence.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Experienced Consultants",
              "Tailored Solutions",
              "Reliable Technical Support",
              "Proven Business Results",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-xl transition"
              >
                <CheckCircleFilled className="text-5xl text-blue-600" />

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-blue-950">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>

          <p className="mt-8 text-xl text-blue-100 leading-9">
            Speak with our experts today and discover how our technology
            solutions can help your organization achieve its goals.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition"
            >
              View All Services
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}