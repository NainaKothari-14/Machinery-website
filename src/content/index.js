/**
 * SITE CONTENT — single entry point
 */
export { company, companyInfo } from "./company";
export {
  machines,
  machineCategories,
  getMachineById,
  getFeaturedMachines,
  getMachineImage,
  getMachineDetailMedia,
  hasMachineDetailMedia,
} from "./machines";
export { whatWeDo } from "./whatWeDo";
export { whyChooseUs } from "./whyChooseUs";
export {
  galleryPhotos,
  galleryVideos,
  hasGalleryPhotos,
  hasGalleryVideos,
} from "./gallery";
export { homeContent, getHeroBackground } from "./home";
export { posts, getActivePosts, hasActivePosts, getPostImageSrc } from "./posts";
export { navLinks, pageMeta, socials } from "./navigation";
export {
  youtubeEmbed,
  youtubeThumbnail,
  contentAsset,
  isAssetReady,
  getAssetSrc,
} from "./helpers";

import { company } from "./company";
import { navLinks, pageMeta, socials } from "./navigation";
import { machines } from "./machines";
import { whatWeDo } from "./whatWeDo";
import { galleryPhotos, galleryVideos } from "./gallery";
import { homeContent } from "./home";
import { whyChooseUs } from "./whyChooseUs";
import { posts } from "./posts";

export const siteContent = {
  company,
  navLinks,
  machines,
  whatWeDo,
  galleryPhotos,
  galleryVideos,
  home: homeContent,
  whyChooseUs,
  posts,
  pageMeta,
  socials,
};

export default siteContent;
