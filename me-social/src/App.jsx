import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/@:username" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
