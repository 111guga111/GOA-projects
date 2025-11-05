import { useContext, useState } from "react";
import { authContext } from "../Provider/authProvider";

function Register() {
  const { signUp, err } = useContext(authContext);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(form.username, form.email, form.password, form.confirmPassword);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>

      {err.length > 0 && (
        <ul>
          {err.map((value, i) => (
            <li key={i} style={{ color: "red" }}>{value}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Register;
