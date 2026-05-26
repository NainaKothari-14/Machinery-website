import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { company } from "../../content/company";
import { getHeroBackground, homeContent } from "../../content/home";

function Hero() {
  const { hero } = homeContent;
  const bg = getHeroBackground();
  const machineBg = hero.backgroundStyle === "machine";

  return (
    <section className="relative overflow-hidden bg-surface-900">
      <div
        className="absolute inset-0 bg-gradient-to-br from-surface-950 via-surface-900 to-surface-800"
        aria-hidden
      />

      {bg && machineBg ? (
        <>
          <div
            className="pointer-events-none absolute right-0 top-1/2 h-[min(420px,70vw)] w-[min(420px,70vw)] -translate-y-1/2 translate-x-1/4 rounded-full bg-brand-500/15 blur-3xl"
            aria-hidden
          />
          <img
            src={bg}
            alt=""
            className="absolute bottom-0 right-0 top-0 my-auto h-[72%] max-h-[340px] w-auto max-w-[min(78%,440px)] object-contain object-right opacity-95 drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] sm:h-[78%] sm:max-h-[400px] sm:max-w-[52%] md:pr-6"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-900/92 to-transparent sm:via-surface-900/75"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-surface-900/25"
            aria-hidden
          />
        </>
      ) : (
        bg && (
          <>
            <img
              src={bg}
              alt=""
              className="absolute inset-0 h-full w-full scale-105 object-cover object-[62%_center] brightness-[0.65] contrast-[1.1] saturate-[1.08]"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-surface-950/95 via-surface-900/75 to-surface-900/20"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-transparent to-surface-900/30"
              aria-hidden
            />
          </>
        )
      )}

      <div className="container-main relative z-10 py-14 sm:py-16 md:py-20">
        <div className="max-w-xl">
          <span className="inline-block rounded-full border border-brand-500/40 bg-brand-500/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-400 animate-fade-up">
            Portable · Efficient · Industrial
          </span>
          <h1 className="animate-fade-up-delay mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
            {hero.headline}
          </h1>
          <p className="animate-fade-up-delay mt-2 font-display text-lg font-semibold uppercase leading-snug text-white/90 sm:text-xl">
            {hero.line2}
          </p>
          <p className="animate-fade-up-delay-2 font-display text-lg font-bold uppercase leading-snug text-brand-500 sm:text-xl">
            {hero.line3}
          </p>
          <p className="animate-fade-up-delay-2 mt-4 max-w-md text-sm leading-relaxed text-gray-400">
            {hero.subtitle}
          </p>
          <div className="animate-fade-up-delay-3 mt-6 flex flex-col gap-3 sm:flex-row">
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

      <div className="relative z-10 border-t border-white/10 bg-white/95 backdrop-blur-md">
        <div className="container-main grid grid-cols-2 divide-x divide-gray-200/80 md:grid-cols-4">
          {company.stats.map((stat) => (
            <div
              key={stat.label}
              className="px-3 py-4 text-center sm:px-4 sm:py-5"
            >
              <p className="font-display text-xl font-bold text-brand-600 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-gray-500 sm:text-[10px]">
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
