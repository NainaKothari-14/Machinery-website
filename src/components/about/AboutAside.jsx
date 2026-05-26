import { FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";
import { company } from "../../content/company";

function AboutAside() {
  const { workshop } = company;

  return (
    <aside className="lg:col-span-5">
      <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm">
        <div className="border-b border-gray-200/80 bg-surface-900 px-5 py-3">
          <h3 className="font-display text-lg font-bold leading-tight text-white sm:text-xl">
            {workshop.title}
          </h3>
          <p className="mt-0.5 text-sm text-gray-400">{workshop.subtitle}</p>
        </div>

        <div className="relative h-[220px] w-full bg-slate-200 sm:h-[240px]">
          <iframe
            title="Mahavir Pharma Machinery workshop location"
            src={company.mapsEmbed}
            className="absolute inset-0 h-full w-full border-0"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="space-y-3 px-5 py-3.5">
          <div className="flex gap-3">
            <FaMapMarkerAlt className="mt-0.5 shrink-0 text-brand-500" aria-hidden />
            <address className="space-y-0.5 text-sm not-italic leading-snug text-gray-600">
              {company.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <a
            href={company.profiles.googleMaps}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full"
          >
            <FaExternalLinkAlt />
            Open in Maps
          </a>
        </div>
      </div>
    </aside>
  );
}

export default AboutAside;
