import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { company } from "../../content/company";
import { homeContent } from "../../content/home";

function CtaBand() {
  const { cta } = homeContent;

  return (
    <section className="relative overflow-hidden bg-brand-500">
      <div className="container-main section-padding-sm">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-black sm:text-4xl lg:text-5xl">
            {cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-black/75 sm:text-base">
            {cta.description}
          </p>
          <div className="btn-group-responsive mt-8 justify-center">
            <Link
              to={cta.buttons.primary.link}
              className="inline-flex min-h-11 items-center justify-center bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-500 transition hover:bg-surface-900"
            >
              {cta.buttons.primary.label}
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-black px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-black hover:text-brand-500"
            >
              <FaPhone />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
