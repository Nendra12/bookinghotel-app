import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authServices";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await registerUser({
      name,
      email,
      password,
    });

    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="passwordField"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Create
        </button>
        <Link to={"/login"} className="text-blue-600 ">login</Link>
      </form>
    </div>
  );
}

export default Register;
