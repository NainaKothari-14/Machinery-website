import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { companyInfo } from "../../data/companyInfo";

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-500">
      <div className="container-main section-padding-sm">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold uppercase text-black sm:text-4xl lg:text-5xl">
            Ready to upgrade your packaging line?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-black/75 sm:text-base">
            Call or message us for machine recommendation and price — we respond
            within one business day.
          </p>
          <div className="btn-group-responsive mt-8 justify-center">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center bg-black px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-500 transition hover:bg-surface-900"
            >
              Request a quote
            </Link>
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-black px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-black hover:text-brand-500"
            >
              <FaPhone />
              {companyInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
