import { useAuth } from "../Context/AuthContext";

function Profile() {
  const { user, adminRegister } = useAuth();

  return (
    <div  className="min-h-screen">
      <div className="flex justify-center mt-10 ">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl w-150 p-6 shadow-lg flex flex-col items-center gap-4">
          <h1 className="text-blue-400 text-2xl font-semibold">Profile</h1>

          <img
            src={user?.imageURL || "/images/Profile/profile.webp"}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-md"
          />

          <p className="text-white text-xl font-medium">{user.fullname}</p>
          {user.admin ? <p className="text-red-400 text-xl font-medium">Admin</p> : <p className="text-blue-400 text-xl font-medium">User</p>}

          {!user.admin && (
            <form onSubmit={(e) => adminRegister(e)} className="flex flex-col gap-3 w-full mt-4 items-center">
              <input
                name="adminPass"
                placeholder="Enter Admin Pass"
                className="bg-gray-800 text-white px-4 py-2 rounded-xl border border-gray-700 w-3/4 focus:outline-none focus:border-blue-500 text-center"
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          )}
        </div> 
      </div>
    </div>
  );
}

export default Profile;
