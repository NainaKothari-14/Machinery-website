/**
 * GALLERY — real thumbnails from your YouTube uploads
 * Local photos: set enabled + add file in public/images/gallery/
 */
import {
  contentAsset,
  nextGalleryImageId,
  youtubeEmbed,
  youtubeThumbnail,
} from "./helpers";

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
    category: "Machines",
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
    category: "Machines",
  },
  {
    id: 5,
    enabled: true,
    youtubeId: "nKwwvULBeE8",
    alt: "Cup sealing machines",
    category: "Machines",
  },
  {
    id: 6,
    enabled: false,
    image: contentAsset("/images/gallery/workshop.jpg", false, "Workshop"),
    category: "Factory",
  },
];

export const galleryImages = galleryImageList
  .filter((item) => item.enabled)
  .map((item) => ({
    id: item.id,
    alt: item.alt || item.image?.alt || item.category,
    category: item.category,
    src: item.youtubeId
      ? youtubeThumbnail(item.youtubeId)
      : item.image?.path,
    youtubeId: item.youtubeId,
  }));

export function getGalleryImageSrc(item) {
  return item.src;
}

export function hasGalleryPhotos() {
  return galleryImages.length > 0;
}

const galleryVideoList = [
  {
    id: "pneumatic-cap-sealing",
    title: "Pneumatic Cap Sealing Machine",
    youtubeId: "_FWkqS8B9F4",
  },
  {
    id: "bottle-cap-pressing",
    title: "Bottle Cap Pressing Machine",
    youtubeId: "AFvKFsrHJHU",
  },
  {
    id: "blister-packaging",
    title: "Blister Packaging Machine",
    youtubeId: "3BdNJ5-PouU",
  },
  {
    id: "cup-sealing-foil",
    title: "Aluminium Foil Cup Sealing Machine",
    youtubeId: "trwjJmsQ2aM",
  },
  {
    id: "cup-sealing-indiamart",
    title: "Cup Sealing Machines",
    youtubeId: "nKwwvULBeE8",
  },
];

export const galleryVideos = galleryVideoList.map((video) => ({
  ...video,
  embedUrl: youtubeEmbed(video.youtubeId),
  thumbnail: youtubeThumbnail(video.youtubeId),
}));

export function hasGalleryVideos() {
  return galleryVideos.length > 0;
}

export { nextGalleryImageId };
