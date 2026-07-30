import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SendOutlined,
  UserOutlined,
  MessageOutlined,
  FileTextOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const ContactComp = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setLoading(false);

        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
        alert("Unable to send message.");
      });
  };

  const contactCards = [
    {
      icon: <PhoneOutlined />,
      title: "Call Us",
      value: "+234 XXX XXX XXXX",
    },
    {
      icon: <MailOutlined />,
      title: "Email Us",
      value: "info@datadesigntech.com",
    },
    {
      icon: <EnvironmentOutlined />,
      title: "Visit Us",
      value: "Lagos, Nigeria",
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Working Hours",
      value: "Mon - Fri | 8:00AM - 5:00PM",
    },
  ];

  return (
    <section className="bg-slate-50">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
            CONTACT US
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-8">
            Let's Start a Conversation
          </h2>

          <p className="text-blue-100 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Whether you need IT consulting, enterprise software support,
            data analytics, or digital transformation services, our team
            is ready to help.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12">

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {contactCards.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-2xl mb-5">
                {item.icon}
              </div>

              <h4 className="font-bold text-slate-900 text-lg">
                {item.title}
              </h4>

              <p className="text-gray-600 mt-2">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* Main Section */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Form */}

          <div className="bg-white rounded-[32px] shadow-2xl p-10">

            <h3 className="text-3xl font-bold text-slate-900">
              Send us a Message
            </h3>

            <p className="text-gray-600 mt-3 mb-10">
              Complete the form below and one of our consultants will
              contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="relative">

                <UserOutlined className="absolute left-5 top-5 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-slate-100 rounded-xl pl-14 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
                />

              </div>

              <div className="relative">

                <MailOutlined className="absolute left-5 top-5 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-slate-100 rounded-xl pl-14 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
                />

              </div>

              <div className="relative">

                <FileTextOutlined className="absolute left-5 top-5 text-gray-400" />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-100 rounded-xl pl-14 pr-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
                />

              </div>

              <div className="relative">

                <MessageOutlined className="absolute left-5 top-5 text-gray-400" />

                <textarea
                  rows={6}
                  name="message"
                  placeholder="Tell us about your project..."
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-slate-100 rounded-xl pl-14 pr-5 py-4 resize-none outline-none focus:ring-2 focus:ring-blue-600"
                />

              </div>

              <button
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3 transition"
              >
                <SendOutlined />

                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

          {/* Image */}

          <div className="relative">

            <img
              src={`${process.env.PUBLIC_URL}/images/home/contact.jpg`}
              alt="Office"
              className="rounded-[32px] h-full object-cover shadow-2xl"
            />

            <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-xl p-8 flex gap-5">

              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <CustomerServiceOutlined className="text-3xl text-blue-700" />
              </div>

              <div>

                <h4 className="font-bold text-xl">
                  Need Immediate Help?
                </h4>

                <p className="text-gray-500 mt-2">
                  Our consultants are available to assist your business.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="bg-blue-950 rounded-[40px] text-center py-20 px-8 mt-24">

          <h2 className="text-5xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>

          <p className="text-blue-100 text-lg mt-6 max-w-2xl mx-auto">
            Let's discuss how Data Design Tech Solutions can help your
            organization improve efficiency, security, and growth.
          </p>

          <button className="mt-10 bg-white text-blue-900 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
            Schedule a Consultation
          </button>

        </div>

        {/* Map */}

        <div className="mt-24 mb-24 overflow-hidden rounded-[40px] shadow-2xl">

          <iframe
            title="Office Location"
            src="https://maps.google.com/maps?q=Delta%20State,%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="550"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />

        </div>

      </div>

    </section>
  );
};

export default ContactComp;