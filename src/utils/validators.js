export function validateContactForm(data) {
  const errors = {};

  if (!data.name?.trim()) errors.name = "Name is required";
  if (!data.phone?.trim()) errors.phone = "Phone number is required";
  else if (!/^[+\d\s-]{8,}$/.test(data.phone.trim()))
    errors.phone = "Enter a valid phone number";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = "Enter a valid email";
  if (!data.message?.trim()) errors.message = "Message is required";

  return errors;
}
