import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { company } from "../../content/company";
import { homeContent } from "../../content/home";
import { getActivePosts } from "../../content/posts";
import PostsGrid from "../common/PostsGrid";

function AboutPreview() {
  const { about } = homeContent;
  const posts = about.showPostsPreview ? getActivePosts(about.postsPreviewLimit) : [];

  return (
    <section className="section-light section-padding">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow-light">{about.eyebrow}</span>
            <div className="yellow-bar mt-4" />
            <h2 className="heading-section mt-4 text-surface-900">{about.title}</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              {about.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <Link to={about.button.link} className="btn-dark mt-8 inline-flex">
              {about.button.label}
            </Link>
          </div>

          {posts.length > 0 && (
            <div>
              <PostsGrid posts={posts} columns={2} />
              <a
                href={company.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-light mt-6 inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                <FaInstagram /> More on Instagram
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
