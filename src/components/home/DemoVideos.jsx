import { Link } from "react-router-dom";
import { galleryVideos } from "../../data/gallery";

function DemoVideos() {
  return (
    <section className="section-light section-padding border-t border-gray-200">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light mx-auto">Video gallery</span>
          <div className="yellow-bar mx-auto mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">
            Machines in operation
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {galleryVideos.map((video) => (
            <div key={video.id} className="overflow-hidden border border-gray-200 bg-white shadow-sm">
              <div className="aspect-video border-b-4 border-brand-500">
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
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/gallery" className="btn-dark w-full sm:w-auto">
            Full gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DemoVideos;
