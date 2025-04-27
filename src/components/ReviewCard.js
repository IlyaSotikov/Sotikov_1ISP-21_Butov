import React from "react";
import "./ReviewCard.css";
const ReviewCard = ({ name, rating, comment }) => {
  return (
    <div className="review-card">
      <h4>{name}</h4>
      <div className="rating">{rating}</div>
      <p>{comment}</p>
    </div>
  );
};

export default ReviewCard;
