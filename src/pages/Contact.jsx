import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import ContactForm from "../components/contact/ContactForm";
import { companyInfo } from "../data/companyInfo";
import { openWhatsApp } from "../services/whatsappService";

function Contact() {
  return (
    <>
      <PageMeta title="Contact" />
      <PageBanner
        eyebrow="Get in touch"
        title="Contact us"
        description="Share your requirement — we call or email you back."
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
                  <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-brand-600">
                    <FaPhone className="mt-1 text-brand-500" />
                    <span>
                      <span className="block text-xs font-bold uppercase text-gray-400">Phone</span>
                      {companyInfo.phoneDisplay}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${companyInfo.email}`} className="flex gap-3 break-all hover:text-brand-600">
                    <FaEnvelope className="mt-1 text-brand-500" />
                    <span>
                      <span className="block text-xs font-bold uppercase text-gray-400">Email</span>
                      {companyInfo.email}
                    </span>
                  </a>
                </li>
                <li>
                  <button type="button" onClick={() => openWhatsApp()} className="flex w-full gap-3 text-left hover:text-brand-600">
                    <FaWhatsapp className="mt-1 text-brand-500" />
                    <span>
                      <span className="block text-xs font-bold uppercase text-gray-400">WhatsApp</span>
                      Quick quote
                    </span>
                  </button>
                </li>
                <li className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 text-brand-500" />
                  <span>
                    <span className="block text-xs font-bold uppercase text-gray-400">Address</span>
                    {companyInfo.address}
                  </span>
                </li>
              </ul>
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
