import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ userId, onPostCreated }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/posts', {
        userId,
        content,
      });

      // Notify parent to update feed
      onPostCreated(res.data.post);

      // Clear input
      setContent('');
    } catch (error) {
      console.error('Post creation failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows="4"
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
