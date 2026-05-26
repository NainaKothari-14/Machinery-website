import { Link } from "react-router-dom";
import { FaCheck, FaClock, FaInstagram } from "react-icons/fa";
import AboutAside from "../components/about/AboutAside";
import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import PostsGrid from "../components/common/PostsGrid";
import CtaBand from "../components/home/CtaBand";
import WhyChooseUsCards from "../components/home/WhyChooseUsCards";
import { company } from "../content/company";
import { pageMeta } from "../content/navigation";
import { getActivePosts, hasActivePosts } from "../content/posts";
import { openWhatsApp } from "../services/whatsappService";

function About() {
  const meta = pageMeta.about;
  const posts = getActivePosts();

  return (
    <>
      <PageMeta title="About" />
      <PageBanner
        compact
        eyebrow={meta.eyebrow}
        title={meta.title}
        description={company.footerBlurb}
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section-light py-10 sm:py-12 md:py-14">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="lg:col-span-7">
              <h2 className="heading-section text-surface-900">{company.name}</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                {company.aboutBody.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <ul className="mt-6 space-y-2">
                {company.productRange.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-[10px] text-brand-600">
                      <FaCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-5">
                <p className="text-xs font-medium tracking-wide text-brand-700/90">
                  {company.workshop.trustLine}
                </p>

                <p className="flex gap-3 text-sm text-gray-600">
                  <FaClock className="mt-0.5 shrink-0 text-brand-500" aria-hidden />
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Hours
                    </span>
                    {company.workingHours}
                  </span>
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link to="/machines" className="btn-primary">
                    View machines
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      openWhatsApp(
                        "Hello, I would like a quote for your packaging machines. Please share details.",
                      )
                    }
                    className="btn-outline-light"
                  >
                    Get quote
                  </button>
                </div>
              </div>
            </div>

            <AboutAside />
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm sm:mt-12">
            <div className="grid grid-cols-2 divide-x divide-y divide-gray-200/80 sm:divide-y-0 md:grid-cols-4">
              {company.stats.map((stat) => (
                <div key={stat.label} className="px-4 py-5 text-center sm:px-6 sm:py-6">
                  <p className="font-display text-2xl font-bold text-brand-600">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {hasActivePosts() && (
          <div className="container-main mt-16 lg:mt-20">
            <span className="eyebrow-light">Gallery</span>
            <div className="yellow-bar mt-4" />
            <h2 className="heading-section mt-4 text-surface-900">From our channel</h2>
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
