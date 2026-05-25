import { FaInstagram } from "react-icons/fa";
import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import PostsGrid from "../components/common/PostsGrid";
import CtaBand from "../components/home/CtaBand";
import { company } from "../content/company";
import { getAssetSrc } from "../content/helpers";
import { homeContent } from "../content/home";
import { pageMeta } from "../content/navigation";
import { getActivePosts, hasActivePosts } from "../content/posts";

function About() {
  const meta = pageMeta.about;
  const { about } = homeContent;
  const posts = getActivePosts();
  const aboutImageSrc = getAssetSrc(about.localImage);

  return (
    <>
      <PageMeta title="About" />
      <PageBanner
        eyebrow={meta.eyebrow}
        title={meta.title}
        description={company.shortDescription}
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section-light section-padding">
        <div className="container-main max-w-3xl space-y-4 text-sm sm:text-base">
          <p>
            Founded in {company.foundedYear},{" "}
            <strong className="text-surface-900">{company.name}</strong> is based in{" "}
            {company.location}.
          </p>
          <p>
            We manufacture and trade a commendable range of sealing machines, filling
            machines, packaging machines, bottle capping machines, tube crimping machines,
            motorised mini printers, and gumming machines — widely praised for performance,
            long service life, and precision.
          </p>
          <p className="text-gray-500">
            {company.businessType} · {company.teamSize} · {company.gst}
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {company.productRange.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm before:mt-2 before:h-1 before:w-3 before:bg-brand-500 before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {hasActivePosts() && (
          <div className="container-main mt-16 lg:mt-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow-light">From our channel</span>
                <div className="yellow-bar mt-4" />
                <h2 className="heading-section mt-4 text-surface-900">
                  Machines in action
                </h2>
                <p className="mt-3 max-w-xl text-sm text-gray-500">
                  Real frames from our YouTube demos — same machines we manufacture in
                  Vasai East.
                </p>
              </div>
              <a
                href={company.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-dark inline-flex items-center gap-2 self-start"
              >
                <FaInstagram /> @mahavirpharma_machinery
              </a>
            </div>
            <div className="mt-10">
              <PostsGrid posts={posts} />
            </div>
          </div>
        )}

        {!hasActivePosts() && !aboutImageSrc && (
          <div className="container-main mt-12 text-center">
            <a
              href={company.profiles.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-dark inline-flex items-center gap-2"
            >
              <FaInstagram /> See photos & reels on Instagram
            </a>
          </div>
        )}

        <div className="container-main mt-14 grid gap-6 sm:grid-cols-3 lg:mt-20">
          {company.values.map((value) => (
            <div
              key={value.title}
              className="card-light border-t-4 border-t-brand-500 p-6"
            >
              <h3 className="font-display text-lg font-bold uppercase text-surface-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-gray-500">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default About;
