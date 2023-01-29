import React from "react";

function MyReviewCard({ review }) {
  return (
    <div className="review-body">
      <p>{review.comment}</p>
    </div>
  );
}

export default MyReviewCard;
