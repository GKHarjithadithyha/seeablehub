import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";
import { Breadcrumbs, CTA, Eyebrow } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Work | Case Studies",
  description:
    "Learn about SEEABLE HUB's approach to building custom software, digital products and connected experiences. Ask us about relevant project work.",
  alternates: { canonical: "/work" },
};
export default function WorkPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Our Work" }]} />
      <section className="page-hero wrap">
        <Eyebrow>OUR WORK</Eyebrow>
        <h1>Thoughtful ideas, made tangible through technology.</h1>
        <p>
          Our work brings together software engineering, purposeful design and an understanding of
          what businesses need to move forward.
        </p>
      </section>
      <section className="work-empty wrap">
        <span className="work-mark">
          <FolderOpen size={32} />
        </span>
        <Eyebrow>CASE STUDIES</Eyebrow>
        <h2>Project stories are being prepared.</h2>
        <p>
          We’re not publishing client case studies here yet. We won’t invent project results or
          client details. If you’d like to understand how our capabilities could fit your project,
          let’s talk about your goals.
        </p>
        <Link className="button button-primary" href="/contact">
          Discuss your project <ArrowRight size={17} />
        </Link>
      </section>
      <section className="work-capabilities wrap">
        <Eyebrow>CAPABILITIES BEHIND THE WORK</Eyebrow>
        <h2>From first sketch to a useful solution.</h2>
        <p>Explore the areas where SEEABLE HUB can support your next idea.</p>
        <Link className="text-link" href="/services">
          Explore our services <ArrowRight size={16} />
        </Link>
      </section>
      <CTA
        title="Let’s build a project worth sharing."
        copy="Bring us the idea or challenge you’re working on. We’ll help you find the right starting point."
      />
    </>
  );
}
