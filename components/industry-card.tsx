import { Check } from "lucide-react";
import type { Industry } from "@/data/industries";
import { ResponsiveCopy } from "@/components/sections";

export function IndustryCard({ industry, number }: { industry: Industry; number: string }) {
  const Icon = industry.icon;

  return (
    <article id={industry.slug} className="industry-card">
      <div className="industry-card-top">
        <span className="service-icon" aria-hidden="true">
          <Icon size={23} strokeWidth={1.8} />
        </span>
        <span className="industry-card-number">{number}</span>
      </div>
      <h3>{industry.name}</h3>
      <p>
        <ResponsiveCopy desktop={industry.description} mobile={industry.mobileDescription} />
      </p>
      <details className="mobile-industry-solutions">
        <summary>Explore capabilities</summary>
        <ul>
          {industry.solutions.map((solution) => (
            <li key={solution}>
              <Check size={14} aria-hidden="true" />
              <span>{solution}</span>
            </li>
          ))}
        </ul>
      </details>
      <div className="desktop-industry-solutions">
        <h4>Solutions include</h4>
        <ul>
          {industry.solutions.map((solution) => (
            <li key={solution}>
              <Check size={14} aria-hidden="true" />
              <span>{solution}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function IndustryBenefitCard({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: string;
}) {
  return (
    <article className="industry-benefit-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
