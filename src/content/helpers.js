/**
 * Helpers — content flags & image utilities
 */

/** YouTube video ID only (from URL: youtube.com/watch?v=THIS_PART) */
export function youtubeEmbed(videoId) {
  if (!videoId) return "";
  return `https://www.youtube.com/embed/${videoId}`;
}

export function youtubeThumbnail(videoId) {
  if (!videoId) return "";
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function localImage(path) {
  if (!path) return "";
  const clean = path.replace(/^\//, "");
  return path.startsWith("http") ? path : `/${clean}`;
}

/**
 * Local file in public/ — set enabled: true only after you add the file.
 * @example contentAsset("/images/hero/hero-bg.jpg", false, "Factory floor")
 */
export function contentAsset(path, enabled = false, alt = "") {
  return {
    path: localImage(path),
    enabled: Boolean(enabled),
    alt: alt || "",
  };
}

export function isAssetReady(asset) {
  return Boolean(asset?.enabled && asset?.path);
}

export function getAssetSrc(asset) {
  return isAssetReady(asset) ? asset.path : null;
}

export function getActiveItems(items) {
  return items.filter((item) => item.enabled !== false && item.enabled !== undefined
    ? item.enabled
    : isAssetReady(item.image) || isAssetReady(item) || Boolean(item.imageUrl));
}

/** Gallery/post style: enabled flag on item */
export function isContentEnabled(item) {
  if (item == null) return false;
  if (typeof item.enabled === "boolean") return item.enabled;
  if (item.image) return isAssetReady(item.image);
  return Boolean(item.imageUrl);
}

export function padNumber(index, total = 99) {
  const width = String(total).length;
  return String(index + 1).padStart(Math.max(2, width), "0");
}

export function nextGalleryImageId(images) {
  const ids = images.map((i) => Number(i.id)).filter(Boolean);
  return ids.length ? Math.max(...ids) + 1 : 1;
}

/** Curated machinery visuals for cards until real product photo is added */
export const machineryVisuals = {
  Sealing:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  Capping:
    "https://images.unsplash.com/photo-1581092160562-40aa08ad7881?w=800&q=80",
  Filling:
    "https://images.unsplash.com/photo-1532187867166-ab7f0283e68a?w=800&q=80",
  Packaging:
    "https://images.unsplash.com/photo-1579154204601-01588f351a24?w=800&q=80",
  Labeling:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  default:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
};

export function getCategoryVisual(category) {
  return machineryVisuals[category] || machineryVisuals.default;
}
