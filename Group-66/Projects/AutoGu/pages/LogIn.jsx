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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Login</h2>

                <form onSubmit={(e) => handleSubmit(e, login)} className="flex flex-col gap-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium mt-2"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-gray-500 text-center">
                    Don't have an account? <span className="text-indigo-600 cursor-pointer" onClick={()=> navigate('/SignIn')}>Register</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
