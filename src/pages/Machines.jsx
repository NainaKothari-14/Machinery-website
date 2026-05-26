import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageMeta from "../components/common/PageMeta";
import PageBanner from "../components/common/PageBanner";
import MachineGrid from "../components/machine/MachineGrid";
import { machineCategories, machines } from "../content/machines";
import { pageMeta } from "../content/navigation";

function Machines() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(
    machineCategories.includes(initialCategory) ? initialCategory : "All",
  );

  useEffect(() => {
    const param = searchParams.get("category");
    if (param && machineCategories.includes(param)) setCategory(param);
  }, [searchParams]);

  const filtered = useMemo(() => {
    if (category === "All") return machines;
    return machines.filter((m) => m.category === category);
  }, [category]);

  const meta = pageMeta.machines;

  return (
    <>
      <PageMeta title="Machines" />
      <PageBanner
        eyebrow={meta.eyebrow}
        title={meta.title}
        description={meta.description}
        breadcrumbs={[{ label: "Machines" }]}
      />

      <section className="section-muted section-padding">
        <div className="container-main">
          <div className="-mx-1 mb-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
            {machineCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={
                  category === cat
                    ? "chip-filter chip-filter-active"
                    : "chip-filter chip-filter-inactive"
                }
              >
                {cat}
              </button>
            ))}
          </div>
          <MachineGrid machines={filtered} variant="light" />
        </div>
      </section>
    </>
  );
}

export default Machines;
