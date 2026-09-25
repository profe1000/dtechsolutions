export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  offerings: ServiceOffering[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "consulting-training",
    title: "Consulting & Training Services",
    tagline: "Build expertise in the platforms that power your business.",
    summary:
      "Expert consulting and hands-on training that equips your team to design, run, and optimize modern database and cloud platforms.",
    offerings: [
      {
        id: "oracle-database",
        title: "Oracle Database",
        description:
          "Oracle database consulting, administration and training covering installation, performance tuning, high availability and upgrades.",
        features: [
          "Installation & Configuration",
          "Performance Tuning",
          "High Availability & RAC",
          "Upgrades & Patching",
          "DBA Training",
        ],
      },
      {
        id: "aws-architect",
        title: "AWS Architect",
        description:
          "Design secure, scalable AWS architectures and prepare your engineers for AWS Solutions Architect certification.",
        features: [
          "Solution Architecture Design",
          "Well-Architected Reviews",
          "Migration to AWS",
          "Certification Training",
        ],
      },
      {
        id: "cloud-management",
        title: "Cloud Management Solutions",
        description:
          "Governance, cost optimization, monitoring and operational management across your cloud environments.",
        features: [
          "Cloud Governance",
          "Cost Optimization",
          "Monitoring & Alerting",
          "Multi-Cloud Management",
        ],
      },
      {
        id: "azure",
        title: "Azure",
        description:
          "Microsoft Azure adoption, migration and administration, backed by practical training for your IT teams.",
        features: [
          "Azure Migration",
          "Azure Administration",
          "Identity & Access Management",
          "Azure Training",
        ],
      },
    ],
  },
  {
    id: "financial-business",
    title: "Financial Business",
    tagline: "Secure, compliant technology for financial institutions.",
    summary:
      "Technology solutions built for financial institutions, from secure cloud platforms to core banking applications and insight-driven analytics.",
    offerings: [
      {
        id: "cloud-services",
        title: "Cloud Services",
        description:
          "Secure, compliant cloud hosting and migration services tailored to the regulatory needs of the financial sector.",
        features: [
          "Secure Cloud Hosting",
          "Regulatory Compliance",
          "Cloud Migration",
          "24/7 Monitoring",
        ],
      },
      {
        id: "banking-applications",
        title: "Banking Application Solutions",
        description:
          "Implementation, integration and support of banking applications that keep critical financial services running smoothly.",
        features: [
          "Core Banking Implementation",
          "System Integration",
          "Application Support",
          "Upgrades & Maintenance",
        ],
      },
      {
        id: "data-analytics",
        title: "Data Analytics",
        description:
          "Dashboards, reporting and predictive analytics that turn financial data into actionable business insight.",
        features: [
          "Business Intelligence",
          "Interactive Dashboards",
          "Predictive Analytics",
          "Regulatory Reporting",
        ],
      },
    ],
  },
  {
    id: "infrastructure-business",
    title: "Infrastructure Business",
    tagline: "Keep your systems available, protected and performing.",
    summary:
      "Reliable, resilient infrastructure services that keep your systems available, your data protected and your databases performing.",
    offerings: [
      {
        id: "datacentre-operation",
        title: "Datacentre Operation",
        description:
          "End-to-end datacentre operations including server and storage administration, monitoring and maintenance.",
        features: [
          "Server & Storage Administration",
          "Network Management",
          "Infrastructure Monitoring",
          "Routine Maintenance",
        ],
      },
      {
        id: "backup-recovery",
        title: "Backup and Recovery",
        description:
          "Automated backup, disaster recovery planning and regular restore testing to safeguard business continuity.",
        features: [
          "Automated Backups",
          "Disaster Recovery Planning",
          "Restore Testing",
          "Ransomware Protection",
        ],
      },
      {
        id: "database-management",
        title: "Database Management",
        description:
          "Proactive database administration, security, performance optimization and migration services.",
        features: [
          "Database Administration",
          "Security & Access Control",
          "Performance Optimization",
          "Data Migration",
        ],
      },
    ],
  },
  {
    id: "services-business",
    title: "Services Business",
    tagline: "Hardware, repairs and advice for everyday technology needs.",
    summary:
      "Everyday technology needs covered, from quality hardware to dependable repairs and expert advice.",
    offerings: [
      {
        id: "laptops-desktops",
        title: "Laptops & Desktops Sales",
        description:
          "Quality laptops and desktops from trusted brands, configured and ready for business use.",
        features: [
          "Business Laptops",
          "Desktops & Workstations",
          "Setup & Configuration",
          "Warranty Support",
        ],
      },
      {
        id: "system-repairs",
        title: "System Repairs",
        description:
          "Fast diagnosis and repair of hardware and software issues to get your systems back up and running.",
        features: [
          "Hardware Diagnostics & Repair",
          "OS & Software Troubleshooting",
          "Virus & Malware Removal",
          "Upgrades",
        ],
      },
      {
        id: "consulting",
        title: "Consulting",
        description:
          "Practical IT advice to help you choose, deploy and get the most value from your technology investments.",
        features: [
          "Technology Assessments",
          "IT Procurement Advice",
          "Deployment Planning",
          "Ongoing Advisory",
        ],
      },
    ],
  },
];

export const getServiceCategory = (id?: string) =>
  serviceCategories.find((category) => category.id === id);
