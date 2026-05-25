import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { socials } from "../../content/navigation";

const icons = {
  Instagram: FaInstagram,
  YouTube: FaYoutube,
  WhatsApp: FaWhatsapp,
};

function SocialLinks({ variant = "dark", className = "" }) {
  const isLight = variant === "light";

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {socials.map((social) => {
        const Icon = icons[social.name] ?? FaInstagram;
        return (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
              className={`inline-flex h-11 w-11 items-center justify-center transition ${
                isLight
                  ? "border border-gray-200 bg-white text-surface-900 hover:border-brand-500 hover:text-brand-600"
                  : "border border-white/15 bg-white/5 text-white hover:border-brand-500 hover:bg-brand-500 hover:text-black"
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
