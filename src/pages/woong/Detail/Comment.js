import React from 'react';

function Comment({ commentArray }) {
  return (
    <ul className="reviewLog">
      {commentArray &&
        commentArray.map((comment, id) => (
          <li key={id}>
            <span className="nickname">woongstaa</span>
            <span>{comment}</span>
          </li>
        ))}
    </ul>
  );
}

export default Comment;
