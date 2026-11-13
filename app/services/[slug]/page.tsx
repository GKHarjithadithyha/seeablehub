import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import {
  Breadcrumbs,
  CTA,
  Eyebrow,
  ResponsiveCopy,
  SectionHeading,
  ServiceCard,
} from "@/components/sections";
import { findService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.seoTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.seoTitle, description: service.metaDescription },
  };
}
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seeablehub.com";
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/services/${service.slug}`,
      },
    ],
  };
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@type": "Organization", name: "SEEABLE HUB", url: siteUrl },
    url: `${siteUrl}/services/${service.slug}`,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
      <section className="page-hero service-hero wrap">
        <Eyebrow>{service.title.toUpperCase()}</Eyebrow>
        <h1>
          <ResponsiveCopy
            desktop={service.tagline}
            mobile={service.mobile?.headline ?? service.tagline}
          />
        </h1>
        <p>
          <ResponsiveCopy
            desktop={service.description}
            mobile={service.mobile?.description ?? service.description}
          />
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Discuss Your Project <ArrowRight size={17} />
          </Link>
          <Link className="button button-outline" href="/work">
            Explore Our Work
          </Link>
        </div>
      </section>
      <section className="service-intro wrap">
        <div>
          <Eyebrow>BUILT AROUND YOUR NEEDS</Eyebrow>
          <h2>
            <ResponsiveCopy
              desktop={`${service.title}, shaped around your goals.`}
              mobile="Built around your goals."
            />
          </h2>
        </div>
        <div>
          <p className="mobile-only-paragraph">{service.mobile?.intro ?? service.description}</p>
          <p className="desktop-only-paragraph">{service.intro}</p>
          <p className="desktop-only-paragraph">
            We begin by understanding what you want to achieve, then identify an appropriate
            approach and build the parts that create practical value for your business.
          </p>
        </div>
      </section>
      <section className="capability-section">
        <div className="wrap">
          <SectionHeading eyebrow="WHAT WE OFFER" title="Capabilities for your next step." />
          <div className="capability-grid">
            {service.capabilities.map((item, i) => {
              const mobileCapability = service.mobile?.capabilities[i];
              return (
                <article key={item}>
                  <span className="cap-number">{String(i + 1).padStart(2, "0")}</span>
                  <h3>
                    <ResponsiveCopy desktop={item} mobile={mobileCapability?.title ?? item} />
                  </h3>
                  <p>
                    <ResponsiveCopy
                      desktop="Planned around your project scope, business requirements and intended customer experience."
                      mobile={mobileCapability?.description ?? item}
                    />
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="outcomes-section wrap desktop-outcomes">
        <div>
          <Eyebrow>WHY SEEABLE HUB</Eyebrow>
          <h2>
            Thoughtful technology.
            <br />
            Useful outcomes.
          </h2>
          <p>
            We bring design, engineering and collaboration together to create solutions that make a
            practical difference.
          </p>
        </div>
        <ul className="outcomes-list">
          {service.outcomes.map((item) => (
            <li key={item}>
              <Check size={18} />
              {item}
            </li>
          ))}
        </ul>
      </section>
      <details className="mobile-benefits wrap">
        <summary>Why SEEABLE HUB</summary>
        <ul>
          {service.mobile?.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </details>
      <section className="related-section wrap">
        <SectionHeading eyebrow="RELATED CAPABILITIES" title="Explore more ways to build." />
        <div className="related-grid">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <CTA
        title="Let’s talk about what you’re building."
        copy={`Tell us about your ${service.shortTitle.toLowerCase()} project and we’ll explore the right approach together.`}
        mobileTitle="Ready to Build Your Next Idea?"
        mobileCopy={`Tell us about your ${service.shortTitle.toLowerCase()} project. We’ll explore the right approach together.`}
      />
    </>
  );
}
