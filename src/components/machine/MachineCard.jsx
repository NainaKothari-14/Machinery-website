import { Link } from "react-router-dom";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { getQuoteWhatsAppMessage, openWhatsApp } from "../../services/whatsappService";

function MachineCard({ machine, variant = "dark" }) {
  const isDark = variant === "dark";

  return (
    <article className={`group card-project ${isDark ? "" : "border border-gray-200"}`}>
      <Link to={`/machines/${machine.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={machine.image}
          alt={machine.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-surface-900/50 transition group-hover:bg-surface-900/30" />
        <span className="absolute left-0 top-4 bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
          {machine.category}
        </span>
        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-brand-500 text-black opacity-0 transition group-hover:opacity-100">
          <FaPlus />
        </span>
      </Link>
      <div className={`p-5 ${isDark ? "bg-surface-800" : "bg-white"}`}>
        <Link to={`/machines/${machine.id}`}>
          <h3
            className={`font-display text-lg font-bold uppercase transition hover:text-brand-500 sm:text-xl ${
              isDark ? "text-white" : "text-surface-900"
            }`}
          >
            {machine.name}
          </h3>
        </Link>
        <p className={`mt-2 line-clamp-2 text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
          {machine.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <Link
            to={`/machines/${machine.id}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-500"
          >
            View details <FaArrowRight />
          </Link>
          <button
            type="button"
            onClick={() => openWhatsApp(getQuoteWhatsAppMessage(machine.name))}
            className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? "text-gray-500 hover:text-brand-500" : "text-gray-500 hover:text-brand-600"
            }`}
          >
            Quote
          </button>
        </div>
      </div>
    </article>
  );
}

export default MachineCard;
