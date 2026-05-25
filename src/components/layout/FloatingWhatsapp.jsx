import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "../../services/whatsappService";

function FloatingWhatsapp() {
  return (
    <button
      type="button"
      onClick={() => openWhatsApp("Hello, I would like to inquire about your pharma machines.")}
      className="safe-bottom safe-right fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center bg-brand-500 text-xl text-black shadow-lg sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </button>
  );
}

export default FloatingWhatsapp;
