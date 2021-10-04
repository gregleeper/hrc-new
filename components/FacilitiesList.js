import FacilityItem from "./FacilityItem";

export default function FacilitiesList({ facilities }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 place-content-evenly z-0 mt-2 mb-10">
      {facilities.map((facility) => (
        <div
          key={facility.id}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400  md:w-3/4 cursor-pointer"
        >
          <FacilityItem facility={facility} />
        </div>
      ))}
    </div>
  );
}
