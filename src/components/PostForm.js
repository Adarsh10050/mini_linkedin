import React, { useState } from "react";
import '../styles/PostForm.css';

const PostForm = ({ onAddPost }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onAddPost(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        placeholder="Share something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
