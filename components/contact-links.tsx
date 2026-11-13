import { Mail, MessageCircle, Phone } from "lucide-react";
import { contactEmail, whatsappUrl } from "@/data/contact";

function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <span className={`whatsapp-glyph ${className}`} aria-hidden="true">
      <MessageCircle size={21} strokeWidth={2} />
      <Phone className="whatsapp-phone" size={10} strokeWidth={2.4} />
    </span>
  );
}

export function ContactLinks() {
  return (
    <div className="contact-methods" aria-label="Direct contact options">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsAppGlyph />
        <span>
          <small>WhatsApp</small>
          Chat with us
        </span>
      </a>
      <a href={`mailto:${contactEmail}`}>
        <span className="contact-method-icon" aria-hidden="true">
          <Mail size={19} />
        </span>
        <span>
          <small>Email</small>
          {contactEmail}
        </span>
      </a>
    </div>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SEEABLE HUB on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <WhatsAppGlyph />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
