import ContactForm from "./ContactForm";

function QuoteForm({ machineName }) {
  return <ContactForm defaultMachine={machineName || ""} variant="light" />;
}

export default QuoteForm;
