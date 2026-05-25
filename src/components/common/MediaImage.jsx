import { useState } from "react";

/**
 * Shows local image from public/; falls back if file missing (no UI code change needed).
 */
function MediaImage({ src, fallback, alt = "", className = "", ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (fallback && imgSrc !== fallback) setImgSrc(fallback);
      }}
      {...props}
    />
  );
}

export default MediaImage;
