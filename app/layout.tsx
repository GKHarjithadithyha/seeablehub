import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/contact-links";
import { contactEmail } from "@/data/contact";
import { siteUrl } from "@/data/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SEEABLE HUB | Software Solutions & Digital Innovation",
    template: "%s | SEEABLE HUB",
  },
  description:
    "We turn ideas into impactful digital experiences through software engineering, intelligent technologies and creative innovation.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SEEABLE HUB",
    title: "SEEABLE HUB | built to be seen",
    description:
      "Software solutions, intelligent technologies and digital experiences built around your ambition.",
    url: siteUrl,
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "SEEABLE HUB — built to be seen" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEEABLE HUB | built to be seen",
    description: "Software solutions and digital innovation for businesses ready to move forward.",
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SEEABLE HUB",
    url: siteUrl,
    slogan: "built to be seen",
    description: "Software solutions and digital innovation.",
    email: contactEmail,
  };
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
