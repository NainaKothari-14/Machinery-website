import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import { company } from "../../content/company";

function TopBar() {
  return (
    <div className="hidden border-b border-gray-200 bg-surface-900 lg:block">
      <div className="container-main flex h-10 items-center justify-between text-[11px] font-medium uppercase tracking-wider text-gray-400">
        <div className="flex items-center gap-8">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 transition hover:text-brand-500"
          >
            <FaPhone className="text-brand-500" />
            {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-2 transition hover:text-brand-500"
          >
            <FaEnvelope className="text-brand-500" />
            {company.email}
          </a>
        </div>
        <span className="inline-flex items-center gap-2">
          <FaClock className="text-brand-500" />
          {company.workingHours}
        </span>
      </div>
    </div>
  );
}

export default TopBar;
