import { Link, useParams } from "react-router-dom";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import QuoteForm from "../components/contact/QuoteForm";
import MachineGallery from "../components/machine/MachineGallery";
import MachineSpecs from "../components/machine/MachineSpecs";
import { company } from "../content/company";
import { getMachineById, getMachineDetailMedia } from "../content/machines";
import { getQuoteWhatsAppMessage, openWhatsApp } from "../services/whatsappService";

function MachineDetails() {
  const { id } = useParams();
  const machine = getMachineById(id);

  const media = machine ? getMachineDetailMedia(machine) : { type: "none" };
  const hasMedia = media.type !== "none";

  if (!machine) {
    return (
      <div className="section-light section-padding text-center">
        <h1 className="heading-section text-surface-900">Not found</h1>
        <Link to="/machines" className="btn-primary mt-8 inline-flex">
          Back
        </Link>
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
          <div
            className={`grid gap-10 lg:gap-14 ${
              hasMedia ? "lg:grid-cols-2" : "max-w-3xl"
            }`}
          >
            {hasMedia && <MachineGallery machine={machine} />}

            <div>
              <p className="text-sm leading-relaxed sm:text-base">{machine.description}</p>
              <div className="btn-group-responsive mt-6">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() =>
                    openWhatsApp(getQuoteWhatsAppMessage(machine.name))
                  }
                >
                  <FaWhatsapp /> WhatsApp price
                </button>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="btn-dark"
                >
                  <FaPhone /> Call
                </a>
              </div>
              <ul className="mt-8 space-y-2.5 border-t border-gray-200 pt-6">
                {machine.applications.map((app) => (
                  <li
                    key={app}
                    className="flex gap-3 text-sm before:mt-2 before:h-1 before:w-3 before:bg-brand-500 before:content-['']"
                  >
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
