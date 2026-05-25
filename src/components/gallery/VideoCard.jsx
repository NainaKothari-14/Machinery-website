import MediaImage from "../common/MediaImage";

function VideoCard({ video }) {
  return (
    <div className="overflow-hidden border border-gray-200 bg-white">
      <div className="aspect-video border-b-4 border-brand-500 bg-black">
        <iframe
          src={video.embedUrl}
          title={video.title}
          className="h-full w-full"
          allowFullScreen
        />
      </div>
      <p className="p-4 font-display text-base font-bold uppercase text-surface-900 sm:p-5">
        {video.title}
      </p>
    </div>
  );
}

export default VideoCard;
