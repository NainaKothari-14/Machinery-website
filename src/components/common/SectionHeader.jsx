function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const alignClass =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-3 sm:mb-14 sm:gap-4 ${alignClass}`}>
      {eyebrow && (
        <span className={align === "center" ? "eyebrow mx-auto max-w-full" : "eyebrow max-w-full"}>
          {eyebrow}
        </span>
      )}
      <h2 className="heading-section break-words">{title}</h2>
      {description && (
        <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
          {description}
        </p>
      )}
      {align === "center" && <div className="divider-fade mt-1 w-20 sm:mt-2 sm:w-24" />}
    </div>
  );
}

export default SectionHeader;
