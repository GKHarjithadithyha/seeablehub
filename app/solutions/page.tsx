import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, Building2, Rocket, Workflow } from "lucide-react";
import { Breadcrumbs, CTA, Eyebrow, SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "Digital Solutions for Business Growth",
  description:
    "Explore business software, digital product, intelligent technology and connected experience solutions from SEEABLE HUB.",
  alternates: { canonical: "/solutions" },
};
const pathways = [
  {
    icon: Rocket,
    title: "Bring an idea to life",
    copy: "Move from early concept to a functional digital product with discovery, product design and software engineering.",
    links: [
      "UI/UX & Product Design",
      "Custom Software Development",
      "Mobile Application Development",
    ],
  },
  {
    icon: Building2,
    title: "Improve how your business works",
    copy: "Create tools and integrations that simplify operations, connect systems and support your teams.",
    links: [
      "Custom Software Development",
      "Cloud, API & Business Automation",
      "AI & Machine Learning",
    ],
  },
  {
    icon: Boxes,
    title: "Create better customer experiences",
    copy: "Build clear digital touchpoints that help customers discover, connect with and use your services.",
    links: [
      "Website Design & Development",
      "Mobile Application Development",
      "NFC & Smart Integrations",
    ],
  },
  {
    icon: Workflow,
    title: "Make conversations more useful",
    copy: "Explore conversational tools that help manage common enquiries and connect customers with information.",
    links: ["Chatbots & Voice AI", "AI & Machine Learning", "Website Design & Development"],
  },
];
const toSlug = (label: string) =>
  ({
    "UI/UX & Product Design": "ui-ux-product-design",
    "Custom Software Development": "custom-software-development",
    "Mobile Application Development": "mobile-app-development",
    "Cloud, API & Business Automation": "cloud-api-business-automation",
    "AI & Machine Learning": "ai-machine-learning",
    "Website Design & Development": "website-design-development",
    "NFC & Smart Integrations": "nfc-smart-integrations",
    "Chatbots & Voice AI": "chatbots-voice-ai",
  })[label] || "";
export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions" }]} />
      <section className="page-hero wrap">
        <Eyebrow>BUSINESS SOLUTIONS</Eyebrow>
        <h1>Technology built around the work you need to do.</h1>
        <p>
          Every business challenge is different. Find a starting point, then combine the right
          capabilities to create a practical solution for your goals.
        </p>
        <Link className="button button-primary" href="/contact">
          Discuss Your Project <ArrowRight size={17} />
        </Link>
      </section>
      <section className="solution-section wrap">
        <SectionHeading
          eyebrow="FIND YOUR STARTING POINT"
          title="One partner. Multiple possibilities."
        />
        <div className="solution-grid">
          {pathways.map(({ icon: Icon, title, copy, links }) => (
            <article key={title}>
              <span className="service-icon">
                <Icon size={23} />
              </span>
              <h2>{title}</h2>
              <p>{copy}</p>
              <div className="solution-links">
                {links.map((link) => (
                  <Link href={`/services/${toSlug(link)}`} key={link}>
                    {link}
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA
        title="Not sure where to start?"
        copy="Tell us about your goals and we’ll help map out a sensible next step."
      />
    </>
  );
}
