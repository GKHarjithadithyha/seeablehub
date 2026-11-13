import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText, Compass, Layers3 } from "lucide-react";
import { Breadcrumbs, CTA, Eyebrow, SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "Resources | Digital Product Insights",
  description:
    "Practical starting points for planning websites, custom software, AI applications and digital products with SEEABLE HUB.",
  alternates: { canonical: "/resources" },
};
const resources = [
  {
    type: "PROJECT PLANNING",
    title: "Starting a custom software project",
    copy: "Clarify the business problem, who needs the software and which workflow should improve first.",
    icon: Compass,
    href: "/services/custom-software-development",
  },
  {
    type: "DIGITAL PRESENCE",
    title: "Planning a business website",
    copy: "Bring your audience, message, content and desired actions together before deciding on pages and features.",
    icon: BookOpenText,
    href: "/services/website-design-development",
  },
  {
    type: "PRODUCT DESIGN",
    title: "From idea to a useful digital product",
    copy: "Map the user journey, test the core experience and identify the smallest useful first release.",
    icon: Layers3,
    href: "/services/ui-ux-product-design",
  },
];
export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Resources" }]} />
      <section className="page-hero wrap">
        <Eyebrow>RESOURCES & INSIGHTS</Eyebrow>
        <h1>Clearer thinking for your next digital project.</h1>
        <p>
          Use these practical starting points to frame a project, ask better questions and explore
          the right technology capabilities.
        </p>
      </section>
      <section className="resource-section wrap">
        <SectionHeading eyebrow="PROJECT GUIDES" title="A useful place to begin." />
        <div className="resource-grid">
          {resources.map(({ type, title, copy, icon: Icon, href }) => (
            <article key={title}>
              <span className="resource-type">{type}</span>
              <span className="service-icon">
                <Icon size={23} />
              </span>
              <h2>{title}</h2>
              <p>{copy}</p>
              <Link href={href}>
                Explore this capability <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="resource-note wrap">
        <Eyebrow>MORE TO COME</Eyebrow>
        <h2>Resources will grow with the questions we hear.</h2>
        <p>
          We’re preparing more useful notes on software, AI, product design and connected
          experiences.
        </p>
        <Link className="text-link" href="/contact">
          Suggest a topic <ArrowRight size={16} />
        </Link>
      </section>
      <CTA
        title="Have a project question?"
        copy="Talk with us about the decisions you’re working through."
      />
    </>
  );
}
