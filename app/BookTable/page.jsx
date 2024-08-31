export default function BookTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Update Reservation</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="date">
            Reservation Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="time">
            Reservation Time
          </label>
          <input
            type="time"
            id="time"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="guests">
            How many persons will join?
          </label>
          <input
            type="number"
            id="guests"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            min="1"
            max="20"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="notes">
            Notes
          </label>
          <textarea
            id="notes"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            rows="4"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
          >
            Update Reservation
          </button>
        </div>
      </form>
    </div>
  );
}
