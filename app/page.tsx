import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, MoveRight, Sparkles } from "lucide-react";
import { HeroArtwork } from "@/components/artwork";
import { FAQList } from "@/components/faq-list";
import { CTA, Eyebrow, IntroSplit, SectionHeading, ServicesGrid } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <Eyebrow>SOFTWARE COMPANY</Eyebrow>
          <h1>
            Building Innovative
            <br />
            Software Solutions
            <br />
            for <span className="gradient-text">Modern Businesses</span>
          </h1>
          <p>
            We design, develop and deliver custom software solutions that help businesses grow,
            operate smarter and create lasting impact.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Start a Project <ArrowRight size={18} />
            </Link>
            <Link className="button button-outline" href="/services">
              Our Services
            </Link>
          </div>
          <div className="hero-values">
            <div>
              <Sparkles size={17} />
              <span>Purposeful technology</span>
            </div>
            <div>
              <CheckCircle2 size={17} />
              <span>Designed around your goals</span>
            </div>
            <div>
              <MoveRight size={17} />
              <span>Built to evolve</span>
            </div>
          </div>
        </div>
        <HeroArtwork />
      </section>
      <section className="services-section wrap">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="What We Do"
          copy="End-to-end software services tailored to your business needs."
          centered
        />
        <ServicesGrid limit={4} />
        <div className="section-link">
          <Link className="text-link" href="/services">
            Explore all capabilities <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <IntroSplit
        eyebrow="ABOUT SEEABLE HUB"
        title="A Technology Partner You Can Trust"
        copy="More than a development company, we’re a technology partner for businesses with ideas to bring to life. We combine thoughtful design and practical engineering to create digital solutions that serve a real purpose."
        bullets={[
          "Solutions shaped around your business",
          "Transparent collaboration from start to finish",
          "A focus on useful, lasting outcomes",
        ]}
      />
      <section className="process-section wrap">
        <div className="process-top">
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="From Vision to Reality"
            copy="A clear process helps turn an early idea into a useful digital product."
          />
          <Link className="text-link" href="/about#approach">
            How we work <ArrowRight size={16} />
          </Link>
        </div>
        <div className="process-grid">
          {[
            {
              n: "01",
              t: "Discover",
              d: "We understand your idea, business objectives and challenges.",
            },
            {
              n: "02",
              t: "Define",
              d: "We plan the right strategy, technology and development approach.",
            },
            {
              n: "03",
              t: "Develop",
              d: "We design, engineer and build your solution with precision.",
            },
            {
              n: "04",
              t: "Deliver",
              d: "We launch, optimise and support your product as it grows.",
            },
          ].map((step) => (
            <article className="process-step" key={step.n}>
              <span>{step.n}</span>
              <h3>{step.t}</h3>
              <p>{step.d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="philosophy-section">
        <div className="wrap philosophy-inner">
          <div>
            <Eyebrow>THE MEANING BEHIND OUR NAME</Eyebrow>
            <h2>
              built to
              <br />
              <span className="gradient-text">be seen.</span>
            </h2>
          </div>
          <p>
            Being seen is not simply about visibility. It is about creating something meaningful
            enough to make an impression. Build with purpose. Create with innovation. Be seen.
          </p>
        </div>
      </section>
      <section className="home-faq-section faq-section wrap" id="faqs">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Questions? We’ve Got Answers."
          copy="Learn more about our services, how we work and what to expect when starting a project with SEEABLE HUB."
          centered
        />
        <FAQList />
        <div className="section-link">
          <Link className="text-link" href="/faq">
            See all FAQs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <CTA
        title="Let’s Build Something Great Together"
        copy="Have an idea, a business challenge or a vision for something new? Let's turn it into technology that makes an impact."
      />
    </>
  );
}
