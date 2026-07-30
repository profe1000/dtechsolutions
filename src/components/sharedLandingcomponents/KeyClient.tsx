import React from "react";
import { TeamOutlined } from "@ant-design/icons";

const clients = [
  {
    name: "EFETURI SCHNAPP ESE",
    company: "AVRABOR",
  },
  {
    name: "FREDRICK ODIETE",
    company: "FRED ODIETE",
  },
  {
    name: "CHIZEE FERDINAND EZINNE",
    company: "CHIZEC (OSUBI)",
  },
  {
    name: "ASSUMPTA OBIAGERI OYILIAGU",
    company: "MADAM KELVINSON",
  },
  {
    name: "JAYSUS ENTERPRISE",
    company: "JAYSUS",
  },
  {
    name: "VIVIAN AGHOGHO",
    company: "AG VENTURES",
  },
  {
    name: "AKPEVWE EMEGERE",
    company: "MDM AUSTINE (UGH)",
  },
  {
    name: "CHIDIMMA OBI",
    company: "MRS IZU",
  },
  {
    name: "NEW YEAR PHILIP",
    company: "NEW YEAR (OLEH)",
  },
  {
    name: "MULGBUNU MORRIS",
    company: "MULGBUNU",
  },
];

function ClientCard({ name, company }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:-translate-y-2">

      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-5">
        <TeamOutlined className="text-2xl text-blue-950" />
      </div>

      <h3 className="text-lg font-bold text-blue-950 leading-7">
        {name}
      </h3>

      <p className="text-amber-600 font-semibold mt-3">
        {company}
      </p>

    </div>
  );
}

export default function KeyClientsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-100 text-amber-700 px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
            Our Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-5 fontPoppinsRegular">
            Key Clients & Projects
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to have partnered with individuals, businesses,
            contractors, and organisations across Nigeria, delivering premium
            paint solutions for residential, commercial, and industrial
            projects.
          </p>
        </div>

        {/* Client Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {clients.map((client) => (
            <ClientCard
              key={client.name}
              {...client}
            />
          ))}
        </div>

      </div>
    </section>
  );
}