import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { galleryVideos } from "../../content/gallery";
import { homeContent } from "../../content/home";

function MachinesInOperation() {
  const { machinesInOperation } = homeContent;
  const videos = galleryVideos.slice(0, machinesInOperation.maxVideos);

  return (
    <section className="section-dark section-padding">
      <div className="container-main">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">{machinesInOperation.eyebrow}</span>
            <div className="yellow-bar mt-4" />
            <h2 className="heading-section mt-4 text-white">
              {machinesInOperation.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-gray-500">
              {machinesInOperation.description}
            </p>
          </div>
          <Link to={machinesInOperation.button.link} className="btn-outline-dark shrink-0">
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
              className="group overflow-hidden border border-white/10 bg-surface-800"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/25">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-black">
                    <FaPlay className="ml-1" />
                  </span>
                </span>
              </div>
              <p className="border-t-2 border-brand-500 p-4 font-display text-sm font-bold uppercase text-white">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MachinesInOperation;
