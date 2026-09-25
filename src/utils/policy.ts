export interface PolicyBlock {
  heading: string;
  intro?: string;
  points?: string[];
}

export interface PolicySection {
  id: string;
  number?: string;
  title: string;
  statement?: string;
  blocks: PolicyBlock[];
}

export const policyOverview = {
  intro:
    "Data Design Tech Solutions (DDTS) is a technology solutions and professional services company committed to delivering innovative, secure, and business-driven IT solutions that help organizations improve productivity, optimize operations, strengthen infrastructure, and accelerate digital transformation.",
  offeringsIntro: "Our core service offerings include:",
  offerings: [
    "IT Training & Capacity Development",
    "Business Process Automation",
    "IT Infrastructure Services",
    "IT Consulting & Advisory Services",
  ],
  closing:
    "This policy manual establishes the guiding principles, standards, and responsibilities governing the delivery of these services while ensuring quality, security, compliance, and customer satisfaction.",
};

export const policySections: PolicySection[] = [
  {
    id: "it-training",
    number: "1",
    title: "IT Training Policy",
    statement:
      "Data Design Tech Solutions (DDTS) shall provide high-quality, practical, and industry-relevant training programs to develop technical competencies and support organizational growth.",
    blocks: [
      {
        heading: "Objectives",
        points: [
          "Enhance digital and technical skills.",
          "Support professional development and certification readiness.",
          "Promote technology adoption and innovation.",
          "Deliver hands-on and outcome-driven learning experiences.",
        ],
      },
      {
        heading: "Standards",
        intro: "All training programs shall:",
        points: [
          "Be delivered by qualified instructors.",
          "Follow approved training curricula.",
          "Include practical exercises and assessments.",
          "Maintain participant attendance and evaluation records.",
          "Be periodically reviewed to reflect current technology trends and industry best practices.",
        ],
      },
    ],
  },
  {
    id: "business-automation",
    number: "2",
    title: "Business Automation Policy",
    statement:
      "Data Design Tech Solutions shall design and implement automation solutions that improve efficiency, reduce manual processes, and enhance business performance.",
    blocks: [
      {
        heading: "Objectives",
        points: [
          "Streamline business operations.",
          "Increase productivity and accuracy.",
          "Reduce operational costs and risks.",
          "Improve process visibility and decision-making.",
        ],
      },
      {
        heading: "Standards",
        intro: "All automation projects shall:",
        points: [
          "Align with client business objectives.",
          "Follow approved project management and change control processes.",
          "Undergo testing and user acceptance before deployment.",
          "Comply with security, privacy, and regulatory requirements.",
          "Be properly documented and supported.",
        ],
      },
    ],
  },
  {
    id: "infrastructure-services",
    number: "3",
    title: "Infrastructure Services Policy",
    statement:
      "Data Design Tech Solutions will provide secure, reliable, scalable, and resilient IT infrastructure services that support continuous business operations.",
    blocks: [
      {
        heading: "Scope",
        intro: "Infrastructure services include:",
        points: [
          "Network Design and Management",
          "Server and Storage Administration",
          "Cloud Services and Migration",
          "Endpoint Management",
          "Cybersecurity Solutions",
          "Backup and Disaster Recovery",
          "Infrastructure Monitoring and Support",
        ],
      },
      {
        heading: "Standards",
        intro: "The company shall:",
        points: [
          "Maintain high service availability and performance.",
          "Implement appropriate cybersecurity controls.",
          "Conduct routine maintenance and patch management.",
          "Ensure regular backup and recovery testing.",
          "Maintain an accurate inventory of technology assets.",
          "Support business continuity and disaster recovery preparedness.",
        ],
      },
    ],
  },
  {
    id: "it-consulting",
    number: "4",
    title: "IT Consulting Policy",
    statement:
      "Data Design Tech Solutions shall provide strategic IT consulting services that enable clients to maximize technology investments and achieve business objectives.",
    blocks: [
      {
        heading: "Service Areas",
        points: [
          "Digital Transformation",
          "IT Strategy Development",
          "Cloud Advisory Services",
          "Cybersecurity Consulting",
          "IT Governance and Compliance",
          "Technology Assessments",
          "Project and Program Management",
        ],
      },
      {
        heading: "Standards",
        intro: "Consulting engagements shall:",
        points: [
          "Be professional, objective, and client focused.",
          "Include assessment, planning, recommendation, and review phases.",
          "Deliver practical and measurable outcomes.",
          "Maintain confidentiality and ethical business practices.",
          "Comply with applicable regulations and industry standards.",
        ],
      },
    ],
  },
  {
    id: "security-quality-compliance",
    number: "5",
    title: "Information Security, Quality and Compliance",
    blocks: [
      {
        heading: "Information Security",
        intro:
          "Data Design Tech Solutions is committed to protecting the confidentiality, integrity, and availability of information assets through:",
        points: [
          "Access control measures",
          "Multi-factor authentication",
          "Data protection and encryption",
          "Security monitoring and incident management",
          "Employee security awareness programs",
        ],
      },
      {
        heading: "Quality Assurance",
        intro: "The company shall continuously improve service delivery by:",
        points: [
          "Monitoring customer satisfaction",
          "Measuring service performance",
          "Conducting periodic reviews and audits",
          "Implementing corrective and preventive actions",
        ],
      },
      {
        heading: "Compliance and Ethics",
        intro: "All employees, contractors, and partners shall:",
        points: [
          "Act with honesty, integrity, and professionalism.",
          "Protect confidential information.",
          "Comply with applicable laws, regulations, and contractual obligations.",
          "Avoid conflicts of interest and unethical conduct.",
        ],
      },
    ],
  },
  {
    id: "governance-review",
    title: "Governance and Review",
    blocks: [
      {
        heading: "Applicability",
        intro:
          "This policy applies to all employees, contractors, consultants, and business partners of Data Design Tech Solutions.",
      },
      {
        heading: "Responsibility",
        intro:
          "The Executive Management of Data Design Tech Solutions is responsible for the implementation, review, and enforcement of this policy. The policy shall be reviewed annually or as business, regulatory, or operational requirements dictate.",
      },
    ],
  },
];
