/**
 * MACHINES CATALOG — products from IndiaMART + demo videos from YouTube
 * Add machine = copy block. youtubeId = video from your channel (optional)
 */
import {
  contentAsset,
  getAssetSrc,
  getCategoryVisual,
  isAssetReady,
  youtubeEmbed,
  youtubeThumbnail,
} from "./helpers";

const machineList = [
  {
    id: "pneumatic-cap-sealing",
    name: "Pneumatic Cap Sealing Machine",
    category: "Capping",
    shortDescription:
      "Pneumatic cap sealing for bottles — consistent seals for pharma and packaging lines.",
    description:
      "Pneumatic cap sealing machine for efficient bottle cap application. Suitable for pharma, cosmetics, and industrial bottle packaging. Contact us for specifications and customization as per your bottle size.",
    image: "/images/machines/pneumatic-cap-sealing.jpg",
    youtubeId: "_FWkqS8B9F4",
    featured: true,
    specs: [
      { label: "Operation", value: "Pneumatic" },
      { label: "Use", value: "Bottle cap sealing" },
      { label: "Industry", value: "Pharma · FMCG · Packaging" },
      { label: "Support", value: "Installation guidance available" },
    ],
    applications: ["Pharma bottles", "Packaging lines", "Contract manufacturing"],
  },
  {
    id: "bottle-cap-pressing",
    name: "Bottle Cap Pressing Machine",
    category: "Capping",
    shortDescription:
      "Cap pressing machine for secure, uniform bottle closures.",
    description:
      "Bottle cap pressing machine designed for reliable cap application on production lines. Watch our YouTube demo or contact us to order with your bottle and cap specifications.",
    image: "/images/machines/bottle-cap-pressing.png",
    imageEnabled: true,
    youtubeId: "AFvKFsrHJHU",
    featured: true,
    specs: [
      { label: "Operation", value: "Semi-automatic / manual assist" },
      { label: "Cap types", value: "Screw · press-fit caps" },
      { label: "Build", value: "Industrial-grade frame" },
      { label: "Order", value: "WhatsApp / phone quote" },
    ],
    applications: ["Syrup bottles", "Oral liquids", "Cosmetic bottles"],
  },
  {
    id: "cup-sealing-aluminium-foil",
    name: "Aluminium Foil Cup Sealing Machine",
    category: "Sealing",
    shortDescription:
      "Heat-seal aluminium foil on cups and containers for hygienic, tamper-evident closure.",
    description:
      "Aluminium foil cup sealing machine for food, pharma, and dairy-style cup packaging. Delivers clean foil seals with adjustable temperature and dwell settings.",
    image: "/images/machines/cup-sealing.png",
    imageEnabled: true,
    youtubeId: "trwjJmsQ2aM",
    featured: true,
    specs: [
      { label: "Seal type", value: "Aluminium foil" },
      { label: "Application", value: "Cup · container sealing" },
      { label: "Control", value: "Temperature adjustable" },
      { label: "Demo", value: "Available on YouTube" },
    ],
    applications: ["Cup packaging", "Sample cups", "Food & pharma cups"],
  },
  {
    id: "cup-sealing-machines",
    name: "Cup Sealing Machines",
    category: "Sealing",
    shortDescription:
      "Cup sealing solutions for production and small-scale packaging units.",
    description:
      "Cup sealing machines listed on IndiaMART — ideal for manufacturers needing reliable cup closure equipment. Multiple configurations available; share your cup diameter and output requirement for a quote.",
    image: "/images/machines/cup-sealing-set.jpg",
    youtubeId: "nKwwvULBeE8",
    featured: false,
    specs: [
      { label: "Listing", value: "IndiaMART verified supplier" },
      { label: "Use", value: "Cup & container sealing" },
      { label: "Supply", value: "Manufacturer direct" },
      { label: "Location", value: "Vasai East, Maharashtra" },
    ],
    applications: ["Cup sealing lines", "Small food units", "Pharma sample packs"],
  },
  {
    id: "blister-packaging-machine",
    name: "Blister Packaging Machine",
    category: "Packaging",
    shortDescription:
      "Blister pack sealing for tablets, capsules, and strip-style pharma packaging.",
    description:
      "Blister packaging machine for heat-sealing blister packs. Suitable for pharma R&D batches and small to mid-scale strip packing. Contact for plate size and automation level.",
    image: "/images/machines/blister-packaging.jpg",
    youtubeId: "3BdNJ5-PouU",
    featured: true,
    specs: [
      { label: "Pack type", value: "Blister · strip" },
      { label: "Operation", value: "Heat seal" },
      { label: "Scale", value: "Lab to production" },
      { label: "Demo video", value: "YouTube channel" },
    ],
    applications: ["Tablet strips", "Capsule blisters", "Clinical trial packs"],
  },
  {
    id: "manual-foil-sealing",
    name: "Manual Foil Sealing Machine",
    category: "Sealing",
    shortDescription:
      "Manual foil sealing for bottles and containers — economical entry-level sealing.",
    description:
      "Manual foil sealing machine from our sealing range. Easy to operate, sturdy build, and suitable for units starting bottle sealing operations or running low volumes.",
    image: "/images/machines/manual-foil-sealing.png",
    imageEnabled: true,
    featured: false,
    specs: [
      { label: "Type", value: "Manual operation" },
      { label: "Seal", value: "Foil liner on bottle neck" },
      { label: "Footprint", value: "Compact table-top" },
      { label: "Ideal for", value: "Startups · pilot batches" },
    ],
    applications: ["Bottle foil sealing", "Ayurvedic liquids", "Cosmetics"],
  },
  {
    id: "hand-crowner-sealing",
    name: "Hand Crowner Sealing Machine",
    category: "Capping",
    shortDescription:
      "Hand crowner for ROPP and crown caps — widely used in pharma liquid lines.",
    description:
      "Hand crowner sealing machine (hand crown crimping) for applying crown caps on glass and PET bottles. A trusted product in our catalog since decades of manufacturing experience.",
    image: "/images/machines/hand-crowner.png",
    imageEnabled: true,
    featured: true,
    specs: [
      { label: "Operation", value: "Hand-operated" },
      { label: "Cap type", value: "Crown · ROPP" },
      { label: "Features", value: "Sturdy · user-friendly" },
      { label: "Also listed as", value: "Hand Crown Croding" },
    ],
    applications: ["Syrup bottles", "Beer-style crown bottles", "Glass bottles"],
  },
  {
    id: "bottle-capping-machines",
    name: "Bottle Capping Machines",
    category: "Capping",
    shortDescription:
      "Bottle capping machines for screw caps — standard and GMP models available.",
    description:
      "Bottle capping machines for pharmaceutical and packaging lines. Options include standard and GMP builds for clean-room friendly operation. Paddle-operated GMP models also available.",
    image: "/images/machines/bottle-capping.png",
    imageEnabled: true,
    featured: false,
    specs: [
      { label: "Variants", value: "Standard · GMP" },
      { label: "Cap", value: "Screw · ROPP" },
      { label: "Operation", value: "Manual to semi-auto" },
      { label: "Material", value: "SS options for GMP" },
    ],
    applications: ["Pharma bottles", "PET bottles", "Liquid formulations"],
  },
  {
    id: "pet-bottle-capping",
    name: "PET Bottle Capping Machines",
    category: "Capping",
    shortDescription:
      "Dedicated cappers for PET bottles used in pharma and beverage-style packaging.",
    description:
      "PET bottle capping machines designed for lightweight PET containers. Ensures uniform torque and minimal cap damage during production.",
    image: "/images/machines/pet-capping.jpg",
    featured: false,
    specs: [
      { label: "Bottle", value: "PET" },
      { label: "Cap types", value: "Screw caps" },
      { label: "Output", value: "As per model" },
      { label: "Customization", value: "Per bottle neck finish" },
    ],
    applications: ["PET pharma bottles", "Oral liquids", "Cosmetics"],
  },
  {
    id: "paddle-capping-gmp",
    name: "Bottle Capping Machine — Paddle Operated GMP",
    category: "Capping",
    shortDescription:
      "Paddle-operated GMP capping for hygienic pharma production areas.",
    description:
      "Paddle operated bottle capping machine built for GMP environments. Simple paddle action, easy cleaning, and consistent cap application for regulated production floors.",
    image: "/images/machines/paddle-capping-gmp.jpg",
    featured: false,
    specs: [
      { label: "Standard", value: "GMP-friendly design" },
      { label: "Operation", value: "Paddle operated" },
      { label: "Tools", value: "Capping & decapping tools available" },
      { label: "Support", value: "Spare parts & service" },
    ],
    applications: ["GMP pharma lines", "Sterile areas", "Liquid manufacturing"],
  },
  {
    id: "paste-liquid-filling",
    name: "Paste & Liquid Filling Machines",
    category: "Filling",
    shortDescription:
      "Filling machines for pastes, syrups, and oral liquids with accurate dosing.",
    description:
      "Paste and liquid filling machines for pharmaceutical and cosmetic production. Suitable for creams, syrups, suspensions, and similar products. Share fill volume and container type for the right model.",
    image: "/images/machines/paste-liquid-filling.jpg",
    featured: true,
    specs: [
      { label: "Products", value: "Paste · liquid" },
      { label: "Containers", value: "Bottles · jars" },
      { label: "Accuracy", value: "Model-dependent dosing" },
      { label: "Related", value: "Liquid filling machine" },
    ],
    applications: ["Cough syrups", "Creams & ointments", "Suspensions"],
  },
  {
    id: "multi-jaw-sealer",
    name: "Multi Jaw Sealer Machine",
    category: "Sealing",
    shortDescription:
      "Multi-jaw sealer for optimum seal results on pouches and packaging formats.",
    description:
      "Multi jaw sealer machine — reputed in the market for wide assortment, affordable rates, and professional support. Features include easy installation, dimensional accuracy, fine finish, smooth operation, and sturdy design.",
    image: "/images/machines/multi-jaw-sealer.jpg",
    featured: false,
    specs: [
      { label: "Design", value: "Multi-jaw for optimum sealing" },
      { label: "Finish", value: "Fine industrial finish" },
      { label: "Operation", value: "Smooth · user-friendly" },
      { label: "Availability", value: "In stock (IndiaMART)" },
    ],
    applications: ["Pouch sealing", "Packaging lines", "Industrial sealing"],
  },
  {
    id: "tube-crimping",
    name: "Tube Crimping Machines",
    category: "Packaging",
    shortDescription:
      "Tube crimping for ointment, cream, and gel-filled laminate tubes.",
    description:
      "Tube crimping machines for sealing metal or plastic tubes after filling. Used in pharma and cosmetic tube packaging lines.",
    image: "/images/machines/tube-crimping.jpg",
    featured: false,
    specs: [
      { label: "Use", value: "Tube end crimping" },
      { label: "Products", value: "Ointment · cream · gel" },
      { label: "Type", value: "Manual / semi-auto options" },
      { label: "Build", value: "Sturdy industrial frame" },
    ],
    applications: ["Ointment tubes", "Cosmetic tubes", "Dental cream tubes"],
  },
  {
    id: "motorised-mini-printer",
    name: "Motorised Mini Printer",
    category: "Labeling",
    shortDescription:
      "Batch printing on packaging — batch no., MRP, and date coding for pharma packs.",
    description:
      "Motorised mini printer for batch printing on labels, cartons, and packaging. Part of our long-standing product range alongside gumming and sealing equipment.",
    image: "/images/machines/mini-printer.jpg",
    featured: false,
    specs: [
      { label: "Function", value: "Batch / date printing" },
      { label: "Operation", value: "Motorised" },
      { label: "Use", value: "Pharma packaging compliance" },
      { label: "Related", value: "Hand operated mini printer" },
    ],
    applications: ["Batch coding", "Carton printing", "Strip packs"],
  },
  {
    id: "motorised-gumming-machine",
    name: "Motorised Gumming Machine",
    category: "Labeling",
    shortDescription:
      "Label gumming (glue applicator) for efficient sticker application on bottles and cartons.",
    description:
      "Motorised gumming machine — also listed as motorized label gumming glue applicator. Applies adhesive for label application in pharma and packaging lines.",
    image: "/images/machines/gumming-machine.jpg",
    featured: false,
    specs: [
      { label: "Function", value: "Glue / gum application" },
      { label: "Operation", value: "Motorised" },
      { label: "Also known as", value: "Label gumming machine" },
      { label: "Pair with", value: "Labeling workflow" },
    ],
    applications: ["Bottle labeling prep", "Carton labeling", "Packaging lines"],
  },
  {
    id: "screw-cap-pp-sealing",
    name: "Screw Cap & PP Cap Sealing Machine",
    category: "Capping",
    shortDescription:
      "Screw cap and PP cap sealing for bottles — core product since 2003.",
    description:
      "Screw caps and PP cap sealing machine — among our flagship products since establishment in 2003. Serving Indian and global markets with machines built to your specification and quality controls.",
    image: "/images/machines/screw-pp-capping.jpg",
    featured: false,
    specs: [
      { label: "Caps", value: "Screw · PP" },
      { label: "Experience", value: "Since 2003" },
      { label: "Supply", value: "Custom specs welcome" },
      { label: "Market", value: "India & export" },
    ],
    applications: ["Pharma bottles", "PP caps", "Global distributors"],
  },
];

function normalizeMachine(m) {
  const localImage = contentAsset(m.image, m.imageEnabled ?? false, m.name);
  const photoSrc = getAssetSrc(localImage);
  return {
    ...m,
    localImage,
    hasPhoto: isAssetReady(localImage),
    cardImage:
      photoSrc ||
      (m.youtubeId ? youtubeThumbnail(m.youtubeId) : getCategoryVisual(m.category)),
    embedUrl: m.youtubeId ? youtubeEmbed(m.youtubeId) : undefined,
    hasVideo: Boolean(m.youtubeId),
  };
}

export const machines = machineList.map(normalizeMachine);

export const machineCategories = [
  "All",
  ...[...new Set(machines.map((m) => m.category))].sort(),
];

export function getMachineById(id) {
  return machines.find((m) => m.id === id);
}

/** Card & list thumbnails — category visual until real photo enabled */
export function getMachineImage(machine) {
  if (!machine) return "";
  if (machine.hasPhoto) return machine.localImage.path;
  return machine.cardImage || "";
}

/** Detail page: product photo (top) + demo video (below) when available */
export function getMachineDetailMedia(machine) {
  if (!machine) {
    return {
      hasPhoto: false,
      photoSrc: null,
      hasVideo: false,
      embedUrl: null,
      youtubeId: null,
    };
  }
  return {
    hasPhoto: Boolean(machine.hasPhoto),
    photoSrc: machine.hasPhoto ? machine.localImage.path : null,
    hasVideo: Boolean(machine.hasVideo),
    embedUrl: machine.embedUrl || null,
    youtubeId: machine.youtubeId || null,
  };
}

export function hasMachineDetailMedia(machine) {
  const media = getMachineDetailMedia(machine);
  return media.hasPhoto || media.hasVideo;
}

export function getFeaturedMachines() {
  return machines.filter((m) => m.featured);
}
