import { Link } from "react-router-dom"

function Login({log}){
    return(<>    
        <section className="flex flex-col items-center p-5 gap-2.5 ">
            <header className="text-center text-5xl p-2">Log In</header>

            <form className="flex flex-col items-center gap-2.5 w-full p-1" onSubmit={log}>
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
              <button
                type="submit"
                className="w-48 h-7 blButtonStyle"
              >
                Log In
              </button>
            </form>
            <Link to='/Account ' className="hover:text-gray-600">Go To Sign Up</Link>

        </section>
</>)}

export default Login