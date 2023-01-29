import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Review.css";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { fetchReviews } from "./ReviewSlice";

function ReviewContainer({ profileId }) {
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("customer");
  const [jobStatus, setStatus] = useState([]);
  const [loading, setLoading] = useState("idle");
  const reviews = useSelector((state) => state.reviews.reviews);
  
  function handleReviewAdd() {
    setTrigger((prevState) => !prevState);
  }

  useEffect(() => {
    dispatch(fetchReviews(token));
  }, [dispatch, token]);

  const handymanReviews = reviews.filter(
    (review) => review.handyman_id === profileId
  );

  const reviewsList = handymanReviews.map((review) => (
    <ReviewCard key={review.id} review={review} />
  ));

  useEffect(() => {
    setLoading("loading");
    const fetchjobHandymen = async () => {
      const response = await fetch(
        `https://chapakazi-server-production.up.railway.app/job_handymen`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("customer")}`,
            "Content-Type": "Application/Json",
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setLoading("idle");
        console.log(data);
        setStatus(data);
      } else {
        setLoading("idle");
        console.log(data.errors);
      }
    };
    fetchjobHandymen();
  }, []);

  function fetchStatus() {
    if (loading === "loading") {
      return null;
    } else {
      const status = jobStatus?.find(
        (job) =>
          JSON.parse(localStorage.getItem("profileId")) === job.handyman_id &&
          job.status === "approved"
      );
      if (status) {
        return status.status;
      } else {
        return false;
      }
    }
  }
  console.log(jobStatus);
  console.log(JSON.parse(localStorage.getItem("profileId")));
  console.log(fetchStatus());

  return (
    <div className="review-container">
      <div className="top-review-header">
        <div className="top-review-header-left">
          <h3>Reviews</h3>
        </div>
        {fetchStatus() === "approved" ? (
          <div className="top-review-header-right">
            <button onClick={handleReviewAdd}>Add a Review</button>
          </div>
        ) : null}
      </div>
      {reviewsList}
      {trigger ? (
        <ReviewForm setTrigger={setTrigger} profileId={profileId} />
      ) : null}
    </div>
  );
}

export default ReviewContainer;
