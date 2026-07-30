import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SendOutlined,
} from "@ant-design/icons";

const ContactComp = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
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

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block bg-blue-950 text-white px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-blue-950 fontKanitRegular">
            We'd Love To Hear From You
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you need product information, colour advice, or a quotation,
            our team is ready to assist you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-blue-950 rounded-3xl p-10 text-white shadow-2xl">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center">
                  <PhoneOutlined className="text-blue-950 text-2xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Phone
                  </h4>

                  <p className="text-blue-100">
                    +234 907 565 7273
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center">
                  <MailOutlined className="text-blue-950 text-2xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Email
                  </h4>

                  <p className="text-blue-100">
                    info@cfiglowpaint.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center">
                  <EnvironmentOutlined className="text-blue-950 text-2xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Address
                  </h4>

                  <p className="text-blue-100">
                    H15A Road 35, Osubi, Delta State,
                    <br />
                    Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center">
                  <ClockCircleOutlined className="text-blue-950 text-2xl" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Business Hours
                  </h4>

                  <p className="text-blue-100">
                    Monday - Saturday
                    <br />
                    7:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl">

            <h3 className="text-3xl font-bold text-blue-950 mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-blue-950 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-blue-950 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-blue-950 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />

              <textarea
                name="message"
                placeholder="Your Message..."
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-xl border border-gray-300 px-5 py-4 resize-none focus:border-blue-950 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-950 hover:bg-blue-900 text-white py-4 rounded-xl font-semibold text-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <SendOutlined />

                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

         <div className="lg:col-span-3 mt-10">

            <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white">

              <iframe
                title="Chris-Feddek International Nigeria Limited"
                src="https://maps.google.com/maps?q=Km%203,%20Osubi%20Express%20Way,%20Beside%20Trade%20Fair,%20Osubi,%20Okpe,%20Delta%20State,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="550"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />

            </div>

          </div>
      </div>
    </section>
  );
};

export default ContactComp;