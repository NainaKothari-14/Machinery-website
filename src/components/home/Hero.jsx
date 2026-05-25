import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
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
        className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/45"
        aria-hidden
      />

      <div className="container-main relative z-10 flex min-h-[88vh] flex-col justify-center pb-12 pt-24 sm:pt-28 lg:pt-32">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-4 font-display text-xl font-semibold uppercase leading-snug text-white/95 sm:text-2xl lg:text-3xl">
            {hero.line2}
            <br />
            {hero.line3}
          </p>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={hero.buttons.primary.link} className="btn-primary">
              {hero.buttons.primary.label}
              <FaArrowRight />
            </Link>
            <Link to={hero.buttons.secondary.link} className="btn-outline-dark">
              {hero.buttons.secondary.label}
            </Link>
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
