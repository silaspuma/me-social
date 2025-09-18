import { useState } from "react";
import { login } from "../api";
import { useNavigate, Link } from "react-router-dom";

export default function Landing() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = () => {
    const u = login(username, password);
    if (u) nav("/home");
    else alert("Invalid login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl mb-4">Sign In</h1>
        <input
          placeholder="Username"
          className="border w-full p-2 mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded">
          Sign In
        </button>
        <p className="mt-2 text-sm">
          Don’t have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
