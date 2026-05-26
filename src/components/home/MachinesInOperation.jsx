import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay, FaYoutube } from "react-icons/fa";
import { galleryVideos } from "../../content/gallery";
import { homeContent } from "../../content/home";

function MachinesInOperation() {
  const { machinesInOperation } = homeContent;
  const videos = galleryVideos.slice(0, machinesInOperation.maxVideos);

  return (
    <section className="section-light section-padding border-t border-gray-100">
      <div className="container-main">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow-light">{machinesInOperation.eyebrow}</span>
            <div className="yellow-bar mt-4" />
            <h2 className="heading-section mt-4 text-surface-900">
              {machinesInOperation.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-gray-600">
              {machinesInOperation.description}
            </p>
          </div>
          <Link to={machinesInOperation.button.link} className="btn-outline-light shrink-0">
            {machinesInOperation.button.label}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.watchUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-card group overflow-hidden"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/20">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-black">
                    <FaPlay className="ml-1" />
                  </span>
                </span>
              </div>
              <p className="border-t-2 border-brand-500 p-4 font-display text-sm font-bold uppercase text-surface-900">
                {video.title}
              </p>
            </a>
          ))}
        </div>

        {machinesInOperation.youtubeLink && (
          <div className="mt-8 text-center">
            <a
              href={machinesInOperation.youtubeLink.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-brand-600 transition hover:text-brand-700"
            >
              <FaYoutube className="text-lg" />
              {machinesInOperation.youtubeLink.label}
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default MachinesInOperation;
