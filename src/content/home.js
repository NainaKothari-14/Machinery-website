/**
 * HOME PAGE — hero uses public/images/hero/hero-bg.jpg (Figma-style full bleed)
 */
import { company } from "./company";
import { getFeaturedMachines } from "./machines";
import { contentAsset } from "./helpers";

export const homeContent = {
  hero: {
    badge: `Welcome to ${company.name}`,
    title: "Precision",
    titleHighlight: "pharma packaging",
    titleEnd: "machines",
    subtitle: company.tagline,
    /** Plain industrial photo — no text in image. Enable local file only with a clean workshop photo. */
    background:
      "https://images.unsplash.com/photo-1565193566170-24250aa709f4?w=1920&q=85",
    localBackground: contentAsset(
      "/images/hero/hero-bg.jpg",
      false,
      "Mahavir Pharma Machinery workshop"
    ),
    buttons: {
      primary: { label: "Get started", link: "/machines" },
      secondary: { label: "Request a quote", link: "/contact" },
      video: { label: "Watch demos", link: "/gallery#videos" },
    },
    featuredMachineId: null,
  },

  trustStrip: {
    title: "Trusted by manufacturers in",
    partners: ["Pharma", "Ayurvedic", "Cosmetics", "Contract Pack", "Liquids"],
  },

  about: {
    eyebrow: "About company",
    title: "Pharma packaging machines since 1990",
    localImage: contentAsset("/images/about/workshop.jpg", false, "Our workshop"),
    points: [
      "Sealing, capping, filling & blister packaging",
      "Also on IndiaMART — 11+ years verified supplier",
      "Real photos & demos from our YouTube & Instagram",
    ],
    button: { label: "More about us", link: "/about" },
    showPostsPreview: true,
    postsPreviewLimit: 3,
  },

  services: {
    title: "Our services",
    description:
      "Manufacturer of sealing machines, bottle cappers, fillers, cup sealers, blister packers, and batch printers — Vasai East, Vasai-Virar.",
    bottomButton: { label: company.name, link: "/contact" },
  },

  featuredMachines: {
    eyebrow: "Our projects",
    title: "Featured machines",
    description: "Browse our catalog — call or WhatsApp for price and customization.",
    button: { label: "View all", link: "/machines" },
  },

  process: {
    eyebrow: "Work process",
    title: "How we work with you",
  },

  whyChooseUs: {
    eyebrow: "Why choose us",
    title: "Why manufacturers trust us",
    description: (year) =>
      `Since ${year}, we deliver reliable machines with clear pricing and honest support.`,
    localImage: contentAsset("/images/about/why-us.jpg", false, "Machine in production"),
    points: company.productRange.slice(0, 4),
    buttons: {
      primary: { label: "Contact us today", link: "/contact" },
    },
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "What our clients say",
  },

  videos: {
    showOnHome: false,
    eyebrow: "Video gallery",
    title: "Machines in operation",
    description: "Watch real demos on our YouTube channel.",
    button: { label: "View all demos", link: "/gallery#videos" },
  },

  cta: {
    title: "Ready to upgrade your packaging line?",
    description:
      "Call or message us for machine recommendation and price — we respond within one business day.",
    buttons: {
      primary: { label: "Request a quote", link: "/contact" },
    },
  },
};

export function getHeroBackground() {
  const { hero } = homeContent;
  if (hero.localBackground?.enabled) {
    return hero.localBackground.path;
  }
  return hero.background || null;
}

export function getHeroFeaturedMachine() {
  const { featuredMachineId } = homeContent.hero;
  const list = getFeaturedMachines();
  if (featuredMachineId) {
    return list.find((m) => m.id === featuredMachineId) || list[0];
  }
  return list[0];
}
