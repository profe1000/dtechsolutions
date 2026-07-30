import React from "react";
import {
  CheckCircleOutlined,
  StarOutlined,
  AppstoreAddOutlined,
  SafetyCertificateOutlined,
  UsergroupAddOutlined,
  WalletOutlined,
  BranchesOutlined,
  GiftOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import "../sharedLandingcss/SharedComponent.css";

const FeatureServiceExtra = () => {
  const features = [
    {
      icon: <CheckCircleOutlined className="text-3xl text-blue-500" />,
      header: "EXPERT COLOUR GUIDANCE",
      text: "Get practical guidance for choosing colours and finishes that suit your space.",
    },
    {
      icon: <StarOutlined className="text-3xl text-yellow-500" />,
      header: "PAINT FOR EVERY SURFACE",
      text: "Choose dependable solutions for walls, ceilings, wood, metal, and exterior surfaces.",
    },
    {
      icon: <AppstoreAddOutlined className="text-3xl text-green-500" />,
      header: "QUALITY PRODUCTS",
      text: "Explore premium paints and coatings selected for excellent coverage and durability.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-3xl text-red-500" />,
      header: "CERTIFIED EXPERTS",
      text: "Our team consists of certified experts who provide top-notch advice and services.",
    },
    {
      icon: <UsergroupAddOutlined className="text-3xl text-purple-500" />,
      header: "COMMUNITY SUPPORT",
      text: "Get helpful project advice and inspiration from a team that understands colour.",
    },
    {
      icon: <WalletOutlined className="text-3xl text-teal-500" />,
      header: "AFFORDABLE PLANS",
      text: "Enjoy high-quality services and products at affordable prices.",
    },
    {
      icon: <BranchesOutlined className="text-3xl text-orange-500" />,
      header: "EXPANSIVE RANGE",
      text: "Explore a versatile range of paints, primers, and finishes for every project.",
    },
    {
      icon: <GiftOutlined className="text-3xl text-pink-500" />,
      header: "EXCLUSIVE OFFERS",
      text: "Discover special offers on selected paints, coatings, and project essentials.",
    },
    {
      icon: <MobileOutlined className="text-3xl text-blue-600" />,
      header: "PROJECT SUPPORT",
      text: "Get the information and support you need from colour selection to final application.",
    },
  ];

  return (
    <div className="py-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 bg-white border rounded-lg shadow-lg"
          >
            <div className="mb-4">{feature.icon}</div>
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

export default FeatureServiceExtra;
