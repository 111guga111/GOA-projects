import { useEffect, useState } from "react";


import useForm from "../Hooks/useForm"
import useToggle from "../Hooks/useToggle";

const App = () => {
  const [user, setUser] = useState(null);
  const [formData, handleChange] = useForm();
  const [toggle, Switch] = useToggle();

  const fetchData = async (username) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();

      console.log(data)

      setUser(data);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if(formData.username) {
      fetchData(formData.username);
    }
  }, [formData]);

  
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-5" style={{backgroundColor: toggle ?  "black" : "white" , color: toggle ?  "white" : "black" }}>
      <button onClick={Switch}>Switch</button>
      <h1>Custom Hooks help us reuse the same code and are easyer to fix when error</h1>
      <h1>Encapsulation means not showing full logic and only returning usefull parts</h1>
      <h1>Rules:</h1>

      <ul>
        <li><p>Hooks name must Start with 'use'</p></li>
        <li><p>Hooks must be called at the top level (parent must be component) </p></li>
      </ul>

      <h1 className="text-3xl font-bold">Github searcher</h1>

      <section className="flex flex-col gap-2 items-center">
        <h2>Search by username</h2>

        <form className="border-2">
          <input type="text" name="username" onChange={handleChange} placeholder="Enter Github username" required />
        </form>
      </section>

      {
        user ? (
          <section>
            <h2>User data</h2>
            <img src={user.avatar_url}/>
          </section>
        ) : <p>No user data</p>
      }

    </main>
  )
}

export default App;