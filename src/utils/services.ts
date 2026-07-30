
import { Service } from "./service.type";
import {
    DataManagementIcon,
    BackupIcon,
    SoftwareSupportIcon,
    ConsultingIcon,
    AnalyticsIcon,
} from "./serviceIcon";

export const services: Service[] = [
    {
        id: "data-management",
        title: "Data Management",
        tag: "CORE SERVICE",
        icon: DataManagementIcon,
        color: "bg-blue-100 text-blue-700",
        image: "/images/services/data-management.jpg",

        description:
            "Secure, scalable, and compliant data management solutions tailored to your needs.",

        longDescription:
            "Our Data Management services help businesses organize, secure, and govern their data assets. We design scalable architectures, implement best practices for data governance, and ensure compliance with industry standards while enabling seamless access to business-critical information.",

        benefits: [
            "Database Design & Administration",
            "Data Governance",
            "Cloud Data Storage",
            "Data Security & Compliance",
            "Performance Optimization",
            "Data Migration",
        ],
    },

    {
        id: "backup-recovery",
        title: "Backup & Recovery",
        tag: "DATA PROTECTION",
        icon: BackupIcon,
        color: "bg-red-100 text-red-600",
        image: "/images/services/backup-recovery.jpg",

        description:
            "Robust data protection and disaster recovery strategies to safeguard your business.",

        longDescription:
            "Protect your business from unexpected outages, cyberattacks, and accidental data loss with our enterprise-grade backup and disaster recovery solutions. We ensure your critical systems remain available and recoverable whenever disaster strikes.",

        benefits: [
            "Automated Backups",
            "Disaster Recovery Planning",
            "Cloud Backup Solutions",
            "Business Continuity",
            "Data Restoration",
            "Ransomware Protection",
        ],
    },

    {
        id: "application-support",
        title: "Software Application Support",
        tag: "APPLICATION SERVICES",
        icon: SoftwareSupportIcon,
        color: "bg-green-100 text-green-600",
        image: "/images/services/application-support.jpg",

        description:
            "Expert support and maintenance for your critical software applications.",

        longDescription:
            "Our experienced support team ensures your software applications remain secure, stable, and optimized. We provide proactive monitoring, troubleshooting, upgrades, and maintenance to minimize downtime and maximize productivity.",

        benefits: [
            "Application Maintenance",
            "Bug Fixes & Troubleshooting",
            "Performance Monitoring",
            "Software Upgrades",
            "Security Updates",
            "24/7 Technical Support",
        ],
    },

    {
        id: "consulting-training",
        title: "Consulting & Trainings",
        tag: "PROFESSIONAL SERVICES",
        icon: ConsultingIcon,
        color: "bg-purple-100 text-purple-700",
        image: "/images/services/consulting-training.jpg",

        description:
            "Personalized consulting and training services to upskill your team.",

        longDescription:
            "Empower your workforce through tailored IT consulting and professional training programs. We help organizations adopt modern technologies, improve operational efficiency, and equip employees with practical, industry-relevant skills.",

        benefits: [
            "Technology Consulting",
            "Corporate Training",
            "Digital Transformation",
            "Technical Workshops",
            "IT Strategy",
            "Professional Development",
        ],
    },

    {
        id: "data-analytics",
        title: "Data Analytics",
        tag: "BUSINESS INTELLIGENCE",
        icon: AnalyticsIcon,
        color: "bg-yellow-100 text-yellow-700",
        image: "/images/services/data-analytics.jpg",

        description:
            "Unlock insights and drive business growth with our advanced analytics solutions.",

        longDescription:
            "Transform raw business data into meaningful insights with modern analytics, dashboards, and reporting solutions. We help organizations make informed decisions, identify opportunities, and improve overall business performance through data-driven strategies.",

        benefits: [
            "Business Intelligence",
            "Interactive Dashboards",
            "Data Visualization",
            "Predictive Analytics",
            "Performance Reporting",
            "Decision Support",
        ],
    },
];