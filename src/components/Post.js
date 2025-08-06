import React from "react";
import Comment from "./Comment";
import '../styles/Post.css';

const Post = ({ post, onLike, onComment }) => (
  <div className="post">
    <div className="post-header">
      <img src={post.authorAvatar} alt="avatar" className="avatar" />
      <h4>{post.authorName}</h4>
    </div>
    <p>{post.content}</p>
    <div className="post-actions">
      <button onClick={() => onLike(post.id)}>👍 {post.likes}</button>
    </div>
    <div className="comments">
      {post.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.comment.value;
        onComment(post.id, text);
        e.target.reset();
      }}
    >
      <input name="comment" placeholder="Add a comment..." />
      <button type="submit">Post</button>
    </form>
  </div>
);

export default Post;
