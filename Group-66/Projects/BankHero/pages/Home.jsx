import { useNavigate } from "react-router";
import { useAuth } from "../contexts/auth.context";

function Home() {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-3xl bg-white shadow-lg rounded-lg p-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Welcome to BankHero
                </h1>
                <p className="text-gray-600 text-lg md:text-xl mb-8">
                    {user? 
                        `Hello, ${user.fullname}! Manage your finances smarter, faster, and safer.`
                        : 
                        "Manage your finances smarter, faster, and safer. Join BankHero today and take control of your money!"}
                </p>

                <div className="flex justify-center gap-4">
                    {user ? (
                        <button
                            onClick={() => navigate("/Profile")}
                            className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-md hover:bg-indigo-100 transition-colors font-medium"
                        >
                            Go to Profile
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={() => navigate("/Register")}
                                className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-md hover:bg-indigo-100 transition-colors font-medium"
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => navigate("/Login")}
                                className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-md hover:bg-indigo-100 transition-colors font-medium"
                            >
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
