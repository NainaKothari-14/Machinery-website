import { company } from "../content/company";

export function openWhatsApp(message = "") {
  const text = encodeURIComponent(message);
  const url = `https://wa.me/${company.whatsapp}${text ? `?text=${text}` : ""}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function getQuoteWhatsAppMessage(machineName) {
  return `Hello ${company.name}, I am interested in ${machineName || "your machines"}. Please share price and details.`;
}
