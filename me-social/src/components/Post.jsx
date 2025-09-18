import { CheckCircle } from "lucide-react";

export default function Post({ post }) {
  return (
    <div className="bg-gray-100 rounded p-3 mb-2">
      <div className="flex items-center gap-2 mb-2">
        <img
          src={post.user.icon || "https://via.placeholder.com/40"}
          className="w-8 h-8 rounded-full"
        />
        <span className="font-bold">{post.user.displayName || post.user.username}</span>
        {post.user.verified && <CheckCircle size={16} className="text-blue-500" />}
      </div>
      {post.type === "text" && <p>{post.text}</p>}
      {post.type === "image" && post.image && (
        <img src={post.image} alt="" className="rounded" />
      )}
      {post.tags?.length > 0 && (
        <p className="text-sm text-gray-500">Tags: {post.tags.join(", ")}</p>
      )}
    </div>
  );
}
