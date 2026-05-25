import { Link } from "react-router-dom";
import { FaPlay, FaYoutube } from "react-icons/fa";
import { company } from "../../content/company";
import { homeContent } from "../../content/home";

/** Single CTA to gallery — no duplicate video embeds on home */
function VideoTeaser() {
  const { videos } = homeContent;

  return (
    <section className="section-dark border-t border-white/10 py-14 sm:py-16">
      <div className="container-main flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-xl">
          <span className="eyebrow">{videos.eyebrow}</span>
          <h2 className="heading-section mt-3 text-white">{videos.title}</h2>
          <p className="mt-3 text-sm text-gray-500">{videos.description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link to={videos.button.link} className="btn-primary justify-center">
            <FaPlay /> {videos.button.label}
          </Link>
          <a
            href={company.profiles.youtube}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-dark justify-center"
          >
            <FaYoutube /> YouTube channel
          </a>
        </div>
      </div>
    </section>
  );
}

export default VideoTeaser;
