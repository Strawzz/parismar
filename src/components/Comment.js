import React, { useState } from 'react';
import { createComment } from './CallAPI';

const Comment = ({ comments, onCommentsUpdate, marketName }) => {
  const [newComment, setNewComment] = useState('');
  const [userId, setUserId] = useState('');
  const [loginId, setLoginId] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== '' && userId.trim() !== '' && loginId.trim() !== '') {
      try {
        await createComment(loginId, marketName,userId, newComment);
        // Fetch updated comments or handle the update through your existing logic
  
        // Clear the input fields after posting the comment
        setNewComment('');
        setUserId('');
        setLoginId('');
        if (typeof onCommentsUpdate === 'function') {
          onCommentsUpdate();
        }
      } catch (error) {
        console.error('Error adding comment:', error.message);
      }
    }
  };


  return (
    <div className="comment-section">
      <h4>Comments</h4>
      
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>@{comment.loginId}</p>
            <p>{comment.content}</p>
            <button>Like</button>
          </li>
        ))}
      </ul>

      <div>
          <input
          type="text"
          placeholder="Enter your userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div>
          <input
            type="text"
            placeholder="Enter your loginId"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
      </div>
      <textarea
        placeholder="Add a comment..."
        value={newComment}
        onChange={handleCommentChange}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default Comment;


