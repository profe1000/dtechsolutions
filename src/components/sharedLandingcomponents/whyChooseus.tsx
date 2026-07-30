import {
  CheckCircleOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
  InboxOutlined,
} from "@ant-design/icons";

const reasons = [
  {
    title: "Superior Product Quality",
    description:
      "Our products are manufactured using premium raw materials and strict quality control procedures.",
    icon: CheckCircleOutlined,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Competitive Pricing",
    description:
      "We offer excellent value without compromising on quality.",
    icon: DollarOutlined,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Durable Finishes",
    description:
      "Our paints provide long-lasting beauty and protection under varying environmental conditions.",
    icon: SafetyCertificateOutlined,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Customer Support",
    description:
      "We provide technical guidance and product recommendations to ensure customer satisfaction.",
    icon: CustomerServiceOutlined,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Consistent Supply",
    description:
      "We maintain reliable production and distribution systems to meet market demand.",
    icon: InboxOutlined,
    color: "bg-red-100 text-red-600",
  },
];

function WhyChooseCard({ title, description, icon: Icon, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      {/* Top Accent */}
      <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500"></div>

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center ${color} mb-6 group-hover:scale-110 transition-transform`}
      >
        <Icon className="text-3xl" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">{description}</p>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 fontPoppinsRegular">
            Quality You Can Trust
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            We combine innovation, premium materials, and exceptional customer
            service to deliver paint solutions that stand the test of time.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <WhyChooseCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}