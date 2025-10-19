import { Link } from "react-router-dom"

function SignUp({save}){
    return(<>
        <section className="flex flex-col items-center p-4 gap-3 w-full max-w-md mx-auto">

            <header className="text-center text-5xl p-2">Sign Up</header>

            <form className="flex flex-col items-center gap-3 w-full p-2" onSubmit={save}>

                <input
                    type="text"
                    placeholder="Username"
                    name="Name"
                    className="wtInputStyle w-80 h-10 pl-3"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    className="wtInputStyle w-80 h-10 pl-3"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="Pass"
                    className="wtInputStyle w-80 h-10 pl-3"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="PassConfirm"
                    className="wtInputStyle w-80 h-10 pl-3"
                />
                <input
                    type="text"
                    placeholder="Profile Photo"
                    name="Profile"
                    className="wtInputStyle w-80 h-10 pl-3"
                />
                <button
                    type="submit"
                    className="w-48 h-7 blButtonStyle"
                >
                    Sign Up
                </button>
            </form>
            <Link to='/Account/login' className="hover:text-gray-600">Go To Log In</Link>
        </section>
    </>)
}

export default SignUp