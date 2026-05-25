import { company } from "./company";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Machines", path: "/machines" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const pageMeta = {
  machines: {
    eyebrow: "Catalog",
    title: "Our machines",
    description:
      "Browse sealing, capping, labeling and filling equipment. Call or WhatsApp for price.",
  },
  gallery: {
    eyebrow: "Portfolio",
    title: "Gallery",
    description:
      "Machine demos from our YouTube channel — sealing, capping, cup sealing, blister packaging & more.",
  },
  about: {
    eyebrow: "Company",
    title: "About us",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Contact us",
    description: "Share your requirement — we call or email you back.",
  },
};

/** Social profiles — edit URLs here only */
export const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/mahavirpharma_machinery",
    label: "Follow on Instagram",
    handle: "@mahavirpharma_machinery",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@mahavirpharma_machinery",
    label: "Watch machine demos on YouTube",
    handle: "@mahavirpharma_machinery",
  },
  {
    name: "WhatsApp",
    url: `https://wa.me/${company.whatsapp}`,
    label: "Chat on WhatsApp",
  },
];
