import Navbar from "../components/Navbar";

export default function Messages() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 p-4">
        <h1 className="text-xl">Messages</h1>
        <p>Messages isn’t ready for production yet.</p>
      </div>
    </div>
  );
}
