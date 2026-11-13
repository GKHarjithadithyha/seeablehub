import {
  Building2,
  BriefcaseBusiness,
  Factory,
  GraduationCap,
  HeartPulse,
  Rocket,
  Store,
  Utensils,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  description: string;
  solutions: string[];
  icon: LucideIcon;
};

export const industries: Industry[] = [
  {
    slug: "retail-e-commerce",
    name: "Retail & E-commerce",
    icon: Store,
    description:
      "Create better shopping experiences, streamline orders and bring your entire retail operation together.",
    solutions: [
      "E-commerce platforms",
      "Inventory management",
      "Retail management systems",
      "Customer relationship management",
      "Order and delivery management",
      "Business analytics",
    ],
  },
  {
    slug: "healthcare-wellness",
    name: "Healthcare & Wellness",
    icon: HeartPulse,
    description: "Make healthcare operations more connected, accessible and efficient.",
    solutions: [
      "Hospital management systems",
      "Clinic management software",
      "Appointment management",
      "Patient portals",
      "Healthcare web and mobile applications",
      "Wellness platforms",
    ],
  },
  {
    slug: "education-learning",
    name: "Education & Learning",
    icon: GraduationCap,
    description: "Build smarter learning experiences and simplify academic administration.",
    solutions: [
      "School and college management systems",
      "Learning management systems",
      "Student portals",
      "Online examination platforms",
      "Admission management",
      "Education mobile applications",
    ],
  },
  {
    slug: "real-estate-construction",
    name: "Real Estate & Construction",
    icon: Building2,
    description: "Bring projects, people and processes together through connected digital systems.",
    solutions: [
      "Construction management systems",
      "Real estate CRM",
      "Property management platforms",
      "Cost estimation software",
      "Project tracking systems",
      "Digital property platforms",
    ],
  },
  {
    slug: "hospitality-restaurants",
    name: "Hospitality & Restaurants",
    icon: Utensils,
    description:
      "Create memorable customer experiences while making daily operations easier to manage.",
    solutions: [
      "Restaurant management systems",
      "Digital menu platforms",
      "Online ordering",
      "Reservation management",
      "Restaurant CRM",
      "Hospitality websites",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: BriefcaseBusiness,
    description:
      "Give your team better tools to manage clients, projects and everyday business operations.",
    solutions: [
      "Customer relationship management",
      "Appointment booking platforms",
      "Business management systems",
      "Client portals",
      "Workflow automation",
      "Professional business websites",
    ],
  },
  {
    slug: "startups-technology",
    name: "Startups & Technology",
    icon: Rocket,
    description: "Turn ambitious ideas into scalable digital products.",
    solutions: [
      "MVP development",
      "SaaS platforms",
      "Web applications",
      "Mobile applications",
      "AI-powered applications",
      "API and system integrations",
      "Custom software development",
    ],
  },
  {
    slug: "manufacturing-industry",
    name: "Manufacturing & Industry",
    icon: Factory,
    description:
      "Connect your operations, improve visibility and make business processes more efficient.",
    solutions: [
      "Manufacturing management systems",
      "Inventory and warehouse management",
      "Production tracking",
      "Supply chain management",
      "Quality management systems",
      "Industrial dashboards",
      "Custom ERP solutions",
    ],
  },
];

export const industryBenefits = [
  {
    title: "Industry Understanding",
    description:
      "We consider your business model, workflows and operational challenges before choosing the right technology.",
  },
  {
    title: "Purposeful Development",
    description:
      "Every feature is designed to solve a real problem and contribute to a business objective.",
  },
  {
    title: "Connected Experiences",
    description:
      "We build systems that connect your customers, teams, data and business processes.",
  },
  {
    title: "Built to Grow",
    description:
      "Our solutions are designed with flexibility and scalability in mind, so your technology can evolve with your business.",
  },
];
