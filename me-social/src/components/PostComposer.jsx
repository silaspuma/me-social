import { useState } from "react";

export default function PostComposer({ onPost }) {
  const [mode, setMode] = useState("text");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const submit = () => {
    onPost({ type: mode, text, image, tags: tags.split(",") });
    setText("");
    setImage(null);
    setTags("");
  };

  return (
    <div className="bg-white rounded p-4 shadow mb-4">
      <div className="flex gap-2 mb-2">
        <button onClick={() => setMode("text")} className="px-2 py-1 border">
          Text
        </button>
        <button onClick={() => setMode("image")} className="px-2 py-1 border">
          Image
        </button>
      </div>
      {mode === "text" ? (
        <textarea
          className="w-full border p-2"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <input type="file" onChange={handleImage} />
      )}
      <input
        className="w-full border p-2 mt-2"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button onClick={submit} className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
        Post
      </button>
    </div>
  );
}
