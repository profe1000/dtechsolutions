import { CheckCircleFilled } from "@ant-design/icons";
import { Service } from "../../utils/service.type";


interface Props {
    service: Service;
}

const ServiceDetails = ({ service }: Props) => {
    return (
        <section className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-3xl"
                    />

                    <div>

                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                            {service.tag}

                        </span>

                        <h1 className="text-5xl font-bold mt-6 text-[#08134D]">

                            {service.title}

                        </h1>

                        <p className="mt-8 text-lg text-gray-600 leading-8">

                            {service.longDescription}

                        </p>

                        <div className="space-y-5 mt-10">

                            {service.benefits.map((benefit) => (

                                <div
                                    key={benefit}
                                    className="flex gap-3"
                                >

                                    <CheckCircleFilled className="text-blue-600 mt-1" />

                                    <span>{benefit}</span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ServiceDetails;