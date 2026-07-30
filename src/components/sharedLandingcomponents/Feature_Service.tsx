import React from "react";
import "../sharedLandingcss/SharedComponent.css";
import {
  CalendarOutlined,
  BellOutlined,
  ShoppingOutlined,
  CreditCardOutlined,
  UserOutlined,
  TeamOutlined,
  BarChartOutlined,
  MailOutlined,
} from "@ant-design/icons";

const FeatureService = () => {
  const features = [
    {
      icon: `${process.env.PUBLIC_URL}/images/services/home-3-icon-03.png`,
      header: "EXPERT COLOUR GUIDANCE",
      text: "Choose colours and finishes that complement your space, lighting, and style.",
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/services/Home-3-icon.png`,
      header: "PAINT FOR EVERY SURFACE",
      text: "Find reliable solutions for interior walls, exterior surfaces, metal, wood, and more.",
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/services/home-3-icon-02.png`,
      header: "QUALITY COATINGS",
      text: "Explore carefully selected paints and protective coatings that deliver a lasting finish.",
    },
  ];

  return (
    <div className="py-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-white"
          >
            <div className="mb-4">
              <img
                src={feature.icon}
                alt={`${feature.header} Icon`}
                className="w-auto h-20"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 fontKanitRegular">
              {feature.header}
            </h3>
            <p className="text-gray-900 font-medium fontAlbertSansRegular">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureService;

interface Feature {
  title: string;
  text: string;
  icon: React.ReactNode;
  colorClass: string;
  bgClass: string;
}

export function FeaturesSection() {
  const features: Feature[] = [
    {
      title: "Online Booking",
      text: "Let clients book appointments 24/7 with ease.",
      icon: <CalendarOutlined />,
      colorClass: "text-green-600",
      bgClass: "bg-green-100",
    },
    {
      title: "Automatic Reminders",
      text: "Reduce no-shows with SMS & WhatsApp reminders.",
      icon: <BellOutlined />,
      colorClass: "text-purple-600",
      bgClass: "bg-purple-100",
    },
    {
      title: "Inventory Management",
      text: "Track products, supplies, and low-stock alerts.",
      icon: <ShoppingOutlined />,
      colorClass: "text-blue-600",
      bgClass: "bg-blue-100",
    },
    {
      title: "Payments & Invoicing",
      text: "Accept online payments and send invoices instantly.",
      icon: <CreditCardOutlined />,
      colorClass: "text-amber-600",
      bgClass: "bg-amber-100",
    },
    {
      title: "Client CRM",
      text: "Store client history, preferences, birthdays, and notes.",
      icon: <UserOutlined />,
      colorClass: "text-pink-600",
      bgClass: "bg-pink-100",
    },
    {
      title: "Staff Management",
      text: "Manage staff schedules, roles, and commissions.",
      icon: <TeamOutlined />,
      colorClass: "text-red-600",
      bgClass: "bg-red-100",
    },
    {
      title: "Sales Reports",
      text: "Track revenue, trends, and performance analytics.",
      icon: <BarChartOutlined />,
      colorClass: "text-orange-600",
      bgClass: "bg-orange-100",
    },
    {
      title: "Marketing Tools",
      text: "Send promotions, follow-ups, newsletters, and deals.",
      icon: <MailOutlined />,
      colorClass: "text-teal-600",
      bgClass: "bg-teal-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6 fontKanitRegular">
          Complete Paint Solutions for Every Project
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Quality paints, trusted advice, and dependable finishes for homes and businesses.
        </p>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl backdrop-blur-sm border border-border/50 
                hover:border-border transition-smooth cursor-pointer overflow-hidden
                shadow-feature hover:shadow-feature-hover animate-fade-in ${feature.bgClass}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5
                    ${feature.colorClass} text-3xl group-hover:scale-110 transition-smooth`}
                >
                  {feature.icon}
                </div>

                <h3 className={`text-xl font-bold mb-3 ${feature.colorClass}`}>
                  {feature.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
