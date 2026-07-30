import React from "react";
import { Collapse } from "antd";
import {
  QuestionCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "../sharedLandingcss/SharedComponent.css";

const { Panel } = Collapse;

const faqs = [
  {
    question: "What is CFI Glow Paint?",
    answer:
      "CFI Glow Paint provides premium decorative paints, protective coatings, and professional colour solutions for residential, commercial, and industrial projects.",
  },
  {
    question: "How do I choose the right paint?",
    answer:
      "The right paint depends on the surface, location, and desired finish. Our experts can help you select the perfect product and colour combination for your project.",
  },
  {
    question: "Do you have paints for different surfaces?",
    answer:
      "Yes. We manufacture paints suitable for interior and exterior walls, concrete, wood, metal, ceilings, and other building surfaces.",
  },
  {
    question: "Are your paint products safe to use?",
    answer:
      "Yes. Our paints are produced under strict quality standards. Always follow the application and safety instructions provided on the product label.",
  },
  {
    question: "Can I get colour advice?",
    answer:
      "Absolutely. Our team can recommend colours, finishes, and paint systems that best complement your space and design preferences.",
  },
  {
    question: "Do you offer quotes for large projects?",
    answer:
      "Yes. We provide quotations for residential developments, commercial buildings, institutions, and industrial projects.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us through our Contact page, by phone, WhatsApp, or email, and our customer service team will be happy to assist you.",
  },
];

export default function FaqComp() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-amber-50">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 bg-blue-950 text-white px-5 py-2 rounded-full font-semibold uppercase tracking-widest">
            <QuestionCircleOutlined />
            FAQs
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-blue-950 fontKanitRegular">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Find answers to common questions about our paint products,
            colour selection, project support, and customer services.
          </p>

        </div>

        {/* FAQ Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-3">

          <Collapse
            accordion
            bordered={false}
            expandIcon={({ isActive }) => (
              <PlusOutlined
                rotate={isActive ? 45 : 0}
                style={{
                  color: "#172554",
                  fontSize: "18px",
                  transition: "all .3s",
                }}
              />
            )}
          >
            {faqs.map((faq, index) => (
              <Panel
                key={index}
                header={
                  <span className="text-lg md:text-xl font-semibold text-blue-950">
                    {faq.question}
                  </span>
                }
              >
                <p className="text-gray-600 leading-8 text-lg">
                  {faq.answer}
                </p>
              </Panel>
            ))}
          </Collapse>

        </div>

      </div>
    </section>
  );
}