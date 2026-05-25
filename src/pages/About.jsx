import { FaInstagram } from "react-icons/fa";
import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import PostsGrid from "../components/common/PostsGrid";
import CtaBand from "../components/home/CtaBand";
import WhyChooseUsCards from "../components/home/WhyChooseUsCards";
import { company } from "../content/company";
import { pageMeta } from "../content/navigation";
import { getActivePosts, hasActivePosts } from "../content/posts";

function About() {
  const meta = pageMeta.about;
  const posts = getActivePosts();

  return (
    <>
      <PageMeta title="About" />
      <PageBanner
        eyebrow={meta.eyebrow}
        title={meta.title}
        description={company.footerBlurb}
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section-light section-padding">
        <div className="container-main max-w-3xl">
          <span className="eyebrow-light">{company.aboutTitle}</span>
          <div className="yellow-bar mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">{company.name}</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            {company.aboutBody.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-surface-900">
            {company.address}
          </p>
        </div>

        {hasActivePosts() && (
          <div className="container-main mt-16 lg:mt-20">
            <span className="eyebrow-light">Gallery</span>
            <div className="yellow-bar mt-4" />
            <h2 className="heading-section mt-4 text-surface-900">
              From our channel
            </h2>
            <div className="mt-10">
              <PostsGrid posts={posts} />
            </div>
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-dark mt-8 inline-flex items-center gap-2"
            >
              <FaInstagram /> @mahavirpharma_machinery
            </a>
          </div>
        )}
      </section>

      <WhyChooseUsCards />
      <CtaBand />
    </>
  );
}

export default About;
