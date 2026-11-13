import type { Metadata } from "next";
import { MessageSquareText } from "lucide-react";
import { Breadcrumbs, Eyebrow } from "@/components/sections";
import { ContactForm } from "@/components/contact-form";
import { ContactLinks } from "@/components/contact-links";

export const metadata: Metadata = {
  title: "Contact | Start a Project",
  description:
    "Tell SEEABLE HUB about your idea, business challenge or digital project. Start a conversation about software, AI, web or mobile development.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="page-hero contact-heading wrap">
        <Eyebrow>START A PROJECT</Eyebrow>
        <h1>Have something worth building?</h1>
        <p>
          Tell us what you’re planning, what you’re trying to solve or what you want to build. Let’s
          explore the possibilities together.
        </p>
      </section>
      <section className="contact-layout wrap">
        <aside className="contact-aside">
          <Eyebrow>LET’S TALK</Eyebrow>
          <h2>Start with your idea.</h2>
          <p>Share a few details and we’ll have a clearer starting point for the conversation.</p>
          <ContactLinks />
          <div className="contact-promise">
            <MessageSquareText size={20} />
            <p>
              We’ll use your project notes to understand the goals and discuss possible next steps.
            </p>
          </div>
        </aside>
        <div className="contact-form-wrap">
          <h2>Tell us about your project</h2>
          <p>All fields are required.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
