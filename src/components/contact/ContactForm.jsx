import { useState } from "react";
import toast from "react-hot-toast";
import { sendContactEmail } from "../../services/emailService";
import { validateContactForm } from "../../utils/validators";

const initialState = { name: "", phone: "", email: "", machine: "", message: "" };

function ContactForm({ defaultMachine = "", variant = "light" }) {
  const [form, setForm] = useState({ ...initialState, machine: defaultMachine });
  const [errors, setErrors] = useState({});
  const isDark = variant === "dark";
  const inputClass = isDark ? "input-field-dark" : "input-field-light";
  const wrapClass = isDark ? "card-dark p-6 sm:p-8" : "card-light p-6 sm:p-8";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    sendContactEmail(form);
    toast.success("Opening your email app...");
    setForm({ ...initialState, machine: defaultMachine });
  }

  return (
    <form onSubmit={handleSubmit} className={wrapClass}>
      <h3 className={`font-display text-xl font-bold uppercase ${isDark ? "text-white" : "text-surface-900"}`}>
        Send inquiry
      </h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase text-gray-500">Name *</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase text-gray-500">Phone *</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase text-gray-500">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase text-gray-500">Machine</label>
          <input id="machine" name="machine" value={form.machine} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-xs font-bold uppercase text-gray-500">Message *</label>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Send via email
      </button>
    </form>
  );
}

export default ContactForm;
