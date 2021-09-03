import Link from "next/link";
export default function EmptyContent() {
  return (
    <div className="text-center">
      <h2 className="text-red-600 text-3xl">HRC</h2>
      <h3 className="mt-2 text-sm font-medium text-gray-900">No Events</h3>
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
  );
}
