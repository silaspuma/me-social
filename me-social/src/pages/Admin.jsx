import Navbar from "../components/Navbar";
import { getSession, users, verifyUser } from "../api";

export default function Admin() {
  const session = getSession();
  if (session.username !== "silaspuma") return <p>No access</p>;

  const handleVerify = () => {
    const target = prompt("Enter username to verify:");
    if (target) {
      verifyUser(target);
      alert(`@${target} is now verified`);
    }
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="p-4 flex-1">
        <h1 className="text-xl mb-4">Admin Panel</h1>
        <button
          onClick={handleVerify}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Verification Badge
        </button>
      </div>
    </div>
  );
}
