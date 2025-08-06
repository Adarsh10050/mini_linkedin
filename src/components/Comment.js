import React from "react";
import '../styles/Comment.css'; 

const Comment = ({ comment }) => (
  <div className="comment">
    <strong>{comment.authorName}: </strong>
    <span>{comment.text}</span>
  </div>
);

export default Comment;
