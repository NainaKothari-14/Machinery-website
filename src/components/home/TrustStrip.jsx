import { homeContent } from "../../content/home";

function TrustStrip() {
  const { trustStrip } = homeContent;

  return (
    <section className="border-y border-brand-500/20 bg-white py-8">
      <div className="container-main">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          {trustStrip.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {trustStrip.partners.map((name) => (
            <span
              key={name}
              className="font-display text-xl font-bold uppercase tracking-wide text-surface-800/40 sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
