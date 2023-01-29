import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import { fetchReviews } from "../review/ReviewSlice";
import MyReviewCard from "./MyReviewCard";

function MyReview() {
  const dispatch = useDispatch();
  const handymanId = JSON.parse(localStorage.getItem("profileId"));
  const allReviews = useSelector((state) => state.reviews.reviews);
  const status = useSelector((state) => state.reviews.status);

  useEffect(() => {
    dispatch(fetchReviews(localStorage.getItem("handyman")));
  }, [dispatch]);

  function filterReviews() {
    if (status === "loading") {
      return <h2 className="loading"> Loading...</h2>;
    } else {
      const myReviews = allReviews?.filter(
        (review) => review.handyman_id === handymanId
      );

      const reviewList = myReviews?.map((review) => (
        <MyReviewCard key={review.id} review={review} />
      ));

      return reviewList;
    }
  }

  return (
    <>
      <Header />
      <div className="review-container review-handyman job-container">
        {filterReviews()?.length === 0 ? (
          <div className="no-jobs" >
            You Have no reviews
          </div>
        ) : null}
        {filterReviews()}
      </div>
    </>
  );
}

export default MyReview;
