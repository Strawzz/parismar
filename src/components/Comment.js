import React, { useState } from 'react';
import { createComment } from './CallAPI';
import '../styles/comment.css';

const Comment = ({ comments, onCommentsUpdate, marketName, userId, loginId }) => {
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');
  


  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== '' && userId && userId.trim() !== '' && loginId && loginId.trim() !== '') {
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
    else {
      console.error('Error: Please fill in all required fields.');
      setError('Please log in first!');
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
      <div className='errorSection'>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Comment;
