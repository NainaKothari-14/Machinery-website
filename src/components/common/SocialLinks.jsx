import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { socials } from "../../content/navigation";

const icons = {
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  WhatsApp: FaWhatsapp,
};

function SocialLinks({ variant = "light", className = "" }) {
  const isLight = variant === "light";
  const isDark = variant === "dark";

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {socials.map((social) => {
        const Icon = icons[social.name] ?? FaInstagram;
        const isWhatsApp = social.name === "WhatsApp";
        return (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${
                isWhatsApp
                  ? "bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:shadow-[#25D366]/40"
                  : isDark
                    ? "border border-white/15 bg-white/5 text-gray-300 backdrop-blur-sm hover:border-brand-500 hover:bg-brand-500 hover:text-black"
                    : isLight
                      ? "border border-gray-200/80 bg-white/90 text-surface-900 shadow-sm backdrop-blur-sm hover:border-brand-500/50 hover:text-brand-600"
                      : "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:border-brand-500 hover:bg-brand-500 hover:text-black"
              }`}
            >
              <Icon size={20} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
