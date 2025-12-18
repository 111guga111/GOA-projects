import { useNavigate } from "react-router";
import { useForm } from "../Hooks/useForm";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [formData, handleChange, handleSubmit] = useForm({
    email: "",
    password: ""
  });
  const { login } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-white text-center">Login</h2>

        <form onSubmit={(e) => handleSubmit(e, login)} className="flex flex-col gap-4">
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

          <button
            type="submit"
            className="w-full bg-blue-700 text-white px-4 py-3 rounded-full hover:bg-blue-600 transition-colors font-semibold text-lg mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-center text-sm">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/SignIn")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
