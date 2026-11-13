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
  mobile?: {
    headline: string;
    description: string;
    intro: string;
    capabilities: { title: string; description: string }[];
    benefits: string[];
  };
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

const mobileServiceCopy: Record<string, NonNullable<Service["mobile"]>> = {
  "website-design-development": {
    headline: "Websites That Make Your Business Stand Out.",
    description: "Responsive websites, e-commerce stores and web applications.",
    intro:
      "A clear, responsive website that represents your brand and guides visitors to take action.",
    capabilities: [
      ["Business & Corporate Websites", "Present your company, services and identity."],
      ["Custom Website Design", "Brand-led layouts and responsive interfaces."],
      ["E-commerce Websites", "Product catalogues, carts, checkout and payments."],
      ["Landing Pages", "Focused pages for services, campaigns and lead generation."],
      ["Portfolio Websites", "Showcase your work, skills and expertise."],
      ["Custom Web Applications", "Portals, dashboards, booking tools and platforms."],
      [
        "Website Redesign & Optimisation",
        "Improve design, usability, mobile experience and performance.",
      ],
    ].map(([title, description]) => ({ title, description })),
    benefits: [
      "Responsive by design",
      "User-focused",
      "Performance-conscious",
      "SEO-ready foundations",
      "Built to evolve",
    ],
  },
  "custom-software-development": {
    headline: "Software Built Around Your Business.",
    description: "CRM, ERP, SaaS and business platforms built around your workflow.",
    intro:
      "We build tailored software that simplifies operations, solves business challenges and supports growth.",
    capabilities: [
      [
        "Business Management Systems",
        "Manage operations, resources and workflows in one platform.",
      ],
      ["CRM & ERP Solutions", "Connect customers, business processes and data."],
      ["SaaS Applications", "Turn product ideas into software platforms."],
      ["Custom Web Applications", "Build interactive tools around your requirements."],
      ["Workflow Automation", "Reduce repetitive tasks and improve efficiency."],
      ["Dashboards & Analytics", "Turn business data into useful insights."],
    ].map(([title, description]) => ({ title, description })),
    benefits: [
      "Built around you",
      "Designed for growth",
      "Modern engineering",
      "End-to-end development",
    ],
  },
  "ai-machine-learning": {
    headline: "Make Your Business Smarter with AI.",
    description: "Intelligent applications, predictive insights and AI-powered automation.",
    intro:
      "We develop AI-powered applications that help businesses automate tasks, understand information and make better-informed decisions.",
    capabilities: [
      ["AI Application Development", "Build intelligent applications around your needs."],
      ["Generative AI Integration", "Connect AI models with products and workflows."],
      ["Machine Learning", "Use data-driven models to identify patterns."],
      ["Document Processing", "Extract and organise information from documents."],
      ["Predictive Analytics", "Explore trends to support planning and decisions."],
      ["AI-Powered Automation", "Simplify repetitive processes with intelligent tools."],
    ].map(([title, description]) => ({ title, description })),
    benefits: [
      "Purpose-driven AI",
      "Custom development",
      "Practical integration",
      "Scalable solutions",
    ],
  },
  "chatbots-voice-ai": {
    headline: "Conversations Powered by Intelligence.",
    description: "Chatbots, WhatsApp automation and voice agents for customer interactions.",
    intro:
      "We build chatbots and voice AI solutions that automate enquiries, support customers and streamline communication.",
    capabilities: [
      ["AI Chatbots", "Answer questions with relevant responses."],
      ["WhatsApp Chatbots", "Automate customer enquiries and interactions."],
      ["AI Voice Agents", "Create voice assistants that handle conversations."],
      ["Customer Support Automation", "Automate routine questions and support."],
      ["Lead & Enquiry Bots", "Capture potential customers and organise enquiries."],
      ["Custom Conversational AI", "Connect assistants to your business workflows."],
    ].map(([title, description]) => ({ title, description })),
    benefits: [
      "Always-available interactions",
      "Business-focused automation",
      "Custom integrations",
      "Scalable experiences",
    ],
  },
  "mobile-app-development": {
    headline: "Ideas That Move With You.",
    description: "Android, iOS and cross-platform apps for customers and teams.",
    intro:
      "We build custom mobile apps with intuitive interfaces, useful features and reliable integrations.",
    capabilities: [
      ["Android App Development", "Custom applications for Android devices."],
      ["iOS App Development", "Mobile experiences for Apple devices."],
      ["Cross-Platform Apps", "Build for multiple platforms efficiently."],
      ["Business Applications", "Digitise internal operations with purpose-built tools."],
      ["E-commerce Applications", "Mobile shopping with product and payment features."],
      ["API & Backend Integration", "Connect apps with databases, APIs and systems."],
    ].map(([title, description]) => ({ title, description })),
    benefits: [
      "User-centred design",
      "Custom development",
      "Modern technology",
      "End-to-end support",
    ],
  },
  "nfc-smart-integrations": {
    headline: "Connect the Physical World to Digital.",
    description: "Digital business cards, smart menus, review systems and QR experiences.",
    intro:
      "We create NFC and QR experiences that help businesses share information and connect with customers.",
    capabilities: [
      ["NFC Digital Business Cards", "Share contact details and profiles with a tap."],
      ["NFC Review Cards", "Help customers reach your business review page."],
      ["Smart QR Menus", "Give customers access to digital menus."],
      ["QR Experiences", "Connect people to websites, products and information."],
      ["NFC Information Systems", "Share digital information through NFC touchpoints."],
      ["Custom NFC Integrations", "Connect NFC with your apps, websites and systems."],
    ].map(([title, description]) => ({ title, description })),
    benefits: [
      "Simple and convenient",
      "Business-focused",
      "Connected technology",
      "Custom solutions",
    ],
  },
  "ui-ux-product-design": {
    headline: "Great Experiences Begin With Great Design.",
    description: "Clear, intuitive interfaces for websites, apps and software products.",
    intro:
      "We create intuitive interfaces and thoughtful user experiences that bring products, people and technology together.",
    capabilities: [
      ["Website UI/UX", "Create engaging websites with clear layouts and navigation."],
      ["Mobile App Design", "Design intuitive interfaces for mobile applications."],
      ["SaaS Dashboard Design", "Make complex information easier to use."],
      ["Wireframes & Prototypes", "Explore layouts and journeys before development."],
      ["User Journey Mapping", "Understand user needs and improve interaction flows."],
      ["Design Systems", "Create consistent, reusable interface components."],
    ].map(([title, description]) => ({ title, description })),
    benefits: [
      "User-centred thinking",
      "Visual consistency",
      "Function meets aesthetics",
      "Development-ready",
    ],
  },
  "cloud-api-business-automation": {
    headline: "Connect. Automate. Scale.",
    description: "Connected systems, cloud solutions and streamlined workflows.",
    intro:
      "We build cloud-based solutions, integrate business systems and automate workflows to help organisations operate smarter.",
    capabilities: [
      ["Cloud Solutions", "Deploy and manage applications on scalable infrastructure."],
      ["API Development & Integration", "Connect applications, platforms and services."],
      ["Workflow Automation", "Simplify repetitive processes and reduce manual work."],
      ["Database Architecture", "Structure reliable data foundations for applications."],
      ["System Integration", "Bring business tools together in connected workflows."],
      ["Application Migration & Support", "Modernise applications and support technical needs."],
    ].map(([title, description]) => ({ title, description })),
    benefits: [
      "Seamless integration",
      "Operational efficiency",
      "Scalable infrastructure",
      "Reliable engineering",
    ],
  },
};

for (const service of services) service.mobile = mobileServiceCopy[service.slug];

export const findService = (slug: string) => services.find((service) => service.slug === slug);
