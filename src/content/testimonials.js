/**
 * TESTIMONIALS, PROCESS STEPS, TRUST BADGES
 */
import { padNumber } from "./helpers";

export const testimonials = [
  {
    id: 1,
    quote:
      "Their sealing machine runs stable on our syrup line. Installation support was quick and the team explained everything clearly.",
    author: "R. Patel",
    role: "Production Manager",
    company: "Ayurvedic Pharma Unit, Gujarat",
  },
  {
    id: 2,
    quote:
      "We upgraded from manual capping to their semi-auto unit. Output improved and cap damage dropped noticeably within the first month.",
    author: "S. Sharma",
    role: "Plant Owner",
    company: "Liquid Formulation Facility",
  },
  {
    id: 3,
    quote:
      "Good machines at fair price. WhatsApp support for spare parts is helpful when we need fast answers on the shop floor.",
    author: "M. Khan",
    role: "Operations Head",
    company: "Contract Packaging, Maharashtra",
  },
];

export const trustBadges = [
  "Made in India",
  "Pharma-grade build",
  "On-site installation",
  "Spare parts support",
  "Custom output options",
];

const processStepsList = [
  {
    title: "Share your requirement",
    description: "Tell us bottle size, product type, and target output per minute.",
  },
  {
    title: "Machine recommendation",
    description: "We suggest the right model or customization for your line.",
  },
  {
    title: "Demo & quotation",
    description: "View machine video or visit workshop. Receive clear pricing.",
  },
  {
    title: "Delivery & support",
    description: "Installation guidance, training, and after-sales phone support.",
  },
];

export const processSteps = processStepsList.map((step, index) => ({
  ...step,
  step: padNumber(index),
}));
