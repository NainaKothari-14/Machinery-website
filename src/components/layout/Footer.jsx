import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import SiteLogo from "../common/SiteLogo";
import SocialLinks from "../common/SocialLinks";
import { company } from "../../content/company";
import { navLinks } from "../../content/navigation";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface-950 text-gray-400">
      <div className="container-main grid gap-10 section-padding-sm sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SiteLogo variant="footer" linked={false} />
          <p className="mt-5 text-sm leading-relaxed">{company.footerBlurb}</p>
          <p className="mt-2 text-sm text-gray-500">{company.addressShort}</p>
          <div className="mt-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Follow us
            </p>
            <SocialLinks variant="dark" className="gap-4" />
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-500">
            Quick links
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
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
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${company.phone}`}
                className="flex gap-3 hover:text-brand-500"
              >
                <FaPhone className="shrink-0 text-brand-500" />
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex gap-3 break-all hover:text-brand-500"
              >
                <FaEnvelope className="shrink-0 text-brand-500" />
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 hover:text-brand-500"
              >
                <FaWhatsapp className="shrink-0 text-brand-500" />
                WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <FaMapMarkerAlt className="shrink-0 text-brand-500" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col items-center justify-between gap-2 py-5 text-center text-xs uppercase tracking-wider text-gray-500 sm:flex-row sm:text-left">
          <p className="text-gray-400">
            © {year} {company.name}
          </p>
          <p>{company.workingHours}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
