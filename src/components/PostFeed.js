import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostFeed = ({ newPost }) => {
  const [posts, setPosts] = useState([]);

  // Load posts
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data.reverse()); // Show latest first
    };
    fetchPosts();
  }, []);

  // Show newly created post instantly
  useEffect(() => {
    if (newPost) {
      setPosts(prev => [newPost, ...prev]);
    }
  }, [newPost]);

  return (
    <div>
      <h2>Post Feed</h2>
      {posts.map((post) => (
        <div key={post._id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
          <p><strong>User:</strong> {post.userId?.name || 'Unknown User'}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostFeed;
