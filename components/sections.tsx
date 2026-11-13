import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Layers3,
  MessageCircle,
  Nfc,
  Palette,
  Smartphone,
} from "lucide-react";
import { services, type Service } from "@/data/services";
import { PanelArtwork } from "@/components/artwork";
import { Reveal } from "@/components/reveal";

const iconMap = {
  code: Code2,
  layers: Layers3,
  brain: BrainCircuit,
  message: MessageCircle,
  phone: Smartphone,
  nfc: Nfc,
  design: Palette,
  cloud: Cloud,
};

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}
export function SectionHeading({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
export function ServiceCard({ service, number }: { service: Service; number?: string }) {
  const Icon = iconMap[service.icon];
  return (
    <Link className="service-card" href={`/services/${service.slug}`}>
      <span className="service-icon">
        <Icon size={23} strokeWidth={1.8} />
      </span>
      {number && <span className="service-number">{number}</span>}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="card-arrow">
        <ArrowRight size={19} />
      </span>
    </Link>
  );
}
export function ServicesGrid({ limit }: { limit?: number }) {
  return (
    <Reveal className="services-grid">
      {services.slice(0, limit).map((service, i) => (
        <ServiceCard key={service.slug} service={service} number={String(i + 1).padStart(2, "0")} />
      ))}
    </Reveal>
  );
}
export function CTA({
  title = "Let’s build something great together",
  copy = "Have a project in mind? Tell us about it, and we’ll explore the right way to bring it to life.",
  buttonLabel = "Start a Project",
}: {
  title?: string;
  copy?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="cta-band wrap">
      <div className="cta-glow" />
      <div className="cta-copy">
        <Eyebrow>built to be seen</Eyebrow>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <Link className="button button-white" href="/contact">
        {buttonLabel} <ArrowUpRight size={17} />
      </Link>
    </section>
  );
}
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs wrap" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="breadcrumb-item">
          <span aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function IntroSplit({
  eyebrow,
  title,
  copy,
  bullets,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  bullets?: string[];
}) {
  return (
    <section className="intro-split wrap">
      <PanelArtwork />
      <div className="intro-copy">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        <p>{copy}</p>
        {bullets && (
          <ul className="check-list">
            {bullets.map((b) => (
              <li key={b}>
                <span>✓</span>
                {b}
              </li>
            ))}
          </ul>
        )}
        <Link className="text-link" href="/about">
          More about SEEABLE HUB <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
