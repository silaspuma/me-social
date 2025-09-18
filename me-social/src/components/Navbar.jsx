import { Link, useNavigate } from "react-router-dom";
import { Home, MessageSquare, User, Shield } from "lucide-react";
import { getSession, logout } from "../api";

export default function Navbar() {
  const user = getSession();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/");
  };

  return (
    <div className="w-48 h-screen bg-gray-900 text-white p-4 flex flex-col gap-4">
      <Link to="/home" className="flex items-center gap-2">
        <Home size={20} /> Home
      </Link>
      <Link to="/messages" className="flex items-center gap-2">
        <MessageSquare size={20} /> Messages
      </Link>
      <Link to={`/@${user.username}`} className="flex items-center gap-2">
        <User size={20} /> Profile
      </Link>
      {user.username === "silaspuma" && (
        <Link to="/admin" className="flex items-center gap-2 mt-auto">
          <Shield size={20} /> Admin
        </Link>
      )}
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-600 px-3 py-1 rounded"
      >
        Log out
      </button>
    </div>
  );
}
