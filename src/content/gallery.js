/**
 * GALLERY — local product photos + YouTube demos (separate sections)
 */
import { contentAsset, youtubeEmbed, youtubeThumbnail } from "./helpers";

const galleryPhotoList = [
  {
    id: 7,
    enabled: true,
    image: contentAsset("/images/gallery/bottle-cap-pressing.png", true, "Bottle cap pressing machine"),
    alt: "Bottle cap pressing machine",
  },
  {
    id: 8,
    enabled: true,
    image: contentAsset("/images/gallery/manual-foil-sealing.png", true, "Manual foil sealing machine"),
    alt: "Manual foil sealing machine",
  },
  {
    id: 9,
    enabled: true,
    image: contentAsset("/images/gallery/hand-crowner.png", true, "Hand crowner sealing machine"),
    alt: "Hand crowner sealing machine",
  },
  {
    id: 10,
    enabled: true,
    image: contentAsset("/images/gallery/bottle-capping.png", true, "Bottle capping machine"),
    alt: "Bottle capping machine",
  },
  {
    id: 11,
    enabled: true,
    image: contentAsset("/images/gallery/cup-sealing.png", true, "Cup sealing machine"),
    alt: "Cup sealing machine",
  },
];

export const galleryPhotos = galleryPhotoList
  .filter((item) => item.enabled && item.image?.enabled)
  .map((item) => ({
    id: item.id,
    alt: item.alt,
    src: item.image.path,
  }));

export function hasGalleryPhotos() {
  return galleryPhotos.length > 0;
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
