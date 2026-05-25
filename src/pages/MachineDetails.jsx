import { Link, useParams } from "react-router-dom";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import QuoteForm from "../components/contact/QuoteForm";
import MachineSpecs from "../components/machine/MachineSpecs";
import { getMachineById } from "../data/machines";
import { companyInfo } from "../data/companyInfo";
import { getQuoteWhatsAppMessage, openWhatsApp } from "../services/whatsappService";

function MachineDetails() {
  const { id } = useParams();
  const machine = getMachineById(id);

  if (!machine) {
    return (
      <div className="section-light section-padding text-center">
        <h1 className="heading-section text-surface-900">Not found</h1>
        <Link to="/machines" className="btn-primary mt-6 inline-flex">Back</Link>
      </div>
    );
  }

  return (
    <>
      <PageMeta title={machine.name} description={machine.shortDescription} />
      <PageBanner
        eyebrow={machine.category}
        title={machine.name}
        breadcrumbs={[
          { label: "Machines", href: "/machines" },
          { label: machine.name },
        ]}
      />

      <section className="section-light section-padding">
        <div className="container-main">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <img
              src={machine.image}
              alt={machine.name}
              className="w-full object-cover shadow-lg h-72 sm:h-96"
            />
            <div>
              <p className="text-sm leading-relaxed sm:text-base">{machine.description}</p>
              <div className="btn-group-responsive mt-6">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => openWhatsApp(getQuoteWhatsAppMessage(machine.name))}
                >
                  <FaWhatsapp /> WhatsApp price
                </button>
                <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="btn-dark">
                  <FaPhone /> Call
                </a>
              </div>
              <ul className="mt-8 space-y-2 border-t border-gray-200 pt-6">
                {machine.applications.map((app) => (
                  <li key={app} className="flex gap-3 text-sm before:mt-2 before:h-1 before:w-3 before:bg-brand-500 before:content-['']">
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <MachineSpecs specs={machine.specs} variant="light" />
            <QuoteForm machineName={machine.name} />
          </div>
        </div>
      </section>
    </>
  );
}

export default MachineDetails;
