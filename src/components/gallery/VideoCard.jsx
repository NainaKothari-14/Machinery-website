function VideoCard({ video }) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="aspect-video overflow-hidden rounded-t-2xl border-b-2 border-brand-500/80 bg-black">
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
