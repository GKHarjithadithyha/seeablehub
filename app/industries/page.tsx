import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MoveRight, Sparkles } from "lucide-react";
import { HeroArtwork } from "@/components/artwork";
import { IndustryBenefitCard, IndustryCard } from "@/components/industry-card";
import { Breadcrumbs, CTA, Eyebrow, ResponsiveCopy, SectionHeading } from "@/components/sections";
import { Reveal } from "@/components/reveal";
import { industries, industryBenefits } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Explore tailored software solutions for retail, healthcare, education, construction, hospitality, professional services, startups and manufacturing.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Empower | SEEABLE HUB",
    description:
      "Digital solutions shaped around industry workflows, customer needs and business goals.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Industries" }]} />
      <section className="industry-hero wrap">
        <div className="industry-hero-copy">
          <Eyebrow>INDUSTRIES WE EMPOWER</Eyebrow>
          <h1>
            <ResponsiveCopy
              desktop={
                <>
                  Technology That Understands <span className="gradient-text">Your Industry.</span>
                </>
              }
              mobile="Technology That Adapts to Your Industry."
            />
          </h1>
          <p>
            <ResponsiveCopy
              desktop="Every industry has different challenges, workflows and ambitions. We build tailored digital solutions that help businesses simplify operations, connect with customers and move forward with confidence."
              mobile="We start by understanding your business environment, then shape technology around your needs."
            />
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Discuss Your Project <ArrowRight size={17} />
            </Link>
          </div>
          <div className="hero-values">
            <div>
              <Sparkles size={17} />
              <span>Built around your workflow</span>
            </div>
            <div>
              <CheckCircle2 size={17} />
              <span>Purposeful solutions</span>
            </div>
            <div>
              <MoveRight size={17} />
              <span>Ready to evolve</span>
            </div>
          </div>
        </div>
        <HeroArtwork />
      </section>

      <section className="industry-intro-band">
        <div className="wrap industry-intro">
          <div className="industry-intro-heading">
            <Eyebrow>BUILT AROUND YOUR BUSINESS</Eyebrow>
            <h2>Built Around the Way Your Business Works.</h2>
          </div>
          <div className="industry-intro-copy">
            <p className="industry-intro-lead">
              <ResponsiveCopy
                desktop="Great software isn’t one-size-fits-all."
                mobile="We understand your business first."
              />
            </p>
            <p className="desktop-only-paragraph">
              A retail business needs a better way to manage customers and orders. A healthcare
              organisation needs efficient systems and reliable information. A construction company
              needs better project visibility and coordination.
            </p>
            <p className="desktop-only-paragraph">
              We understand that every business operates differently. That&apos;s why we approach
              every project with your industry&apos;s requirements, business objectives and
              customers in mind.
            </p>
            <p className="mobile-only-paragraph">
              We understand your business environment, identify its needs and shape technology
              around them.
            </p>
          </div>
        </div>
      </section>

      <section className="industries-section wrap">
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title="Digital Solutions for Every Industry."
          copy="We combine business understanding, thoughtful design and modern technology to develop software solutions for different industries."
        />
        <Reveal className="industries-card-grid">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.slug}
              industry={industry}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </Reveal>
      </section>

      <section className="industry-benefits-band">
        <div className="wrap industry-benefits-section">
          <SectionHeading
            eyebrow="THE SEEABLE HUB APPROACH"
            title="We Don’t Just Build Software. We Build Business Solutions."
            copy="Good technology starts with understanding the people and work it needs to support."
            centered
          />
          <Reveal className="industry-benefits-grid">
            {industryBenefits.map((benefit, index) => (
              <IndustryBenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </Reveal>
          <details className="mobile-industry-approach">
            <summary>How we approach your industry</summary>
            <ul>
              {industryBenefits.map((benefit) => (
                <li key={benefit.title}>
                  <strong>{benefit.title}</strong>
                  <span>{benefit.description}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      <CTA
        title="Your Industry. Your Challenges. Our Technology."
        copy="Let’s build a digital solution that works the way your business does. Tell us about your goals and we’ll help you explore the right digital approach."
        mobileTitle="Discuss Your Industry Needs"
        mobileCopy="Tell us what your business needs. We’ll explore the right technology together."
        buttonLabel="Let’s Build Something Together"
      />
    </>
  );
}
