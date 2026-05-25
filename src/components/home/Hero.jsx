import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { companyInfo } from "../../data/companyInfo";

function Hero() {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-brand-500 lg:block hero-slash" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 lg:left-[35%]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-surface-900/85 lg:bg-gradient-to-r lg:from-surface-900 lg:from-[45%] lg:via-surface-900/90 lg:to-transparent" />

      <div className="container-main relative grid items-center gap-10 py-16 sm:py-20 lg:min-h-[85vh] lg:grid-cols-2 lg:gap-0 lg:py-0">
        <div className="z-10 max-w-xl py-4 lg:py-24">
          <span className="inline-block bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
            Welcome to industrial solutions
          </span>
          <h1 className="heading-display mt-5 text-white">
            Advanced pharma{" "}
            <span className="text-brand-500">packaging</span> machines
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
            {companyInfo.tagline}. Precision sealing, capping &amp; labeling
            equipment for manufacturers across India.
          </p>
          <div className="btn-group-responsive mt-8">
            <Link to="/machines" className="btn-primary">
              Our machines
              <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline-dark">
              Get a quote
            </Link>
          </div>
          <Link
            to="/gallery"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-gray-400 transition hover:text-brand-500"
          >
            <span className="flex h-12 w-12 items-center justify-center border-2 border-brand-500 text-brand-500">
              <FaPlay className="ml-0.5 text-xs" />
            </span>
            Watch machine demos
          </Link>
        </div>

        <div className="relative z-10 hidden lg:block">
          <div className="absolute -left-8 top-1/2 w-48 -translate-y-1/2 stat-yellow-box shadow-xl">
            <p className="font-display text-5xl font-bold text-black">
              {companyInfo.foundedYear
                ? new Date().getFullYear() - companyInfo.foundedYear
                : "25"}
              +
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-black/80">
              Years experience
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-surface-950">
        <div className="container-main grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {companyInfo.stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center sm:py-8">
              <p className="font-display text-3xl font-bold text-brand-500 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 sm:text-xs">
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
