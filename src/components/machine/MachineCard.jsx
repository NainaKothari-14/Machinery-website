import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay, FaPlus } from "react-icons/fa";
import { getMachineImage } from "../../content/machines";
import { getQuoteWhatsAppMessage, openWhatsApp } from "../../services/whatsappService";

function MachineCard({ machine, variant = "dark" }) {
  const isDark = variant === "dark";
  const watchUrl = machine.youtubeId
    ? `https://www.youtube.com/watch?v=${machine.youtubeId}`
    : null;

  return (
    <article className={`group card-project ${isDark ? "" : "border border-gray-200"}`}>
      <Link to={`/machines/${machine.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={getMachineImage(machine)}
          alt={machine.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-surface-900/50 transition group-hover:bg-surface-900/30" />
        <span className="absolute left-0 top-4 bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
          {machine.category}
        </span>
        {watchUrl && (
          <span className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/70 px-2 py-1 text-[10px] font-bold uppercase text-white">
            <FaPlay className="text-brand-500" /> Demo
          </span>
        )}
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
        <p className={`mt-2 text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
          {machine.shortDescription}
        </p>
        {machine.applications?.length > 0 && (
          <p className={`mt-2 text-xs uppercase tracking-wider ${isDark ? "text-gray-600" : "text-gray-400"}`}>
            {machine.applications.slice(0, 3).join(" · ")}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
          <Link
            to={`/machines/${machine.id}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-500"
          >
            Details <FaArrowRight />
          </Link>
          {watchUrl && (
            <a
              href={watchUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-brand-500"
            >
              <FaPlay /> Watch demo
            </a>
          )}
          <button
            type="button"
            onClick={() => openWhatsApp(getQuoteWhatsAppMessage(machine.name))}
            className={`ml-auto text-xs font-bold uppercase tracking-wider ${
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
