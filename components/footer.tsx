import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/brand";
import { services } from "@/data/services";
import { contactEmail, whatsappUrl } from "@/data/contact";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-about">
            <Brand />
            <p>
              Building digital experiences, intelligent solutions and innovative software for
              businesses ready to move forward.
            </p>
            <Link className="footer-link" href="/contact">
              Get in touch <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/work">Our Work</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/#faqs">FAQs</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-column">
            <h3>Capabilities</h3>
            {services.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="footer-column footer-connect">
            <h3>Start a conversation</h3>
            <p>Have an idea, a challenge or a project in mind?</p>
            <a className="footer-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp <ArrowUpRight size={15} />
            </a>
            <a className="footer-link" href={`mailto:${contactEmail}`}>
              {contactEmail} <ArrowUpRight size={15} />
            </a>
            <Link className="footer-link" href="/contact">
              Tell us about it <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SEEABLE HUB. All rights reserved.</span>
          <span className="tagline-small">built to be seen.</span>
          <Link href="/contact">
            Let’s build together <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
