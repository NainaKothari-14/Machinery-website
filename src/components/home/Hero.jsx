import { Link } from "react-router-dom";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import { company } from "../../content/company";
import { getHeroBackground, homeContent } from "../../content/home";

function Hero() {
  const { hero } = homeContent;
  const bg = getHeroBackground();

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-surface-950">
      {bg && (
        <img
          src={bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"
        aria-hidden
      />

      <div className="container-main relative z-10 flex min-h-[88vh] flex-col justify-center pb-12 pt-24 sm:pt-28 lg:pt-32">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-500">
            {hero.badge}
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="text-brand-500">{hero.titleHighlight}</span>
            <br />
            {hero.titleEnd}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to={hero.buttons.primary.link} className="btn-primary">
              {hero.buttons.primary.label}
              <FaArrowRight />
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="btn-outline-dark inline-flex min-h-11 items-center justify-center gap-2"
            >
              <FaPhone />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-surface-950/90">
        <div className="container-main grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {company.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-5 text-center sm:py-7">
              <p className="font-display text-2xl font-bold text-brand-500 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
