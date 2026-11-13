export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  tagline: string;
  intro: string;
  capabilities: string[];
  outcomes: string[];
  icon: "code" | "layers" | "brain" | "message" | "phone" | "nfc" | "design" | "cloud";
  seoTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    shortTitle: "Websites & web apps",
    description:
      "Modern, responsive websites that communicate your brand, engage your audience and turn visits into meaningful opportunities.",
    tagline: "Websites that make your business stand out.",
    intro:
      "Your website is more than a digital address. It is where your brand communicates, connects with customers and creates opportunities. We bring thoughtful design, reliable engineering and user focused functionality together.",
    capabilities: [
      "Business & corporate websites",
      "Custom website design",
      "E-commerce platforms",
      "Landing pages",
      "Portfolio websites",
      "Custom web applications",
      "Website redesign & optimisation",
    ],
    outcomes: [
      "A clear, considered digital presence",
      "Responsive experiences across devices",
      "A foundation designed around your goals",
    ],
    icon: "code",
    seoTitle: "Website Design & Development Services | SEEABLE HUB",
    metaDescription:
      "Build a powerful online presence with SEEABLE HUB. We design and develop responsive business websites, e-commerce platforms, landing pages and custom web applications.",
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom software",
    description:
      "Purpose built software that simplifies operations, improves efficiency and fits the way your business works.",
    tagline: "Software engineered around the way your business works.",
    intro:
      "Off the shelf tools do not always meet the needs of every organisation. We turn your requirements into practical platforms, internal tools and products with room to evolve.",
    capabilities: [
      "Custom business software",
      "CRM development",
      "ERP development",
      "SaaS product development",
      "Inventory & management systems",
      "Workflow applications",
      "Enterprise software",
    ],
    outcomes: [
      "Workflows shaped around your operation",
      "Connected data and business processes",
      "Maintainable software built for change",
    ],
    icon: "layers",
    seoTitle: "Custom Software Development | SEEABLE HUB",
    metaDescription:
      "Develop custom business software, CRM and ERP systems, SaaS products and workflow tools with SEEABLE HUB.",
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortTitle: "AI & machine learning",
    description:
      "Intelligent applications and integrations that automate repetitive work, process information and support better decisions.",
    tagline: "Turn information into intelligence.",
    intro:
      "We help organisations explore practical uses for artificial intelligence and machine learning, integrating intelligent technologies into products, platforms and workflows.",
    capabilities: [
      "AI application development",
      "Machine learning solutions",
      "Generative AI integration",
      "Intelligent document processing",
      "Predictive analytics",
      "AI powered automation",
      "Custom model integration",
    ],
    outcomes: [
      "Less repetitive manual work",
      "Information that is easier to act on",
      "AI features aligned with business needs",
    ],
    icon: "brain",
    seoTitle: "AI Development Services | AI & Machine Learning – SEEABLE HUB",
    metaDescription:
      "Explore practical AI and machine learning solutions, generative AI integrations, predictive analytics and intelligent automation from SEEABLE HUB.",
  },
  {
    slug: "chatbots-voice-ai",
    title: "Chatbots & Voice AI",
    shortTitle: "Chatbots & voice AI",
    description:
      "Conversational experiences that help businesses manage enquiries, support customers and communicate more efficiently.",
    tagline: "Intelligent conversations. Better customer experiences.",
    intro:
      "From website assistants to WhatsApp automation and voice agents, we create conversational systems tailored to your business requirements and customer journey.",
    capabilities: [
      "AI chatbot development",
      "WhatsApp chatbot integration",
      "Website support bots",
      "Voice AI agents",
      "Lead generation chatbots",
      "Enquiry management",
      "Conversational AI integration",
    ],
    outcomes: [
      "More accessible customer conversations",
      "Automated handling for common enquiries",
      "Connected chat and voice experiences",
    ],
    icon: "message",
    seoTitle: "AI Chatbot & Voice AI Development Services | SEEABLE HUB",
    metaDescription:
      "Build AI chatbots, WhatsApp assistants, website support bots and voice agents tailored to your business with SEEABLE HUB.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile applications",
    description:
      "Intuitive mobile apps that bring your services, products and digital experiences closer to customers.",
    tagline: "Bring your digital experience closer to your customers.",
    intro:
      "Whether you are creating a customer facing product or an internal business tool, we focus on usability, functionality and dependable performance across mobile devices.",
    capabilities: [
      "Android application development",
      "iOS application development",
      "Cross platform apps",
      "Business mobile applications",
      "E-commerce applications",
      "API & backend integration",
      "Application maintenance",
    ],
    outcomes: [
      "Useful experiences on the go",
      "A coherent product across platforms",
      "Mobile tools connected to your systems",
    ],
    icon: "phone",
    seoTitle: "Mobile App Development Services | SEEABLE HUB",
    metaDescription:
      "Design and develop Android, iOS and cross platform mobile applications with SEEABLE HUB.",
  },
  {
    slug: "nfc-smart-integrations",
    title: "NFC & Smart Integrations",
    shortTitle: "NFC & connected experiences",
    description:
      "NFC and QR experiences that connect physical touchpoints with useful digital destinations.",
    tagline: "Connect the physical world with digital experiences.",
    intro:
      "We integrate NFC, QR and connected digital solutions to make everyday interactions more convenient, from sharing contact information to accessing menus and review pages.",
    capabilities: [
      "NFC digital business cards",
      "NFC review & feedback systems",
      "Smart digital menus",
      "QR based digital experiences",
      "NFC information systems",
      "Customer engagement solutions",
      "Custom NFC integrations",
    ],
    outcomes: [
      "A simple tap or scan to useful content",
      "Connected in person customer journeys",
      "Digital experiences for physical spaces",
    ],
    icon: "nfc",
    seoTitle: "NFC Integration Services & Smart Solutions | SEEABLE HUB",
    metaDescription:
      "Connect physical and digital customer experiences with NFC cards, review systems, smart menus and QR solutions from SEEABLE HUB.",
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    shortTitle: "UI/UX & product design",
    description:
      "Clear, accessible product experiences that make complex interactions feel intuitive and engaging.",
    tagline: "Great technology deserves great experiences.",
    intro:
      "A successful digital product needs more than functionality. We shape user interfaces and journeys that simplify interactions and help businesses deliver better products.",
    capabilities: [
      "Website UI/UX design",
      "Mobile app interfaces",
      "SaaS dashboard design",
      "Wireframing & prototyping",
      "User journey mapping",
      "Design systems",
      "Product interface design",
    ],
    outcomes: [
      "Clearer customer journeys",
      "Consistent product interfaces",
      "Design decisions grounded in user needs",
    ],
    icon: "design",
    seoTitle: "UI/UX Design Services | Digital Product Design – SEEABLE HUB",
    metaDescription:
      "Design thoughtful websites, mobile interfaces, SaaS dashboards and digital products with SEEABLE HUB.",
  },
  {
    slug: "cloud-api-business-automation",
    title: "Cloud, API & Business Automation",
    shortTitle: "Cloud, APIs & automation",
    description:
      "Connected systems and scalable infrastructure that help businesses operate efficiently and grow confidently.",
    tagline: "Connect. Automate. Scale.",
    intro:
      "We connect applications, automate repetitive workflows and establish dependable technology environments that create a stronger foundation for business growth.",
    capabilities: [
      "Cloud application deployment",
      "API development & integration",
      "Third party system integration",
      "Business process automation",
      "Database architecture",
      "Application migration",
      "Software maintenance & support",
    ],
    outcomes: [
      "Business tools that work together",
      "Fewer repetitive manual steps",
      "Infrastructure that can adapt as you grow",
    ],
    icon: "cloud",
    seoTitle: "Cloud Solutions, API Integration & Business Automation | SEEABLE HUB",
    metaDescription:
      "Connect business systems, automate workflows and build a scalable technology foundation with SEEABLE HUB.",
  },
];

export const findService = (slug: string) => services.find((service) => service.slug === slug);
