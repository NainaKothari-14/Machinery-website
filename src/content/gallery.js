/**
 * GALLERY — YouTube demos + Instagram/local photos by category
 * Categories: Machines | Production | Installation | Workshop
 */
import {
  contentAsset,
  nextGalleryImageId,
  youtubeEmbed,
  youtubeThumbnail,
} from "./helpers";

export const galleryCategories = [
  "All",
  "Machines",
  "Production",
  "Installation",
  "Workshop",
];

const galleryImageList = [
  {
    id: 1,
    enabled: true,
    youtubeId: "_FWkqS8B9F4",
    alt: "Pneumatic cap sealing machine",
    category: "Machines",
  },
  {
    id: 2,
    enabled: true,
    youtubeId: "AFvKFsrHJHU",
    alt: "Bottle cap pressing machine",
    category: "Production",
  },
  {
    id: 3,
    enabled: true,
    youtubeId: "trwjJmsQ2aM",
    alt: "Aluminium foil cup sealing machine",
    category: "Machines",
  },
  {
    id: 4,
    enabled: true,
    youtubeId: "3BdNJ5-PouU",
    alt: "Blister packaging machine",
    category: "Production",
  },
  {
    id: 5,
    enabled: true,
    youtubeId: "nKwwvULBeE8",
    alt: "Cup sealing machines at work",
    category: "Installation",
  },
  {
    id: 6,
    enabled: false,
    image: contentAsset("/images/gallery/workshop.jpg", false, "Workshop"),
    alt: "Our workshop",
    category: "Workshop",
  },
];

export const galleryImages = galleryImageList
  .filter((item) => item.enabled)
  .map((item) => ({
    id: item.id,
    alt: item.alt || item.category,
    category: item.category,
    src: item.youtubeId ? youtubeThumbnail(item.youtubeId) : item.image?.path,
    youtubeId: item.youtubeId,
    link: item.youtubeId
      ? `https://www.youtube.com/watch?v=${item.youtubeId}`
      : null,
  }));

export function hasGalleryPhotos() {
  return galleryImages.length > 0;
}

const galleryVideoList = [
  { id: "pneumatic-cap-sealing", title: "Pneumatic Cap Sealing Machine", youtubeId: "_FWkqS8B9F4" },
  { id: "bottle-cap-pressing", title: "Bottle Cap Pressing Machine", youtubeId: "AFvKFsrHJHU" },
  { id: "blister-packaging", title: "Blister Packaging Machine", youtubeId: "3BdNJ5-PouU" },
  { id: "cup-sealing-foil", title: "Aluminium Foil Cup Sealing Machine", youtubeId: "trwjJmsQ2aM" },
  { id: "cup-sealing-indiamart", title: "Cup Sealing Machines", youtubeId: "nKwwvULBeE8" },
];

export const galleryVideos = galleryVideoList.map((video) => ({
  ...video,
  embedUrl: youtubeEmbed(video.youtubeId),
  thumbnail: youtubeThumbnail(video.youtubeId),
  watchUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
}));

export function hasGalleryVideos() {
  return galleryVideos.length > 0;
}

export { nextGalleryImageId };
