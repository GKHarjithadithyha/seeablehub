import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const base = process.env.SITE_URL || "http://localhost:3000";
const screenshotDir = "artifacts/site-check";
await mkdir(screenshotDir, { recursive: true });
const paths = [
  "/",
  "/about",
  "/services",
  "/solutions",
  "/industries",
  "/work",
  "/resources",
  "/faq",
  "/contact",
  "/services/website-design-development",
  "/services/custom-software-development",
  "/services/ai-machine-learning",
  "/services/chatbots-voice-ai",
  "/services/mobile-app-development",
  "/services/nfc-smart-integrations",
  "/services/ui-ux-product-design",
  "/services/cloud-api-business-automation",
];
const launchOptions = {
  headless: true,
  channel:
    process.env.PLAYWRIGHT_BROWSER_CHANNEL || (process.platform === "win32" ? "msedge" : undefined),
};
if (process.env.CHROMIUM_EXECUTABLE_PATH)
  launchOptions.executablePath = process.env.CHROMIUM_EXECUTABLE_PATH;
const browser = await chromium.launch(launchOptions);
const errors = [];
const page = await browser.newPage({ viewport: { width: 1440, height: 1050 } });
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});

try {
  for (const path of paths) {
    const response = await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
    if (!response?.ok()) throw new Error(`${path} returned ${response?.status() ?? "no response"}`);
    const h1Count = await page.locator("h1").count();
    if (h1Count !== 1) throw new Error(`${path} has ${h1Count} h1 elements`);
  }

  const viewports = [
    { width: 320, height: 640 },
    { width: 360, height: 740 },
    { width: 375, height: 812 },
    { width: 390, height: 844 },
    { width: 414, height: 896 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1366, height: 768 },
    { width: 1920, height: 1080 },
  ];
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    for (const path of paths) {
      await page.goto(`${base}${path}`, { waitUntil: "domcontentloaded" });
      const sizes = await page.evaluate(() => {
        const headings = [...document.querySelectorAll("h1")].map((heading) => {
          const rect = heading.getBoundingClientRect();
          return { left: rect.left, right: rect.right };
        });
        return {
          document: document.documentElement.scrollWidth,
          viewport: window.innerWidth,
          headings,
        };
      });
      if (sizes.document > sizes.viewport)
        throw new Error(
          `Horizontal overflow on ${path} at ${viewport.width}px (${sizes.document}px content)`,
        );
      if (sizes.headings.some(({ left, right }) => left < -1 || right > viewport.width + 1))
        throw new Error(`An h1 overflows the viewport on ${path} at ${viewport.width}px`);
      if (path === "/" && viewport.width === 1920)
        await page.screenshot({ path: `${screenshotDir}/home-1920.png`, fullPage: true });
      if (path === "/" && viewport.width === 390)
        await page.screenshot({ path: `${screenshotDir}/home-390.png`, fullPage: true });
      if (path === "/" && viewport.width === 320)
        await page.screenshot({ path: `${screenshotDir}/home-320.png`, fullPage: true });
      if (viewport.width === 320 && ["/industries", "/faq", "/contact"].includes(path))
        await page.screenshot({
          path: `${screenshotDir}/${path.slice(1)}-320.png`,
          fullPage: true,
        });
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Open menu" }).click();
  if ((await page.locator("body").evaluate((body) => getComputedStyle(body).overflow)) !== "hidden")
    throw new Error("Mobile navigation did not lock background scrolling");
  await page.keyboard.press("Escape");
  if (await page.getByRole("button", { name: "Close menu" }).count())
    throw new Error("Escape did not close the mobile navigation");
  if ((await page.locator("body").evaluate((body) => getComputedStyle(body).overflow)) === "hidden")
    throw new Error("Mobile navigation did not restore background scrolling after closing");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("button", { name: "Services", exact: true }).click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "AI & Machine Learning" })
    .click();
  await page.waitForURL("**/services/ai-machine-learning");
  if (!page.url().endsWith("/services/ai-machine-learning"))
    throw new Error(`Mobile service navigation ended at ${page.url()}`);
  const mobileQuote = page.getByRole("button", { name: "Open menu" });
  await mobileQuote.click();
  const quoteLink = page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Start a Project" });
  if (!(await quoteLink.isVisible())) throw new Error("Mobile Start a Project CTA is missing");
  await quoteLink.click();
  await page.waitForURL("**/contact");

  await page.setViewportSize({ width: 320, height: 640 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.waitForTimeout(220);
  const mobileNavigation = page.getByRole("navigation", { name: "Mobile navigation" });
  for (const label of [
    "Home",
    "About",
    "Solutions",
    "Our Work",
    "Resources",
    "FAQ",
    "Start a Project",
  ]) {
    if (!(await mobileNavigation.getByRole("link", { name: label, exact: true }).isVisible()))
      throw new Error(`Mobile navigation link ${label} is not visible at 320px`);
  }
  await page.screenshot({ path: `${screenshotDir}/mobile-menu-320.png` });
  const servicesToggle = mobileNavigation.getByRole("button", { name: "Services", exact: true });
  await servicesToggle.click();
  await page.waitForTimeout(220);
  if ((await servicesToggle.getAttribute("aria-expanded")) !== "true")
    throw new Error("Mobile Services menu did not expand at 320px");
  const serviceLinks = mobileNavigation.locator("#mobile-services-links a");
  if ((await serviceLinks.count()) !== 9)
    throw new Error("Mobile Services menu is missing one or more service links");
  const industriesToggle = mobileNavigation.getByRole("button", {
    name: "Industries",
    exact: true,
  });
  await industriesToggle.click();
  if ((await industriesToggle.getAttribute("aria-expanded")) !== "true")
    throw new Error("Mobile Industries menu did not expand at 320px");
  if ((await mobileNavigation.locator("#mobile-industries-links a").count()) !== 9)
    throw new Error("Mobile Industries menu is missing one or more industry links");
  const stickyQuote = mobileNavigation.getByRole("link", { name: "Start a Project" });
  const quoteBounds = await stickyQuote.boundingBox();
  const menuBounds = await mobileNavigation.boundingBox();
  if (
    !quoteBounds ||
    !menuBounds ||
    quoteBounds.y + quoteBounds.height > menuBounds.y + menuBounds.height
  )
    throw new Error("Mobile Start a Project CTA is obscured when an accordion is expanded");
  await page.screenshot({ path: `${screenshotDir}/mobile-services-open-320.png` });
  await mobileNavigation.getByRole("link", { name: "All Industries", exact: true }).click();
  await page.waitForURL("**/industries");
  if (await page.getByRole("button", { name: "Close menu" }).count())
    throw new Error("Selecting All Industries did not close the mobile navigation");

  await page.getByRole("button", { name: "Open menu" }).click();
  const reopenedNavigation = page.getByRole("navigation", { name: "Mobile navigation" });
  await reopenedNavigation.getByRole("button", { name: "Services", exact: true }).click();
  const reopenedServiceLinks = reopenedNavigation.locator("#mobile-services-links a");
  await reopenedServiceLinks.getByText("Mobile Application Development").click();
  await page.waitForURL("**/services/mobile-app-development");
  if (await page.getByRole("button", { name: "Close menu" }).count())
    throw new Error("Selecting a mobile service did not close the menu");

  await page.goto(`${base}/faq`, { waitUntil: "networkidle" });
  const faqTab = page.getByRole("tab", { name: /Projects & development/ });
  await faqTab.click();
  if ((await faqTab.getAttribute("aria-selected")) !== "true")
    throw new Error("FAQ category tab did not activate");
  await page.getByRole("tab", { name: /General/ }).click();
  const faq = page.getByRole("button", { name: "What is SEEABLE HUB?" });
  await faq.click();
  if ((await faq.getAttribute("aria-expanded")) !== "true")
    throw new Error("FAQ accordion did not open");

  await page.goto(`${base}/contact`, { waitUntil: "networkidle" });
  const contactText = await page.locator("body").innerText();
  if (contactText.includes("78689 33309"))
    throw new Error("The WhatsApp number should not be displayed on the website");
  await page.getByRole("button", { name: "Send project enquiry" }).click();
  if ((await page.getByText("Please enter your name.").count()) !== 1)
    throw new Error("Contact form validation did not show required field errors");
  await page.getByLabel("Name").fill("Test Visitor");
  await page.getByLabel("Email").fill("visitor@example.com");
  await page.getByLabel("What would you like to build?").selectOption({ label: "Custom software" });
  await page
    .getByLabel("Tell us about your project")
    .fill("I would like to discuss a custom platform for my business.");
  await page.getByRole("button", { name: "Send project enquiry" }).click();
  const status = page.getByRole("status");
  if (!(await status.textContent())?.includes("Your message has not been sent"))
    throw new Error("Contact form did not disclose that the backend is pending");

  if (errors.length) throw new Error(`Browser errors: ${errors.join(" | ")}`);
  await page.goto(base, { waitUntil: "networkidle" });
  const whatsappFooterLink = page.locator(".footer-connect a").filter({ hasText: "WhatsApp" });
  if ((await whatsappFooterLink.innerText()).trim() !== "WhatsApp")
    throw new Error("Footer WhatsApp link should display only the WhatsApp label");
  if (!(await whatsappFooterLink.getAttribute("href"))?.includes("wa.me/917868933309"))
    throw new Error("Footer WhatsApp link does not point to the supplied number");
  console.log(
    `Passed ${paths.length} routes at ${viewports.length} viewports, mobile navigation, FAQ tabs and accordion, and contact validation.`,
  );
  console.log(
    `Screenshots: ${screenshotDir}/home-320.png, ${screenshotDir}/home-390.png, ${screenshotDir}/home-1920.png`,
  );
} finally {
  await browser.close();
}
