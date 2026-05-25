import { Link } from "react-router-dom";
import { FaCheck, FaInstagram } from "react-icons/fa";
import { company } from "../../content/company";
import { getAssetSrc } from "../../content/helpers";
import { homeContent } from "../../content/home";
import { getActivePosts } from "../../content/posts";
import MediaImage from "../common/MediaImage";
import PostsGrid from "../common/PostsGrid";

function AboutPreview() {
  const { about } = homeContent;
  const years = company.foundedYear
    ? `${new Date().getFullYear() - company.foundedYear}+`
    : "35+";
  const posts = about.showPostsPreview
    ? getActivePosts(about.postsPreviewLimit)
    : [];
  const aboutImageSrc = getAssetSrc(about.localImage);
  const hasPosts = posts.length > 0;
  const hasImage = Boolean(aboutImageSrc);

  return (
    <section className="section-light section-padding overflow-hidden">
      <div
        className={`container-main grid items-center gap-10 ${
          hasPosts || hasImage ? "lg:grid-cols-2 lg:gap-16" : "max-w-3xl"
        }`}
      >
        {hasPosts && (
          <div>
            <PostsGrid posts={posts} columns={hasPosts.length > 2 ? 2 : 2} />
            <a
              href={company.profiles.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-dark mt-6 inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              <FaInstagram /> Follow on Instagram
            </a>
          </div>
        )}

        {hasImage && !hasPosts && (
          <div className="relative">
            <MediaImage
              src={aboutImageSrc}
              alt={about.localImage.alt}
              className="h-72 w-full object-cover shadow-lg sm:h-96 lg:h-[480px]"
            />
            <div className="absolute -bottom-4 -right-4 stat-yellow-box shadow-xl sm:-bottom-6 sm:-right-6">
              <p className="font-display text-4xl font-bold text-black sm:text-5xl">
                {years}
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-black/80">
                Years of experience
              </p>
            </div>
          </div>
        )}

        <div className={hasPosts && !hasImage ? "" : ""}>
          <span className="eyebrow-light">{about.eyebrow}</span>
          <div className="yellow-bar mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">{about.title}</h2>
          <p className="mt-5 text-sm leading-relaxed sm:text-base">
            {company.shortDescription}
          </p>
          <ul className="mt-6 space-y-3">
            {about.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-brand-500 text-[10px] text-black">
                  <FaCheck />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={about.button.link} className="btn-dark w-full sm:w-auto">
              {about.button.label}
            </Link>
            {!hasPosts && (
              <a
                href={company.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-light inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                <FaInstagram /> Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
