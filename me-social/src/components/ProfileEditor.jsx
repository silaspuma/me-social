import { useState } from "react";
import { updateUser, getSession } from "../api";

export default function ProfileEditor({ onClose }) {
  const session = getSession();
  const [bio, setBio] = useState(session.bio || "");
  const [banner, setBanner] = useState(session.banner || "");
  const [displayName, setDisplayName] = useState(session.displayName || "");

  const save = () => {
    updateUser(session.username, { bio, banner, displayName });
    onClose();
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <input
        placeholder="Display name"
        className="border w-full mb-2 p-2"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <input
        placeholder="Banner URL"
        className="border w-full mb-2 p-2"
        value={banner}
        onChange={(e) => setBanner(e.target.value)}
      />
      <textarea
        placeholder="Bio"
        className="border w-full mb-2 p-2"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button onClick={save} className="bg-blue-600 text-white px-4 py-1 rounded">
        Save
      </button>
    </div>
  );
}
