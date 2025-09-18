import { useState } from "react";
import { signup } from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState("");
  const nav = useNavigate();

  const handleSignup = () => {
    signup({ fullName, username, password, icon, bio: "", verified: false });
    nav("/home");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl mb-4">Sign Up</h1>
        <input
          placeholder="Full name"
          className="border w-full p-2 mb-2"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
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
        <input
          placeholder="Profile picture URL"
          className="border w-full p-2 mb-2"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
        <button onClick={handleSignup} className="w-full bg-blue-600 text-white p-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
}
