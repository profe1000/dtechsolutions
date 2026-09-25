import { serviceCategories } from "./serviceCategories";

export interface NavLinkItem {
  label: string;
  to: string;
}

export interface NavGroup {
  label: string;
  to: string;
  items: NavLinkItem[];
}

export interface NavItem {
  label: string;
  to: string;
  // Simple dropdown (About, Policy)
  items?: NavLinkItem[];
  // Mega menu with grouped columns (Our Services)
  groups?: NavGroup[];
}

export const navItems: NavItem[] = [
  { label: "HOME", to: "/home" },
  {
    label: "ABOUT US",
    to: "/about",
    items: [
      { label: "About Data Design Tech Solutions", to: "/about#about-ddts" },
      { label: "Business Philosophy", to: "/about#business-philosophy" },
    ],
  },
  {
    label: "POLICY",
    to: "/policy",
    items: [
      { label: "Policy Statement Overview", to: "/policy#overview" },
      { label: "IT Training Policy", to: "/policy#it-training" },
      { label: "Business Automation Policy", to: "/policy#business-automation" },
      { label: "Infrastructure Services Policy", to: "/policy#infrastructure-services" },
      { label: "IT Consulting Policy", to: "/policy#it-consulting" },
      {
        label: "Information Security, Quality and Compliance",
        to: "/policy#security-quality-compliance",
      },
      { label: "Governance and Review", to: "/policy#governance-review" },
    ],
  },
  {
    label: "OUR SERVICES",
    to: "/our-services",
    groups: serviceCategories.map((category) => ({
      label: category.title,
      to: `/our-services/${category.id}`,
      items: category.offerings.map((offering) => ({
        label: offering.title,
        to: `/our-services/${category.id}#${offering.id}`,
      })),
    })),
  },
  { label: "CONTACT", to: "/contact" },
];
