import { useNavigate } from "react-router";
import { useForm } from "../Hooks/useForm";
import { useAuth } from "../Context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const [formData, handleChange, handleSubmit] = useForm({
    fullname: "",
    email: "",
    password: "",
    imageURL: ""
  });
  const { register } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-white text-center">Register</h2>

        <form onSubmit={(e) => handleSubmit(e, register)} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white px-4 py-3 rounded-full hover:bg-blue-600 transition-colors font-semibold text-lg mt-2"
          >
            Register
          </button>
        </form>

        <p className="text-gray-400 text-center text-sm">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/Login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
