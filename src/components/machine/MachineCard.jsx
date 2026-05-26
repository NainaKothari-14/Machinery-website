import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { getMachineImage } from "../../content/machines";
import { getQuoteWhatsAppMessage, openWhatsApp } from "../../services/whatsappService";

function MachineCard({ machine, variant = "light" }) {
  const isDark = variant === "dark";
  const watchUrl = machine.youtubeId
    ? `https://www.youtube.com/watch?v=${machine.youtubeId}`
    : null;

  if (isDark) {
    return (
      <article className="group card-project-dark">
        <Link
          to={`/machines/${machine.id}`}
          className="relative block aspect-[4/3] overflow-hidden rounded-t-2xl"
        >
          <img
            src={getMachineImage(machine)}
            alt={machine.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-surface-900/50 transition group-hover:bg-surface-900/30" />
          <span className="absolute left-3 top-3 rounded-lg bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-md">
            {machine.category}
          </span>
          {watchUrl && (
            <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-lg bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase text-white backdrop-blur-md">
              <FaPlay className="text-brand-500" /> Demo
            </span>
          )}
        </Link>
        <div className="bg-surface-800 p-5">
          <CardBody machine={machine} watchUrl={watchUrl} isDark />
        </div>
      </article>
    );
  }

  return (
    <article className="glass-card group">
      <Link
        to={`/machines/${machine.id}`}
        className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      >
        <img
          src={getMachineImage(machine)}
          alt={machine.name}
          className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-lg bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
          {machine.category}
        </span>
        {watchUrl && (
          <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg border border-white/50 bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase text-surface-900 shadow-sm backdrop-blur-md">
            <FaPlay className="text-brand-600" /> Demo
          </span>
        )}
      </Link>
      <div className="border-t border-white/60 bg-white/40 p-5 backdrop-blur-sm">
        <CardBody machine={machine} watchUrl={watchUrl} isDark={false} />
      </div>
    </article>
  );
}

function CardBody({ machine, watchUrl, isDark }) {
  return (
    <>
      <Link to={`/machines/${machine.id}`}>
        <h3
          className={`font-display text-lg font-bold uppercase transition hover:text-brand-600 sm:text-xl ${
            isDark ? "text-white hover:text-brand-500" : "text-surface-900"
          }`}
        >
          {machine.name}
        </h3>
      </Link>
      <p className="mt-2 text-sm text-gray-500">{machine.shortDescription}</p>
      {machine.applications?.length > 0 && (
        <p className="mt-2 text-xs uppercase tracking-wider text-gray-400">
          {machine.applications.slice(0, 3).join(" · ")}
        </p>
      )}
      <div
        className={`mt-4 flex flex-wrap items-center gap-3 border-t pt-4 ${
          isDark ? "border-white/10" : "border-gray-200/80"
        }`}
      >
        <Link
          to={`/machines/${machine.id}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600"
        >
          Details <FaArrowRight />
        </Link>
        {watchUrl && (
          <a
            href={watchUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-brand-600"
          >
            <FaPlay /> Watch demo
          </a>
        )}
        <button
          type="button"
          onClick={() => openWhatsApp(getQuoteWhatsAppMessage(machine.name))}
          className="ml-auto text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-brand-600"
        >
          Quote
        </button>
      </div>
    </>
  );
}

export default MachineCard;
