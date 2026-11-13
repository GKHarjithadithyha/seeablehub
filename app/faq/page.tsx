import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, CTA, Eyebrow, ResponsiveCopy } from "@/components/sections";
import { FAQList } from "@/components/faq-list";

export const metadata: Metadata = {
  title: "FAQs | Software Solutions & Digital Innovation",
  description:
    "Find answers to common questions about SEEABLE HUB's website development, custom software, AI, mobile applications, NFC integrations and digital services.",
  alternates: { canonical: "/faq" },
};
export default function FAQPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "FAQs" }]} />
      <section className="page-hero faq-hero faq-page-hero wrap">
        <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
        <h1>Questions? We’ve got answers.</h1>
        <p>
          <ResponsiveCopy
            desktop="Learn about our services, development process and how we bring ideas to life."
            mobile="Quick answers about our services, process and how to get started."
          />
        </p>
        <Link className="button button-outline faq-contact-link" href="/contact">
          Can’t find what you need? Talk to our team <ArrowRight size={16} />
        </Link>
      </section>
      <section
        className="faq-section faq-page-section wrap"
        aria-label="Frequently asked questions"
      >
        <FAQList />
      </section>
      <CTA
        title="Let’s find the right solution together."
        copy="Every great project begins with a conversation. Tell us what you’re planning, and let’s explore the possibilities."
        mobileTitle="Let’s Find the Right Solution Together."
        mobileCopy="Tell us what you’re planning. We’ll explore how technology can help."
      />
    </>
  );
}
