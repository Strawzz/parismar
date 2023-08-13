import React, { useState } from 'react';
import { createComment } from './CallAPI';
import '../styles/comment.css';

const Comment = ({ comments, onCommentsUpdate, marketName, userId, loginId }) => {
  const [newComment, setNewComment] = useState('');
  


  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== '' && userId.trim() !== '' && loginId.trim() !== '') {
      try {
        await createComment(loginId, marketName, userId, newComment);
        setNewComment('');
        if (typeof onCommentsUpdate === 'function') {
          onCommentsUpdate();
        }
      } catch (error) {
        console.error('Error adding comment:', error.message);
      }
    }
  };

  

  return (
    <div className="comment-content-section">
      <textarea
        className="comment-input"
        placeholder="Add a comment..."
        value={newComment}
        onChange={handleCommentChange}
      />
      <button className="comment-button" onClick={handleAddComment}>
        <strong>Submit</strong>
      </button>
    </div>
  );
};

export default Comment;
