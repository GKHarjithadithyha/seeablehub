const vercelHost = process.env.VERCEL_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelHost ? `https://${vercelHost}` : "https://seeablehub.com")
).replace(/\/+$/, "");
