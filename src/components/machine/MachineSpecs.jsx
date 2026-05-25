function MachineSpecs({ specs, variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div className={isDark ? "card-dark p-6 sm:p-8" : "card-light border-t-4 border-t-brand-500 p-6 sm:p-8"}>
      <span className={isDark ? "eyebrow" : "eyebrow-light"}>Specs</span>
      <h3 className={`mt-3 font-display text-xl font-bold uppercase ${isDark ? "text-white" : "text-surface-900"}`}>
        Specifications
      </h3>
      <dl className={`mt-6 divide-y ${isDark ? "divide-white/10" : "divide-gray-200"}`}>
        {specs.map((spec) => (
          <div key={spec.label} className="flex justify-between gap-4 py-3 text-sm">
            <dt className="font-semibold uppercase tracking-wider text-gray-500">{spec.label}</dt>
            <dd className={isDark ? "text-white" : "text-surface-900"}>{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default MachineSpecs;
