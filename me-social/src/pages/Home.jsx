import { useState } from "react";
import { getSession, getPosts, addPost } from "../api";
import Navbar from "../components/Navbar";
import PostComposer from "../components/PostComposer";
import Post from "../components/Post";

export default function Home() {
  const user = getSession();
  const [posts, setPosts] = useState(getPosts());

  if (!user) return <p>You are not logged in</p>;

  const handleNewPost = (content) => {
    addPost({ ...content, user });
    setPosts(getPosts());
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 p-4">
        <PostComposer onPost={handleNewPost} />
        {posts.map((p, i) => (
          <Post key={i} post={p} />
        ))}
      </div>
    </div>
  );
}
