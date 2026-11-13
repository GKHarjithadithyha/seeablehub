import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Lightbulb, Target } from "lucide-react";
import { CTA, Eyebrow, ResponsiveCopy, SectionHeading } from "@/components/sections";
import { Breadcrumbs } from "@/components/sections";
import { ServicesGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us — built to be seen",
  description:
    "Discover SEEABLE HUB, a software solutions and digital technology company building innovative software, AI applications, websites and digital experiences.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SEEABLE HUB — built to be seen",
    description:
      "We turn ideas into impactful digital solutions through software engineering, intelligent technologies and creative innovation.",
  },
};

const values = [
  {
    icon: Target,
    title: "Build With Purpose",
    text: "Every solution begins with understanding the problem and identifying the right way to solve it.",
  },
  {
    icon: Lightbulb,
    title: "Create With Innovation",
    text: "We combine creative thinking and modern technology to develop practical new approaches.",
  },
  {
    icon: Compass,
    title: "Deliver With Impact",
    text: "We focus on the value our solutions create for the people and businesses that use them.",
  },
];
export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <section className="page-hero wrap">
        <Eyebrow>WHO WE ARE</Eyebrow>
        <h1>
          <ResponsiveCopy
            desktop="We Build Technology That Moves Businesses Forward."
            mobile="Technology That Moves Businesses Forward."
          />
        </h1>
        <p>
          <ResponsiveCopy
            desktop="Every great business begins with an idea. We bring the technology, expertise and digital solutions to help turn those ideas into reality."
            mobile="We turn ideas into practical digital products, intelligent applications and meaningful experiences."
          />
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/services">
            Explore Our Capabilities <ArrowRight size={17} />
          </Link>
          <Link className="button button-outline" href="/contact">
            Start a Conversation
          </Link>
        </div>
      </section>
      <section className="story-section wrap">
        <div className="story-index">
          <Eyebrow>OUR STORY</Eyebrow>
          <span>01 / OUR STORY</span>
        </div>
        <div className="story-content">
          <h2>
            Driven by Ideas.
            <br />
            Defined by Innovation.
          </h2>
          <p className="desktop-only-paragraph">
            Technology is constantly changing the way businesses operate, communicate and grow. We
            believe every business should have access to the right technology to make the most of
            these opportunities.
          </p>
          <p className="desktop-only-paragraph">
            SEEABLE HUB was built around a simple belief: meaningful ideas deserve the opportunity
            to become something impactful. We bring together software engineering, creative thinking
            and emerging technologies to develop solutions that address real world challenges.
          </p>
          <p className="desktop-only-paragraph">
            Our work spans websites, custom software, mobile applications, artificial intelligence,
            automation and connected digital experiences. We believe in building solutions that
            serve a purpose, create value and make a lasting difference.
          </p>
          <p className="mobile-only-paragraph">
            We bring software engineering, creative thinking and emerging technologies together to
            solve real business challenges.
          </p>
        </div>
      </section>
      <section className="vision-band">
        <div className="wrap vision-grid">
          <article>
            <Eyebrow>WHERE WE ARE GOING</Eyebrow>
            <h2>
              <ResponsiveCopy
                desktop="A future where every great idea has the power to be seen."
                mobile="Make Great Ideas Possible."
              />
            </h2>
            <p>
              <ResponsiveCopy
                desktop="Our vision is to become a trusted technology partner for businesses and innovators, empowering them to transform possibilities into meaningful digital solutions."
                mobile="We aim to be a trusted technology partner, helping turn possibilities into useful digital solutions."
              />
            </p>
          </article>
          <article>
            <Eyebrow>WHAT DRIVES US</Eyebrow>
            <h2>
              <ResponsiveCopy
                desktop="Turning possibilities into practical technology."
                mobile="Turn Possibilities Into Practical Technology."
              />
            </h2>
            <p>
              <ResponsiveCopy
                desktop="Our mission is to design, develop and deliver innovative digital solutions that help businesses operate smarter, connect better and grow sustainably."
                mobile="We design digital solutions that help businesses operate smarter, connect better and grow."
              />
            </p>
          </article>
        </div>
      </section>
      <section className="values-section wrap">
        <SectionHeading
          eyebrow="OUR PHILOSOPHY"
          title="built to be seen."
          copy="Being seen is more than simply having a digital presence. It is about creating something meaningful, building something valuable and making an impression that lasts."
          mobileCopy="We build with purpose, create with innovation and deliver technology that makes an impact."
          centered
        />
        <div className="value-grid">
          {values.map(({ icon: Icon, title, text }, i) => (
            <article key={title}>
              <span className="value-number">0{i + 1}</span>
              <span className="service-icon">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-services wrap">
        <SectionHeading
          eyebrow="OUR CAPABILITIES"
          title="One Technology Partner. Multiple Possibilities."
          copy="From digital experiences and software engineering to intelligent technologies and connected systems."
        />
        <ServicesGrid />
      </section>
      <section id="approach" className="process-section wrap">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="A Clear Process. A Shared Vision. A Better Outcome."
          mobileTitle="A Clear Process. A Shared Vision."
        />
        <div className="process-grid">
          {[
            { n: "01", t: "Discover", d: "Understand your business, objectives and challenges." },
            {
              n: "02",
              t: "Strategise",
              d: "Define scope, suitable technologies and a clear plan.",
            },
            {
              n: "03",
              t: "Design & Develop",
              d: "Create intuitive experiences and engineer reliable solutions.",
            },
            {
              n: "04",
              t: "Launch & Evolve",
              d: "Deploy your solution, support adoption and improve as needs evolve.",
            },
          ].map((s) => (
            <article className="process-step" key={s.n}>
              <span>{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="who-section wrap">
        <Eyebrow>OUR PARTNERS</Eyebrow>
        <h2>Technology for Businesses at Every Stage.</h2>
        <p>
          Whether you’re starting with an idea, developing a new product or modernising an
          established business, we work alongside you to identify and build the right solution.
        </p>
        <div className="who-grid">
          {[
            "Startups & Entrepreneurs",
            "Growing Businesses",
            "Established Enterprises",
            "Innovators & Organisations",
          ].map((x) => (
            <div key={x}>
              <span>↗</span>
              {x}
            </div>
          ))}
        </div>
      </section>
      <CTA
        title="Your Next Big Idea Deserves to Be Built."
        copy="Let's start with your idea and build something meaningful together."
        mobileTitle="Your Next Big Idea Deserves to Be Built."
        mobileCopy="Let’s start with your idea and build something meaningful together."
      />
    </>
  );
}
