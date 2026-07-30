import { useState } from "react";
import {
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    AppstoreOutlined,
    DollarOutlined,
    CalendarOutlined,
    FileTextOutlined,
    CheckCircleFilled,
    SendOutlined,
} from "@ant-design/icons";

export default function RequestQuote() {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        projectType: "",
        product: "",
        quantity: "",
        location: "",
        budget: "",
        preferredDate: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            alert("Quote request submitted successfully.");
        }, 1500);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-amber-50">

            <div className="max-w-7xl mx-auto px-5">

                <div className="text-center mb-16">

                    <span className="bg-blue-950 text-white px-5 py-2 rounded-full uppercase tracking-widest">
                        Request a Quote
                    </span>

                    <h1 className="mt-6 text-5xl font-bold text-blue-950 fontPoppinsRegular">
                        Get Your Free Quote
                    </h1>

                    <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
                        Tell us about your project and we'll recommend the right paint
                        products and provide a competitive quotation.
                    </p>

                </div>

                <div className="grid lg:grid-cols-5 gap-10">

                    {/* Left */}

                    <div className="lg:col-span-2 bg-blue-950 rounded-3xl p-10 text-white">

                        <h2 className="text-3xl font-bold">
                            Why Request a Quote?
                        </h2>

                        <div className="space-y-8 mt-10">

                            {[
                                "Competitive Pricing",
                                "Professional Product Recommendation",
                                "Fast Response Time",
                                "Bulk Order Discounts",
                                "Nationwide Delivery",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex gap-4 items-center"
                                >
                                    <CheckCircleFilled className="text-green-400 text-2xl" />

                                    <span className="text-lg">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <div className="mt-16 p-6 bg-white/10 rounded-2xl">

                            <h3 className="text-2xl font-bold">
                                Need Immediate Assistance?
                            </h3>

                            <p className="mt-4 text-blue-100">
                                Call our sales team for product recommendations and bulk pricing.
                            </p>

                            <button className="mt-6 bg-amber-400 text-blue-950 px-6 py-3 rounded-xl font-semibold hover:bg-amber-500 transition">
                                Call Sales
                            </button>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-10">

                        <form
                            onSubmit={handleSubmit}
                            className="grid md:grid-cols-2 gap-6"
                        >

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Full Name *
                                </label>

                                <input
                                    type="text"
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:border-[#172554]"
                                    style={{
                                        transition: "all .3s",
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Company
                                </label>

                                <input
                                    type="text"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder="Company Name"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:border-[#172554]"
                                    style={{
                                        transition: "all .3s",
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Email Address *
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:border-[#172554]"
                                    style={{
                                        transition: "all .3s",
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Phone Number *
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+234..."
                                    required
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:border-[#172554]"
                                    style={{
                                        transition: "all .3s",
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Project Type
                                </label>

                                <select
                                    name="projectType"
                                    value={form.projectType}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white focus:outline-none focus:border-[#172554]"
                                >
                                    <option value="">Select Project Type</option>
                                    <option>Residential</option>
                                    <option>Commercial</option>
                                    <option>Industrial</option>
                                    <option>Government</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Product Interest
                                </label>

                                <select
                                    name="product"
                                    value={form.product}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 bg-white focus:outline-none focus:border-[#172554]"
                                >
                                    <option value="">Select Product</option>
                                    <option>Glow Paints</option>
                                    <option>Bexcoat Paints</option>
                                    <option>Not Sure Yet</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Estimated Quantity
                                </label>

                                <input
                                    type="text"
                                    name="quantity"
                                    value={form.quantity}
                                    onChange={handleChange}
                                    placeholder="e.g. 200 Litres"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:border-[#172554]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Project Location
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    value={form.location}
                                    onChange={handleChange}
                                    placeholder="Warri, Delta State"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:border-[#172554]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Estimated Budget
                                </label>

                                <input
                                    type="text"
                                    name="budget"
                                    value={form.budget}
                                    onChange={handleChange}
                                    placeholder="₦500,000"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:border-[#172554]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Preferred Delivery Date
                                </label>

                                <input
                                    type="date"
                                    name="preferredDate"
                                    value={form.preferredDate}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:border-[#172554]"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block mb-2 font-medium text-gray-700">
                                    Project Details
                                </label>

                                <textarea
                                    name="message"
                                    rows={6}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 resize-none focus:outline-none focus:border-[#172554]"
                                    style={{
                                        minHeight: "180px",
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="md:col-span-2 bg-blue-950 hover:bg-blue-900 text-white rounded-xl py-4 text-lg font-semibold transition-all"
                                style={{
                                    transition: "0.3s ease",
                                }}
                            >
                                {loading ? "Submitting..." : "Request Quote"}
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

function Input({ icon, ...props }: InputProps) {
    return (
        <div className="relative">
            {icon && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-950">
                    {icon}
                </div>
            )}

            <input
                {...props}
                className={`input ${icon ? "pl-12" : ""}`}
            />
        </div>
    );
}