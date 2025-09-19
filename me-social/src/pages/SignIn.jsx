import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getSession } from "../api.js";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  if (getSession()) nav("/");

  const handleLogin = () => {
    if (login(username, password)) nav("/");
    else alert("Invalid username or password");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sign In</h1>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}
