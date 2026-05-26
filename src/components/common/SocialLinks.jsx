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
        const isInstagram = social.name === "Instagram";
        const isYouTube = social.name === "YouTube";
        const isFeatured = isInstagram || isYouTube;

        return (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
              className={`inline-flex items-center justify-center rounded-xl transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg active:scale-95 ${
                isWhatsApp
                  ? "h-11 w-11 bg-[#25D366] text-white shadow-md shadow-[#25D366]/30 hover:bg-[#20bd5a] hover:shadow-[#25D366]/40"
                  : isInstagram
                    ? "h-12 w-12 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-md shadow-pink-500/25 hover:shadow-pink-500/40"
                    : isYouTube
                      ? "h-12 w-12 bg-[#FF0000] text-white shadow-md shadow-red-500/30 hover:bg-[#e60000] hover:shadow-red-500/45"
                      : isDark
                        ? "h-11 w-11 border border-white/15 bg-white/5 text-gray-300 backdrop-blur-sm hover:border-brand-500 hover:bg-brand-500 hover:text-black"
                        : isLight
                          ? "h-11 w-11 border border-gray-200/80 bg-white/90 text-surface-900 shadow-sm backdrop-blur-sm hover:border-brand-500/50 hover:text-brand-600"
                          : "h-11 w-11 border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:border-brand-500 hover:bg-brand-500 hover:text-black"
              } ${isFeatured && isDark ? "ring-1 ring-white/20" : ""}`}
            >
              <Icon size={isFeatured ? 22 : 20} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
