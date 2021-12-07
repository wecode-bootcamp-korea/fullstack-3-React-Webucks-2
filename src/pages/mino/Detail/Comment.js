import React from "react";


export default function Comment(props) {
  return (
    <p className="review-comments">
      <span className="reviewer">{props.userId}</span>
      <span>{props.text}</span>
    </p>
  )
}