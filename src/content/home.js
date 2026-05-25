/**
 * HOME PAGE sections — copy & toggles
 */
import { company } from "./company";
import { contentAsset } from "./helpers";

export const homeContent = {
  hero: {
    headline: company.name,
    line2: "Manufacturer of Pharmaceutical",
    line3: "Packaging & Sealing Machines",
    subtitle: company.heroSubtitle,
    background:
      "https://images.unsplash.com/photo-1565193566170-24250aa709f4?w=1920&q=85",
    localBackground: contentAsset("/images/hero/hero-bg.jpg", false, "Workshop"),
    buttons: {
      primary: { label: "Explore Machines", link: "/machines" },
      secondary: { label: "Contact Us", link: "/contact" },
    },
  },

  trustStrip: {
    title: "Trusted by manufacturers in",
    partners: ["Pharma", "Ayurvedic", "Cosmetics", "Contract Pack", "Liquids"],
  },

  about: {
    eyebrow: company.aboutTitle,
    title: company.name,
    paragraphs: company.aboutBody,
    button: { label: "More about us", link: "/about" },
    showPostsPreview: true,
    postsPreviewLimit: 3,
    localImage: contentAsset("/images/about/workshop.jpg", false, "Workshop"),
  },

  featuredMachines: {
    eyebrow: "Our machines",
    title: "Machines we build",
    description:
      "Real demos from our YouTube channel — tap a machine for details, applications and video.",
    button: { label: "View all machines", link: "/machines" },
  },

  machinesInOperation: {
    eyebrow: "In action",
    title: "Watch our machines",
    description: "See equipment running — from our YouTube channel.",
    button: { label: "Full gallery", link: "/gallery#videos" },
    maxVideos: 3,
  },

  cta: {
    title: "Need a machine for your line?",
    description: `Call ${company.phoneDisplay} or message on WhatsApp for price and recommendation.`,
    buttons: {
      primary: { label: "Contact us", link: "/contact" },
    },
  },
};

export function getHeroBackground() {
  const { hero } = homeContent;
  if (hero.localBackground?.enabled) return hero.localBackground.path;
  return hero.background || null;
}
