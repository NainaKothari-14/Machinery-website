function TrustStrip() {
  const partners = [
    "Pharma",
    "Ayurvedic",
    "Cosmetics",
    "Contract Pack",
    "Liquids",
  ];

  return (
    <section className="border-y border-gray-200 bg-surface-light py-8">
      <div className="container-main">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          Trusted by manufacturers in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((name) => (
            <span
              key={name}
              className="font-display text-xl font-bold uppercase tracking-wide text-gray-400 sm:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
