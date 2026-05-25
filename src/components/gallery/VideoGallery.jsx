import { galleryVideos } from "../../data/gallery";

function VideoGallery() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {galleryVideos.map((video) => (
        <div key={video.id} className="border border-gray-200 bg-white">
          <div className="aspect-video border-b-4 border-brand-500">
            <iframe src={video.embedUrl} title={video.title} className="h-full w-full" allowFullScreen />
          </div>
          <p className="p-4 font-display font-bold uppercase text-surface-900">{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoGallery;
