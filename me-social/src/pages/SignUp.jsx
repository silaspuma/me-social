import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api.js";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username || !password || !fullName) return alert("Fill all fields");
    signup({ username, password, fullName, verified: false });
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sign Up</h1>
      <input placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
      <br />
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}
