"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent } from "react";

const groups = [
  {
    title: "General",
    questions: [
      [
        "What is SEEABLE HUB?",
        "SEEABLE HUB is a software solutions and digital innovation company that helps businesses turn ideas into impactful digital experiences through technology, design and software development.",
        "SEEABLE HUB builds websites, software and intelligent digital experiences for businesses.",
      ],
      [
        "What services does SEEABLE HUB offer?",
        "We offer website development, custom software development, AI and machine learning, chatbots and voice AI, mobile applications, NFC integrations, UI/UX design and cloud based solutions.",
        "Websites, custom software, AI, chatbots, mobile apps, NFC, UI/UX and cloud solutions.",
      ],
      [
        "Who can work with SEEABLE HUB?",
        "We work with startups, entrepreneurs, small businesses, growing organisations and established companies looking for digital and technology solutions.",
        "Startups, entrepreneurs, small businesses, growing organisations and established companies.",
      ],
    ],
  },
  {
    title: "Services & solutions",
    questions: [
      [
        "Can you build a website for my business?",
        "Yes. We develop business websites, corporate websites, e-commerce platforms, landing pages and custom web applications based on your requirements.",
        "Yes. We build business websites, e-commerce stores, landing pages and web applications.",
      ],
      [
        "Do you develop custom software?",
        "Yes. We build business management systems, CRM and ERP solutions, SaaS applications, dashboards and custom software platforms.",
        "Yes. We build CRM, ERP, SaaS, management systems and custom business tools.",
      ],
      [
        "Can you integrate AI into my business?",
        "We can develop AI powered applications, integrate generative AI models, automate workflows and create intelligent document processing solutions.",
        "Yes. We build AI applications, integrate AI models and automate workflows.",
      ],
      [
        "Do you develop AI chatbots and voice assistants?",
        "We build conversational AI solutions, WhatsApp chatbots, customer support bots, automated enquiry systems and AI voice agents.",
        "Yes. We build website chatbots, WhatsApp assistants and AI voice agents.",
      ],
      [
        "Can you develop Android and iOS applications?",
        "We develop Android, iOS and cross platform applications depending on the project requirements.",
        "Yes. We develop Android, iOS and cross-platform applications.",
      ],
      [
        "What are your NFC and smart integration services?",
        "We develop NFC digital business cards, review cards, QR powered experiences, smart menus and custom NFC integrations.",
        "Digital business cards, review cards, smart menus and custom NFC or QR experiences.",
      ],
    ],
  },
  {
    title: "Projects & development",
    questions: [
      [
        "How do I start a project with SEEABLE HUB?",
        "Contact us through the project enquiry form and share your idea, requirements and objectives. We can then discuss project scope and a suitable approach.",
        "Share your idea, requirements and objectives through our contact form. We’ll discuss the scope and next steps.",
      ],
      [
        "How does your development process work?",
        "Our process generally includes requirement discovery, planning, design, development, testing and deployment.",
        "We move through discovery, planning, design, development, testing and deployment.",
      ],
      [
        "How long does a project take?",
        "Timelines depend on project complexity, functionality, integrations and scope. An estimated timeline can be discussed after understanding your requirements.",
        "Timelines depend on scope, features, integrations and complexity. We’ll estimate after learning your requirements.",
      ],
      [
        "Can you work with an existing project?",
        "We can discuss existing websites, applications and software platforms that need redesign, improvements, integrations or additional functionality.",
        "Yes. We can discuss redesigns, improvements, integrations and new features.",
      ],
      [
        "Will I be involved during development?",
        "Yes. Project discussions, feedback and reviews help ensure the solution aligns with the agreed requirements.",
        "Yes. Your feedback and reviews help keep the solution aligned with agreed requirements.",
      ],
    ],
  },
  {
    title: "Pricing & support",
    questions: [
      [
        "How much do your services cost?",
        "Pricing depends on scope, features, technology requirements and development complexity. Contact us to discuss your requirements and request an estimate.",
        "Pricing depends on scope, features, technology and complexity. Contact us for an estimate.",
      ],
      [
        "Do you provide maintenance and technical support?",
        "Maintenance and ongoing support can be discussed and scoped according to your project's needs.",
        "Yes. Ongoing maintenance and technical support can be scoped to your needs.",
      ],
      [
        "Can I request additional features after launch?",
        "Yes. Additional features and enhancements can be evaluated and planned based on your requirements.",
        "Yes. Additional features can be evaluated and planned.",
      ],
    ],
  },
];

export function FAQList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const id = useId();
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % groups.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + groups.length) % groups.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = groups.length - 1;
    else return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    tabs.current[nextIndex]?.focus();
  };

  return (
    <div className="faq-browser">
      <div className="faq-tabs" role="tablist" aria-label="FAQ categories">
        {groups.map((group, index) => {
          const slug = group.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");
          return (
            <button
              key={group.title}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              id={`${id}-tab-${slug}`}
              className="faq-tab"
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`${id}-panel-${slug}`}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {group.title}
              <span>{group.questions.length}</span>
            </button>
          );
        })}
      </div>
      {groups.map((group, index) => {
        const slug = group.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");
        return (
          <section
            key={group.title}
            id={`${id}-panel-${slug}`}
            className="faq-panel"
            role="tabpanel"
            aria-labelledby={`${id}-tab-${slug}`}
            hidden={activeIndex !== index}
            tabIndex={0}
          >
            <div className="faq-panel-heading">
              <span>COMMON QUESTIONS</span>
              <h2>{group.title}</h2>
            </div>
            <Accordion.Root type="multiple" className="accordion-root">
              {group.questions.map(([question, answer, mobileAnswer]) => {
                const value = `${group.title}-${question}`;
                return (
                  <Accordion.Item className="accordion-item" key={value} value={value}>
                    <Accordion.Header>
                      <Accordion.Trigger className="accordion-trigger">
                        {question}
                        <ChevronDown size={18} />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="accordion-content">
                      <p>
                        <span className="desktop-copy">{answer}</span>
                        <span className="mobile-copy">{mobileAnswer ?? answer}</span>
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>
          </section>
        );
      })}
    </div>
  );
}
