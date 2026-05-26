import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { getMachineImage } from "../../content/machines";
import { getQuoteWhatsAppMessage, openWhatsApp } from "../../services/whatsappService";

function getCardPreview(machine) {
  const capacity =
    machine.specs?.find((s) => /operation|capacity|scale/i.test(s.label))?.value ??
    machine.specs?.[0]?.value;
  const type = machine.category;
  const application = machine.applications?.[0] ?? machine.specs?.[1]?.value;

  return { capacity, type, application };
}

function MachineCard({ machine, variant = "light" }) {
  const isDark = variant === "dark";
  const watchUrl = machine.youtubeId
    ? `https://www.youtube.com/watch?v=${machine.youtubeId}`
    : null;
  const preview = getCardPreview(machine);

  const imageLink = (
    <Link
      to={`/machines/${machine.id}`}
      className={`relative block aspect-[5/4] overflow-hidden ${
        isDark
          ? "rounded-t-2xl bg-surface-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <img
        src={getMachineImage(machine)}
        alt={machine.name}
        className={`h-full w-full transition duration-500 ${
          isDark
            ? "object-cover group-hover:scale-105"
            : "object-contain p-4 group-hover:scale-[1.03]"
        }`}
      />
      {isDark && (
        <div className="absolute inset-0 bg-surface-900/50 transition group-hover:bg-surface-900/30" />
      )}
      <span className="absolute left-3 top-3 rounded-lg bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
        {machine.category}
      </span>
      {watchUrl && (
        <span
          className={`absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase backdrop-blur-md ${
            isDark
              ? "bg-black/60 text-white"
              : "border border-white/50 bg-white/80 text-surface-900 shadow-sm"
          }`}
        >
          <FaPlay className={isDark ? "text-brand-500" : "text-brand-600"} /> Demo
        </span>
      )}
    </Link>
  );

  const body = (
    <div
      className={`p-5 ${
        isDark
          ? "bg-surface-800"
          : "border-t border-white/60 bg-white/40 backdrop-blur-sm"
      }`}
    >
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

      {(preview.capacity || preview.type || preview.application) && (
        <dl
          className={`mt-4 grid grid-cols-3 gap-2 border-t pt-4 ${
            isDark ? "border-white/10" : "border-gray-200/80"
          }`}
        >
          {preview.capacity && (
            <div>
              <dt className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                Capacity
              </dt>
              <dd
                className={`mt-0.5 text-[11px] font-semibold leading-snug ${
                  isDark ? "text-gray-300" : "text-surface-800"
                }`}
              >
                {preview.capacity}
              </dd>
            </div>
          )}
          {preview.type && (
            <div>
              <dt className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                Type
              </dt>
              <dd
                className={`mt-0.5 text-[11px] font-semibold leading-snug ${
                  isDark ? "text-gray-300" : "text-surface-800"
                }`}
              >
                {preview.type}
              </dd>
            </div>
          )}
          {preview.application && (
            <div>
              <dt className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                Application
              </dt>
              <dd
                className={`mt-0.5 text-[11px] font-semibold leading-snug ${
                  isDark ? "text-gray-300" : "text-surface-800"
                }`}
              >
                {preview.application}
              </dd>
            </div>
          )}
        </dl>
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
    </div>
  );

  if (isDark) {
    return (
      <article className="group card-project-dark">
        {imageLink}
        {body}
      </article>
    );
  }

  return (
    <article className="glass-card group">
      {imageLink}
      {body}
    </article>
  );
}

export default MachineCard;
