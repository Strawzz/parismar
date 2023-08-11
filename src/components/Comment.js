import React, { useState } from 'react';
import { createComment } from './CallAPI';

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
    <div className="comment-section">
      

      {/* <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>@{comment.loginId}</p>
            <p>{comment.content}</p>
            <button>Like</button>
          </li>
        ))}
      </ul> */}

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
