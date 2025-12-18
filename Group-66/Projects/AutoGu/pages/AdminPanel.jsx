import { useAdmin } from "../Context/adminContext";

function AdminPanel() {
  const { handleAdminSubmit } = useAdmin();

  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-10 ">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-8 w-96 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-blue-400 text-center mb-4">Admin Panel</h1>

          <form onSubmit={(e) => handleAdminSubmit(e)} className="flex flex-col gap-4">
            <input
              name="brand"
              placeholder="Brand (e.g. Toyota)"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <input
              name="model"
              placeholder="Model (e.g. Corolla)"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <input
              name="year"
              type="number"
              placeholder="Year (e.g. 2020)"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <input
              name="price"
              type="number"
              placeholder="Price (e.g. 15000)"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <input
              name="imageUrl"
              type="url"
              placeholder="Image URL"
              required
              className="bg-gray-800 text-white px-4 py-2 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200 mt-2"
            >
              Add The Car
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
