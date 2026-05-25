/**
 * SOCIAL POSTS — real images from YouTube channel (same as your video demos)
 * Replace imageUrl with Instagram image path when you save posts locally.
 */
import { contentAsset, youtubeThumbnail } from "./helpers";
import { company } from "./company";

const postList = [
  {
    id: "post-pneumatic",
    enabled: true,
    imageUrl: youtubeThumbnail("_FWkqS8B9F4"),
    image: contentAsset("/images/posts/pneumatic-sealer.jpg", false, "Pneumatic cap sealing"),
    caption: "Pneumatic cap sealing machine — contact us to order for your packaging line.",
    link: "https://www.youtube.com/watch?v=_FWkqS8B9F4",
    source: "YouTube",
  },
  {
    id: "post-cap-pressing",
    enabled: true,
    imageUrl: youtubeThumbnail("AFvKFsrHJHU"),
    image: contentAsset("/images/posts/cap-pressing.jpg", false, "Bottle cap pressing"),
    caption: "Bottle cap pressing machine — like & subscribe, contact us to order.",
    link: "https://www.youtube.com/watch?v=AFvKFsrHJHU",
    source: "YouTube",
  },
  {
    id: "post-cup-sealer",
    enabled: true,
    imageUrl: youtubeThumbnail("trwjJmsQ2aM"),
    image: contentAsset("/images/posts/cup-sealer.jpg", false, "Cup sealing"),
    caption: "Aluminium foil cup sealing machine — clean seals for food & pharma cups.",
    link: "https://www.youtube.com/watch?v=trwjJmsQ2aM",
    source: "YouTube",
  },
  {
    id: "post-blister",
    enabled: true,
    imageUrl: youtubeThumbnail("3BdNJ5-PouU"),
    image: contentAsset("/images/posts/blister-pack.jpg", false, "Blister packaging"),
    caption: "Blister packaging machine — contact to order for tablet & strip packing.",
    link: "https://www.youtube.com/watch?v=3BdNJ5-PouU",
    source: "YouTube",
  },
  {
    id: "post-cup-indiamart",
    enabled: true,
    imageUrl: youtubeThumbnail("nKwwvULBeE8"),
    image: contentAsset("/images/posts/cup-indiamart.jpg", false, "Cup sealing machines"),
    caption: "Cup sealing machines — available on IndiaMART. Call or WhatsApp to enquire.",
    link: "https://www.youtube.com/watch?v=nKwwvULBeE8",
    source: "YouTube",
  },
  {
    id: "post-instagram-more",
    enabled: false,
    imageUrl: null,
    image: contentAsset("/images/posts/instagram-1.jpg", false, "From Instagram"),
    caption: "Add your Instagram post caption here.",
    link: company.profiles.instagram,
    source: "Instagram",
  },
];

export const posts = postList;

export function getPostImageSrc(post) {
  if (post.image?.enabled && post.image?.path) return post.image.path;
  return post.imageUrl || null;
}

export function getActivePosts(limit) {
  const active = posts.filter((p) => p.enabled && getPostImageSrc(p));
  return limit ? active.slice(0, limit) : active;
}

export function hasActivePosts() {
  return getActivePosts().length > 0;
}
