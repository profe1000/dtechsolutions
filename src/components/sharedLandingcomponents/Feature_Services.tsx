import { services } from "../../utils/services";
import ServiceCard from "./Feature_Service_card";


const MyServices = () => {
    return (
        <section id="services-section" className="py-24 bg-gray-50 scroll-mt-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16">

                    <h2 className="text-5xl font-bold text-[#08134D]">
                        Our Services
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-2xl">
                        We provide enterprise IT services designed to protect,
                        optimize and transform your business.
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                    {(services || []).map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default MyServices;