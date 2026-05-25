import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import PageMeta from "../components/common/PageMeta";
import SocialLinks from "../components/common/SocialLinks";
import { socials } from "../content/navigation";
import PageBanner from "../components/common/PageBanner";
import ContactForm from "../components/contact/ContactForm";
import { company } from "../content/company";
import { pageMeta } from "../content/navigation";
import { openWhatsApp } from "../services/whatsappService";

function Contact() {
  const meta = pageMeta.contact;

  return (
    <>
      <PageMeta title="Contact" />
      <PageBanner
        eyebrow={meta.eyebrow}
        title={meta.title}
        description={meta.description}
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-light section-padding">
        <div className="container-main grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="card-light p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold uppercase text-surface-900">
                Direct contact
              </h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="flex gap-3 hover:text-brand-600"
                  >
                    <FaPhone className="mt-1 text-brand-500" />
                    <span>
                      <span className="block text-xs font-bold uppercase text-gray-400">
                        Phone
                      </span>
                      {company.phoneDisplay}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex gap-3 break-all hover:text-brand-600"
                  >
                    <FaEnvelope className="mt-1 text-brand-500" />
                    <span>
                      <span className="block text-xs font-bold uppercase text-gray-400">
                        Email
                      </span>
                      {company.email}
                    </span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => openWhatsApp()}
                    className="flex w-full gap-3 text-left hover:text-brand-600"
                  >
                    <FaWhatsapp className="mt-1 text-brand-500" />
                    <span>
                      <span className="block text-xs font-bold uppercase text-gray-400">
                        WhatsApp
                      </span>
                      Quick quote
                    </span>
                  </button>
                </li>
                <li className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-brand-500" />
                  <span>
                    <span className="block text-xs font-bold uppercase text-gray-400">
                      Workshop
                    </span>
                    {company.address}
                    <span className="mt-1 block text-xs text-gray-500">
                      {company.addressShort} · PIN {company.pincode}
                    </span>
                    <a
                      href={company.profiles.googleMaps}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-xs font-bold uppercase tracking-wider text-brand-600 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </span>
                </li>
              </ul>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Social media
                </p>
                <SocialLinks variant="light" className="mt-4" />
                <ul className="mt-4 space-y-2 text-sm">
                  {socials
                    .filter((s) => s.handle)
                    .map((s) => (
                      <li key={s.name}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-brand-600 hover:underline"
                        >
                          {s.name}: {s.handle}
                        </a>
                      </li>
                    ))}
                  <li>
                    <a
                      href={company.profiles.indiamart}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-600 hover:underline"
                    >
                      IndiaMART: View catalog & enquire
                    </a>
                  </li>
                  <li>
                    <a
                      href={company.profiles.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-600 hover:underline"
                    >
                      YouTube: Machine demo videos
                    </a>
                  </li>
                  <li>
                    <a
                      href={company.profiles.goldenpages}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-600 hover:underline"
                    >
                      Golden Pages: Vasai (E) listing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ContactForm variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
