import { Link } from "react-router-dom";
import { company } from "../../content/company";
import { getAssetSrc } from "../../content/helpers";

const sizes = {
  nav: "h-full w-full object-contain",
  footer: "h-[4.25rem] w-auto max-w-[240px] sm:h-[4.75rem] sm:max-w-[260px] object-contain object-left",
};

function SiteLogo({ variant = "nav", linked = true, className = "" }) {
  const logoSrc = getAssetSrc(company.logo);

  const image = logoSrc ? (
    <img
      src={logoSrc}
      alt={company.name}
      className={`${sizes[variant]} ${className}`}
      width={variant === "nav" ? 56 : 220}
      height={variant === "nav" ? 56 : 72}
      decoding="async"
      fetchPriority={variant === "nav" ? "high" : "auto"}
    />
  ) : (
    <span
      className={`flex items-center justify-center font-display font-bold text-black ${
        variant === "nav" ? "text-lg sm:text-xl" : "h-14 w-14 text-xl"
      }`}
    >
      M
    </span>
  );

  const wrapped =
    variant === "nav" ? (
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-brand-500 bg-white p-1.5 shadow-lg shadow-black/25 ring-2 ring-white/30 transition duration-300 hover:ring-brand-500/60 sm:h-14 sm:w-14 sm:p-2">
        {image}
      </span>
    ) : (
      <span className="inline-flex items-center">{image}</span>
    );

  if (!linked) {
    return !logoSrc && variant === "nav" ? (
      <span className="inline-flex items-center gap-3">
        {wrapped}
        <span className="font-display text-sm font-bold uppercase text-white sm:text-base">
          Mahavir Pharma
        </span>
      </span>
    ) : (
      wrapped
    );
  }

  return (
    <Link
      to="/"
      className="inline-flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
    >
      {wrapped}
    </Link>
  );
}

export default SiteLogo;
