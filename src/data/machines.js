export const machineCategories = [
  "All",
  "Sealing",
  "Capping",
  "Labeling",
  "Filling",
  "Packaging",
];

export const machines = [
  {
    id: "automatic-bottle-sealer",
    name: "Automatic Bottle Sealing Machine",
    category: "Sealing",
    shortDescription:
      "High-speed induction sealing for pharma bottles with consistent seal quality.",
    description:
      "Our automatic bottle sealing machine is built for pharmaceutical lines that need reliable induction seals on PET and glass bottles. Adjustable conveyor speed, digital temperature control, and sturdy SS frame for long production runs.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    featured: true,
    specs: [
      { label: "Output", value: "40–80 bottles/min" },
      { label: "Bottle size", value: "50 ml – 1 L" },
      { label: "Power", value: "2.2 kW, 220V/380V" },
      { label: "Material", value: "SS 304 contact parts" },
    ],
    applications: [
      "Tablet syrup bottles",
      "Ayurvedic liquids",
      "Cosmetic & pharma oral liquids",
    ],
  },
  {
    id: "semi-auto-capping-machine",
    name: "Semi-Automatic Capping Machine",
    category: "Capping",
    shortDescription:
      "Torque-controlled screw capping for ROPP and screw caps on pharma bottles.",
    description:
      "Ideal for units scaling from manual capping. Operators place bottles; the machine applies uniform torque to avoid cap damage while maintaining line speed.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08ad7881?w=800&q=80",
    featured: true,
    specs: [
      { label: "Output", value: "20–35 bottles/min" },
      { label: "Cap type", value: "ROPP / screw caps" },
      { label: "Power", value: "1.5 kW" },
      { label: "Footprint", value: "Compact bench model" },
    ],
    applications: ["Syrup bottles", "Suspensions", "Hair oil & tonics"],
  },
  {
    id: "sticker-labeling-machine",
    name: "Round Bottle Sticker Labeling Machine",
    category: "Labeling",
    shortDescription:
      "Wrap-around labeling with accurate registration for round pharma bottles.",
    description:
      "Applies front/back or full-wrap labels on round containers. Synchronized speed matching with upstream filling or sealing lines.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    featured: true,
    specs: [
      { label: "Output", value: "50–120 bottles/min" },
      { label: "Label height", value: "20–120 mm" },
      { label: "Accuracy", value: "± 1 mm" },
      { label: "Control", value: "PLC + HMI" },
    ],
    applications: ["Pharma bottles", "Herbal products", "Beverage samples"],
  },
  {
    id: "liquid-filling-machine",
    name: "Volumetric Liquid Filling Machine",
    category: "Filling",
    shortDescription:
      "Accurate volumetric filling for syrups, suspensions, and oral liquids.",
    description:
      "Piston or pump-based filling with drip-free nozzles. Quick changeover between bottle sizes for multi-SKU pharma units.",
    image:
      "https://images.unsplash.com/photo-1532187867166-ab7f0283e68a?w=800&q=80",
    featured: false,
    specs: [
      { label: "Output", value: "15–40 bottles/min" },
      { label: "Fill volume", value: "30 ml – 500 ml" },
      { label: "Accuracy", value: "± 1%" },
      { label: "Nozzles", value: "2 / 4 / 6 head options" },
    ],
    applications: ["Cough syrups", "Tonics", "Liquid supplements"],
  },
  {
    id: "blister-pack-sealer",
    name: "Blister Pack Heat Sealing Unit",
    category: "Packaging",
    shortDescription:
      "Table-top heat sealing for small blister packs and strip packaging trials.",
    description:
      "Suitable for R&D batches and small-scale strip packing. Temperature and dwell time adjustable for different foil laminates.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351a24?w=800&q=80",
    featured: false,
    specs: [
      { label: "Seal area", value: "Custom plate sizes" },
      { label: "Power", value: "1.2 kW" },
      { label: "Type", value: "Manual / semi-auto" },
      { label: "Use", value: "Lab & pilot batches" },
    ],
    applications: ["Tablet strips", "Sample packs", "Clinical trial packs"],
  },
  {
    id: "induction-sealer-handheld",
    name: "Handheld Induction Sealer",
    category: "Sealing",
    shortDescription:
      "Portable induction sealing for startups and low-volume pharma lines.",
    description:
      "Lightweight unit for sealing aluminium foil liners on bottle necks. Perfect when you are not ready for a full automatic line.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    featured: false,
    specs: [
      { label: "Output", value: "Manual pace" },
      { label: "Cap diameter", value: "20–53 mm" },
      { label: "Power", value: "1.8 kW" },
      { label: "Weight", value: "Easy to move" },
    ],
    applications: ["Startup pharma", "Contract packing", "Testing batches"],
  },
];

export function getMachineById(id) {
  return machines.find((m) => m.id === id);
}

export function getFeaturedMachines() {
  return machines.filter((m) => m.featured);
}
