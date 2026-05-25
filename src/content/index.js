/**
 * SITE CONTENT — single entry point
 * Edit files in src/content/ only. UI reads from here automatically.
 */
export { company, companyInfo } from "./company";
export {
  machines,
  machineCategories,
  getMachineById,
  getFeaturedMachines,
  getMachineImage,
  getMachineDetailMedia,
} from "./machines";
export { services } from "./services";
export {
  galleryImages,
  galleryVideos,
  getGalleryImageSrc,
  hasGalleryPhotos,
  hasGalleryVideos,
  nextGalleryImageId,
} from "./gallery";
export { posts, getActivePosts, hasActivePosts, getPostImageSrc } from "./posts";
export {
  contentAsset,
  isAssetReady,
  getAssetSrc,
  machineryVisuals,
  getCategoryVisual,
} from "./helpers";
export { homeContent, getHeroBackground, getHeroFeaturedMachine } from "./home";
export { testimonials, trustBadges, processSteps } from "./testimonials";
export { navLinks, pageMeta, socials } from "./navigation";
export { youtubeEmbed, youtubeThumbnail, localImage, padNumber } from "./helpers";

import { company } from "./company";
import { navLinks } from "./navigation";
import { machines } from "./machines";
import { services } from "./services";
import { galleryImages, galleryVideos } from "./gallery";
import { homeContent } from "./home";
import { testimonials, processSteps, trustBadges } from "./testimonials";
import { pageMeta, socials } from "./navigation";

export const siteContent = {
  company,
  navLinks,
  machines,
  services,
  galleryImages,
  galleryVideos,
  home: homeContent,
  testimonials,
  processSteps,
  trustBadges,
  pageMeta,
  socials,
};

export default siteContent;
