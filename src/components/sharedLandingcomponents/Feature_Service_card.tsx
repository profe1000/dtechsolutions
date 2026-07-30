import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Service } from "../../utils/service.type";
interface Props {
  service: Service;
}

const ServiceCard = ({ service }: Props) => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-xl transition">

      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${service.color}`}
      >
        {service.icon}
      </div>

      <span className="inline-block mt-6 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold">
        {service.tag}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-[#08134D]">
        {service.title}
      </h3>

      <p className="mt-4 text-gray-600">
        {service.description}
      </p>

      <div className="border-t mt-8 pt-6">

        <Link
          to={`/services/${service.id}`}
          className="text-blue-600 font-semibold flex items-center gap-2"
        >
          Learn More

          <ArrowRightOutlined />

        </Link>

      </div>
    </div>
  );
};

export default ServiceCard;