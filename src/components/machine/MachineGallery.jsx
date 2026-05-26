import { getMachineDetailMedia } from "../../content/machines";
import MediaImage from "../common/MediaImage";

export function MachinePhoto({ machine }) {
  const { hasPhoto, photoSrc } = getMachineDetailMedia(machine);
  if (!hasPhoto) return null;

  return (
    <div className="glass-card overflow-hidden">
      <MediaImage
        src={photoSrc}
        alt={machine.name}
        className="h-64 w-full object-contain bg-gray-50/80 p-4 sm:h-72 lg:max-h-[22rem]"
      />
      <p className="border-t border-gray-100/80 bg-white/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 backdrop-blur-sm">
        Product photo
      </p>
    </div>
  );
}

export function MachineVideo({ machine }) {
  const { hasVideo, embedUrl, youtubeId } = getMachineDetailMedia(machine);
  if (!hasVideo) return null;

  return (
    <div className="glass-card overflow-hidden">
      <p className="border-b border-gray-100/80 bg-white/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 backdrop-blur-sm">
        Demo video
      </p>
      <div className="aspect-video overflow-hidden bg-black">
        <iframe
          src={embedUrl}
          title={`${machine.name} demo`}
          className="h-full w-full"
          allowFullScreen
        />
      </div>
      <p className="border-t border-gray-100/80 bg-white/60 px-4 py-2.5 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-500 backdrop-blur-sm">
        <a
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
          target="_blank"
          rel="noreferrer"
          className="text-brand-600 hover:underline"
        >
          Open on YouTube
        </a>
      </p>
    </div>
  );
}
