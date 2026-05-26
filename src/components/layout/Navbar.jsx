import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import SiteLogo from "../common/SiteLogo";
import { company } from "../../content/company";
import { NAV_LINKS } from "../../utils/constants";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkClass = ({ isActive }) =>
    `rounded-lg px-2 py-1 text-xs font-semibold uppercase tracking-wider transition duration-300 sm:text-sm ${
      isActive
        ? "text-brand-500"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  const mobileMenu =
    open &&
    createPortal(
      <>
        <button
          type="button"
          className="fixed inset-0 z-[100] bg-black/55 xl:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <div
          className="fixed inset-x-0 bottom-0 top-[4.25rem] z-[101] overflow-y-auto border-t border-white/10 bg-surface-900 shadow-2xl sm:top-20 xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          <nav className="container-main flex flex-col py-6 pb-10 safe-bottom">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-xl border-b border-white/10 px-2 py-4 font-display text-lg font-semibold uppercase transition ${
                    isActive ? "text-brand-500" : "text-gray-300 hover:bg-white/5"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="btn-outline-dark mt-4 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Call {company.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="btn-primary mt-3 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </Link>
          </nav>
        </div>
      </>,
      document.body,
    );

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="container-main relative z-[52] flex h-[4.25rem] items-center justify-between sm:h-20">
        <SiteLogo variant="nav" />

        <nav className="hidden items-center gap-2 xl:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-2 text-xs">
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-[53] flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition duration-300 hover:border-white/30 hover:bg-white/15 xl:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>

      {mobileMenu}
    </header>
  );
}

export default Navbar;
