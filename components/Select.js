import Link from 'next/link';

export default function Select({ label, options, selectId, selectName }) {
    return (
        <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                id={selectId}
                name={selectName}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="">Select a {label}</option>
                {options.map((o) => (
                    <option key={o.id} value={o.id}>
                        {o.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
