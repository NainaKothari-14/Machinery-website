import { getMachineDetailMedia } from "../../content/machines";
import MediaImage from "../common/MediaImage";

function MachineGallery({ machine }) {
  const media = getMachineDetailMedia(machine);

  if (media.type === "video") {
    return (
      <div className="overflow-hidden border border-gray-200 bg-black shadow-lg">
        <div className="aspect-video border-b-4 border-brand-500">
          <iframe
            src={media.embedUrl}
            title={`${machine.name} demo`}
            className="h-full w-full"
            allowFullScreen
          />
        </div>
        <p className="bg-white px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Demo video ·{" "}
          <a
            href={`https://www.youtube.com/watch?v=${machine.youtubeId}`}
            target="_blank"
            rel="noreferrer"
            className="text-brand-600 hover:underline"
          >
            Watch on YouTube
          </a>
        </p>
      </div>
    );
  }

  if (media.type === "image") {
    return (
      <MediaImage
        src={media.src}
        alt={machine.name}
        className="h-64 w-full object-cover shadow-lg sm:h-80 lg:h-[28rem]"
      />
    );
  }

  return null;
}

export default MachineGallery;
