import { company } from "../content/company";

export function sendContactEmail(formData) {
  const subject = encodeURIComponent(
    `Inquiry from ${formData.name} — ${company.name}`,
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

  window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
}
