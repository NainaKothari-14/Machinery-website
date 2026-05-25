import { galleryVideos } from "../../content/gallery";
import VideoCard from "./VideoCard";

function VideoGallery() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {galleryVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoGallery;
