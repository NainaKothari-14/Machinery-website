import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import CtaBand from "../components/home/CtaBand";
import { companyInfo } from "../data/companyInfo";

function About() {
  return (
    <>
      <PageMeta title="About" />
      <PageBanner
        eyebrow="Company"
        title="About us"
        description={companyInfo.shortDescription}
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section-light section-padding">
        <div className="container-main grid gap-10 lg:grid-cols-2 lg:gap-16">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80"
            alt="Workshop"
            className="h-72 w-full object-cover shadow-lg sm:h-96"
          />
          <div className="space-y-4 text-sm sm:text-base">
            <p>
              Founded in {companyInfo.foundedYear},{" "}
              <strong className="text-surface-900">{companyInfo.name}</strong>{" "}
              is based in {companyInfo.location}.
            </p>
            <p>
              We build pharmaceutical bottle sealing, capping, labeling, and
              packaging machines for growing manufacturers.
            </p>
          </div>
        </div>

        <div className="container-main mt-14 grid gap-6 sm:grid-cols-3 lg:mt-20">
          {companyInfo.values.map((value) => (
            <div key={value.title} className="card-light border-t-4 border-t-brand-500 p-6">
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
