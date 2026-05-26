import { Link } from "react-router-dom";
import { company } from "../../content/company";
import { getAssetSrc } from "../../content/helpers";

const sizes = {
  nav: "h-11 w-auto max-w-[min(200px,46vw)] sm:h-12 sm:max-w-[220px]",
  footer: "h-[4.25rem] w-auto max-w-[240px] sm:h-[4.75rem] sm:max-w-[260px]",
};

function SiteLogo({ variant = "nav", linked = true, className = "" }) {
  const logoSrc = getAssetSrc(company.logo);
  const imgClass = `${sizes[variant]} object-contain object-left ${className}`;

  const image = logoSrc ? (
    <img
      src={logoSrc}
      alt={company.name}
      className={imgClass}
      width={220}
      height={72}
      decoding="async"
      fetchPriority={variant === "nav" ? "high" : "auto"}
    />
  ) : (
    <span
      className={`flex shrink-0 items-center justify-center bg-brand-500 font-display font-bold text-black ${
        variant === "nav"
          ? "h-11 w-11 text-lg sm:h-12 sm:w-12 sm:text-xl"
          : "h-14 w-14 text-xl"
      }`}
    >
      M
    </span>
  );

  const wrapped = (
    <span
      className={
        logoSrc
          ? "glass inline-flex items-center rounded-xl px-2.5 py-1.5 transition duration-300 hover:shadow-xl"
          : "inline-flex items-center gap-3"
      }
    >
      {image}
      {!logoSrc && variant === "nav" && (
        <span className="min-w-0 leading-tight">
          <span className="block truncate font-display text-sm font-bold uppercase tracking-wide text-surface-900 sm:text-base">
            Mahavir
          </span>
          <span className="hidden truncate text-[10px] font-semibold uppercase tracking-widest text-gray-500 min-[380px]:block">
            Pharma Machinery
          </span>
        </span>
      )}
    </span>
  );

  if (!linked) return wrapped;

  return (
    <Link to="/" className="inline-flex min-w-0 shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500">
      {wrapped}
    </Link>
  );
}

export default SiteLogo;
