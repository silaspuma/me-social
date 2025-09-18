import { useParams } from "react-router-dom";
import { getUser, getUserPosts, getSession } from "../api";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import ProfileEditor from "../components/ProfileEditor";
import { useState } from "react";
import { CheckCircle, Edit } from "lucide-react";

export default function Profile() {
  const { username } = useParams();
  const user = getUser(username);
  const session = getSession();
  const posts = getUserPosts(username);
  const [editing, setEditing] = useState(false);

  if (!user) return <p>User not found</p>;

  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1">
        {user.banner && (
          <img src={user.banner} className="w-full h-40 object-cover" />
        )}
        <div className="p-4">
          <img
            src={user.icon || "https://via.placeholder.com/60"}
            className="w-20 h-20 rounded-full -mt-10 border-4 border-white"
          />
          <h2 className="text-xl font-bold flex items-center gap-1">
            {user.displayName || user.username}
            {user.verified && <CheckCircle size={18} className="text-blue-500" />}
          </h2>
          <p>@{user.username}</p>
          <p className="mt-2">{user.bio}</p>
          {session.username === username && (
            <button
              onClick={() => setEditing(!editing)}
              className="mt-2 flex items-center gap-1 bg-gray-200 px-3 py-1 rounded"
            >
              <Edit size={16} /> Edit Profile
            </button>
          )}
          {editing && <ProfileEditor onClose={() => setEditing(false)} />}
        </div>
        <div className="p-4">
          {posts.map((p, i) => (
            <Post key={i} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
