import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";
import { useDispatch } from "react-redux";
import { downVoteReview, removeReview, upVoteReview } from "./ReviewSlice";

function ReviewCard({ review }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("customer");
  const [like, setLike] = useState(null);

  function handleDelete(reviewId) {
    dispatch(removeReview(reviewId, token));
  }

  function handleUpVote(reviewId, votes) {
    dispatch(upVoteReview(reviewId, token, votes));
    setLike(true);
  }

  function handleDownVote(reviewId, votes) {
    dispatch(downVoteReview(reviewId, token, votes));
    setLike(false);
  }

  return (
    <>
      <div className="review-body">
        {review.customer.id ===
        JSON.parse(localStorage.getItem("customerInfo")) ? (
          <FontAwesomeIcon
            icon={faTrash}
            id="trash-can"
            onClick={() => handleDelete(review.id)}
          />
        ) : null}

        <p>{review.comment}</p>
        <div className="dislike-like">
          <FontAwesomeIcon
            icon={faThumbsUp}
            id="thumbs-up"
            className={like ? "active" : "disabled"}
            onClick={() => handleUpVote(review.id, review.votes)}
          />
          <FontAwesomeIcon
            icon={faThumbsDown}
            className={like ? "disabled" : "active"}
            id="thumbs-down"
            onClick={() => handleDownVote(review.id, review.votes)}
          />
          <span>{review.votes}</span>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
