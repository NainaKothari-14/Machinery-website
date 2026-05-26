/**
 * COMPANY — single source of truth (edit here only)
 */
import { contentAsset } from "./helpers";

export const company = {
  name: "Mahavir Pharma Machinery",
  logo: contentAsset("/images/brand/logo.png", true, "Mahavir Pharma Machinery"),
  logoGray: contentAsset("/images/brand/logo-gray.png", true, "Mahavir Pharma Machinery"),
  city: "Vasai–Virar",
  location: "Vasai East, Vasai-Virar, Maharashtra, India",
  tagline: "Packaging machinery solutions",
  heroSubtitle:
    "Reliable machinery solutions for efficient production workflows.",
  footerBlurb:
    "Manufacturer of pharmaceutical packaging and sealing machinery.",
  aboutTitle: "About us",
  aboutBody: [
    "Mahavir Pharma Machinery specializes in manufacturing pharmaceutical packaging and sealing machinery.",
    "Focused on reliable and practical packaging machinery solutions.",
    "Established in 2003 and based in Vasai-Virar, Maharashtra.",
  ],
  workshop: {
    title: "Visit Our Workshop",
    subtitle: "Vasai East, Maharashtra",
    trustLine: "Serving customers since 2003",
  },
  addressLines: [
    "Gala No. 114",
    "Geeta Industrial Estate No. 7, K.T. Park, Sector 2",
    "Gauraipada, Vasai East",
    "Thane – 401208",
  ],
  shortDescription:
    "Manufacturer of pharmaceutical packaging and sealing machinery — bottle sealing, capping, filling, blister packaging and custom builds. Vasai East since 2003.",
  foundedYear: 2003,
  address:
    "Gala No. 114, Geeta Industrial Estate No. 7, K.T. Park, Sector 2, Gauraipada, Vasai East, Thane — 401208",
  addressShort: "Vasai–Virar, Maharashtra",
  pincode: "401208",
  phone: "+919819489960",
  phoneDisplay: "+91 98194 89960",
  email: "mahavirpharmadk@yahoo.com",
  whatsapp: "919819489960",
  workingHours: "Mon – Sat, 10:00 AM – 7:00 PM",
  instagram: "https://www.instagram.com/mahavirpharma_machinery",
  youtube: "https://www.youtube.com/@mahavirpharma_machinery",
  profiles: {
    instagram: "https://www.instagram.com/mahavirpharma_machinery",
    youtube: "https://www.youtube.com/@mahavirpharma_machinery",
    indiamart: "https://www.indiamart.com/mahavirpharmamachinery/",
    goldenpages: "http://www.goldenpages.in/mahavirpharmamachinery",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Mahavir+Pharma+Machinery+Geeta+Industrial+Estate+Vasai+East+401208",
  },
  mapsEmbed:
    "https://maps.google.com/maps?q=Gala+No.+114,+Geeta+Industrial+Estate+No.+7,+Gauraipada,+Vasai+East,+Thane+401208&hl=en&z=16&ie=UTF8&iwloc=B&output=embed",
  stats: [
    { label: "Years in business", value: "20+" },
    { label: "Based in", value: "Vasai East" },
    { label: "Machine categories", value: "7+" },
    { label: "Support", value: "Call / WhatsApp" },
  ],
  productRange: [
    "Sealing machines",
    "Bottle capping machines",
    "Filling machines",
    "Packaging & blister machines",
  ],
};

export const companyInfo = company;
