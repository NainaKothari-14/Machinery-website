/**
 * SERVICES (home page cards) — aligned with product categories
 */
import { padNumber } from "./helpers";
import { getMachineImage, machines } from "./machines";

const byId = (id) => machines.find((m) => m.id === id);

const servicesList = [
  {
    title: "Sealing machines",
    description:
      "Manual foil sealing, cup sealing, aluminium foil cup sealers, and multi-jaw sealers — built for consistent pharma and packaging seals.",
    image: getMachineImage(byId("cup-sealing-aluminium-foil")) || "/images/services/sealing.jpg",
    link: "/machines?category=Sealing",
  },
  {
    title: "Bottle capping",
    description:
      "Pneumatic cap sealing, bottle cap pressing, hand crowner, PET capping, and GMP paddle-operated machines for screw and PP caps.",
    image: getMachineImage(byId("pneumatic-cap-sealing")) || "/images/services/capping.jpg",
    link: "/machines?category=Capping",
  },
  {
    title: "Filling machines",
    description:
      "Paste and liquid filling machines for syrups, suspensions, creams, and oral liquids — accurate dosing for your container size.",
    image: getMachineImage(byId("paste-liquid-filling")) || "/images/services/filling.jpg",
    link: "/machines?category=Filling",
  },
  {
    title: "Blister & packaging",
    description:
      "Blister packaging machines, tube crimping, and packaging solutions for tablets, tubes, and small-batch pharma packs.",
    image: getMachineImage(byId("blister-packaging-machine")) || "/images/services/packaging.jpg",
    link: "/machines?category=Packaging",
    highlightCta: true,
  },
  {
    title: "Printers & gumming",
    description:
      "Motorised mini printers for batch coding and motorized gumming machines for label application on bottles and cartons.",
    image: getMachineImage(byId("motorised-gumming-machine")) || "/images/services/labeling.jpg",
    link: "/machines?category=Labeling",
  },
  {
    title: "Watch demos on YouTube",
    description:
      "All machine videos are on our Gallery page — no duplicate players on the home page.",
    image: getMachineImage(byId("bottle-cap-pressing")) || "/images/services/demos.jpg",
    link: "/gallery#videos",
  },
];

export const services = servicesList.map((item, index) => ({
  ...item,
  num: padNumber(index),
}));
