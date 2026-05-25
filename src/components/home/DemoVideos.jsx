import { Link } from "react-router-dom";
import { galleryVideos } from "../../content/gallery";
import { homeContent } from "../../content/home";
import VideoCard from "../gallery/VideoCard";

function DemoVideos() {
  const { videos } = homeContent;

  return (
    <section className="section-light section-padding border-t border-gray-200">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-light mx-auto">{videos.eyebrow}</span>
          <div className="yellow-bar mx-auto mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">{videos.title}</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {galleryVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to={videos.button.link} className="btn-dark w-full sm:w-auto">
            {videos.button.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DemoVideos;
