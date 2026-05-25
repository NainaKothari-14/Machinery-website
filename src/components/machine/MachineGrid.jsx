import MachineCard from "./MachineCard";

function MachineGrid({ machines, emptyMessage = "No machines found.", variant = "dark" }) {
  if (!machines.length) {
    return <p className="py-12 text-center text-gray-500">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {machines.map((machine) => (
        <MachineCard key={machine.id} machine={machine} variant={variant} />
      ))}
    </div>
  );
}

export default MachineGrid;
