import LeisureItem from "./LeisureItem";
import Link from "next/link";

export default function LeisureList({ activities }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 place-content-evenly z-0 mt-2 mb-10">
      {activities.length ? (
        activities.map((activity) => (
          <div
            key={activity.id}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400  md:w-3/4 cursor-pointer"
          >
            <LeisureItem activity={activity} />
          </div>
        ))
      ) : (
        <div className="text-center my-8">
          <h2 className="text-red-600 text-3xl">HRC</h2>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No Leisure Activities
          </h3>
          <p className="mt-1 text-sm text-gray-500">Check back later!</p>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <Link href="/schedules">All Schedules</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
