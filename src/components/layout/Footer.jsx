import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { companyInfo } from "../../data/companyInfo";
import { NAV_LINKS } from "../../utils/constants";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-950 text-gray-400">
      <div className="container-main grid gap-10 section-padding-sm sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center bg-brand-500 font-display text-xl font-bold text-black">
              M
            </span>
            <div>
              <h3 className="font-display text-lg font-bold uppercase text-white">
                {companyInfo.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-gray-600">
                Pharma packaging
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{companyInfo.shortDescription}</p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-500">
            Quick links
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm transition hover:text-brand-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-500">
            Contact info
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-brand-500">
                <FaPhone className="mt-0.5 shrink-0 text-brand-500" />
                {companyInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${companyInfo.email}`} className="flex gap-3 break-all hover:text-brand-500 sm:break-normal">
                <FaEnvelope className="mt-0.5 shrink-0 text-brand-500" />
                {companyInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 hover:text-brand-500"
              >
                <FaWhatsapp className="mt-0.5 shrink-0 text-brand-500" />
                WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-0.5 shrink-0 text-brand-500" />
              {companyInfo.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col items-center justify-between gap-2 py-5 text-center text-xs uppercase tracking-wider sm:flex-row sm:text-left">
          <p>© {year} {companyInfo.name}</p>
          <p className="text-gray-600">{companyInfo.workingHours}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
