import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, CTA, Eyebrow, SectionHeading, ServicesGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Services | Software & AI Solutions",
  description:
    "Explore SEEABLE HUB's technology services, including website development, custom software, AI, chatbots, mobile apps, NFC integrations and automation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Technology Services That Move Businesses Forward | SEEABLE HUB",
    description:
      "Discover software, AI, mobile, web and digital integration services from SEEABLE HUB.",
  },
};
export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <section className="page-hero wrap">
        <Eyebrow>OUR TECHNOLOGY CAPABILITIES</Eyebrow>
        <h1>Technology Solutions Built Around Your Ambition.</h1>
        <p>
          From custom software and website development to artificial intelligence and connected
          digital experiences, we bring ideas to life through technology.
        </p>
        <p className="hero-support">
          We combine software engineering, creative thinking and modern technologies to develop
          solutions that help businesses innovate, operate efficiently and grow.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Discuss Your Project <ArrowRight size={17} />
          </Link>
          <Link className="button button-outline" href="#capabilities">
            Explore Our Services
          </Link>
        </div>
      </section>
      <section className="services-page-grid wrap" id="capabilities">
        <SectionHeading
          eyebrow="EXPLORE OUR CAPABILITIES"
          title="Everything You Need to Build, Connect and Grow."
          copy="Choose a capability to learn more about how it can support your business."
        />
        <ServicesGrid />
      </section>
      <section className="industry-strip">
        <div className="wrap">
          <SectionHeading
            eyebrow="TECHNOLOGY ACROSS INDUSTRIES"
            title="Solutions That Adapt to Your Industry."
            copy="We work to understand each business environment and develop technology around its needs."
          />
          <Link href="/industries" className="text-link">
            Explore industries <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="why-section wrap">
        <SectionHeading
          eyebrow="THE SEEABLE DIFFERENCE"
          title="More Than a Service Provider. A Technology Partner."
        />
        <div className="why-grid">
          {[
            [
              "Solutions Designed Around You",
              "We tailor our approach to your business requirements.",
            ],
            ["Innovation With Purpose", "We use relevant technologies to solve real problems."],
            ["Design Meets Engineering", "Creative design and reliable development come together."],
            [
              "Built for Long-Term Growth",
              "We consider maintainability and adaptability from the start.",
            ],
            [
              "End-to-End Collaboration",
              "We work with you through discussions, development and deployment.",
            ],
          ].map(([t, d]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA
        title="Have a Challenge? Let’s Find the Right Technology."
        copy="Tell us what you’re planning or trying to solve. We’ll explore the possibilities together."
      />
    </>
  );
}
