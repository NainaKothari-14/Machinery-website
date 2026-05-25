import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { companyInfo } from "../../data/companyInfo";

const points = [
  "Pharma-grade sealing & packaging machines",
  "Custom output for your bottle size",
  "Installation & operator training",
];

function AboutPreview() {
  const years =
    companyInfo.foundedYear
      ? `${new Date().getFullYear() - companyInfo.foundedYear}+`
      : "25+";

  return (
    <section className="section-light section-padding overflow-hidden">
      <div className="container-main grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80"
            alt="Our workshop"
            className="w-full object-cover shadow-lg h-72 sm:h-96 lg:h-[480px]"
          />
          <div className="absolute -bottom-4 -right-4 stat-yellow-box shadow-xl sm:-bottom-6 sm:-right-6">
            <p className="font-display text-4xl font-bold text-black sm:text-5xl">
              {years}
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-black/80">
              Years of experience
            </p>
          </div>
        </div>

        <div>
          <span className="eyebrow-light">About company</span>
          <div className="yellow-bar mt-4" />
          <h2 className="heading-section mt-4 text-surface-900">
            Leading pharma machinery manufacturer
          </h2>
          <p className="mt-5 text-sm leading-relaxed sm:text-base">
            {companyInfo.shortDescription}
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-brand-500 text-[10px] text-black">
                  <FaCheck />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-dark mt-8 w-full sm:w-auto">
            More about us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
