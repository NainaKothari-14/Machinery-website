import { companyInfo } from "../data/companyInfo";

export function sendContactEmail(formData) {
  const subject = encodeURIComponent(
    `Inquiry from ${formData.name} — ${companyInfo.name}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "—"}`,
      `Machine: ${formData.machine || "General inquiry"}`,
      "",
      formData.message,
    ].join("\n"),
  );

  window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
}
