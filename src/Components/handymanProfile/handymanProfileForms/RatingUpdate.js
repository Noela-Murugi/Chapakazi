import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRating } from "../handymanProfileSlice";

function RatingUpdate({ setTriggerRating }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  const [rating, setRating] = useState({
    rating: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setRating({
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateRating(profileId, token, rating, setTriggerRating));

    setRating({
      rating: "",
    });
  }
  return (
    <div className="updateForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="rating"
          value={rating.location}
          onChange={handleChange}
        />
        <button> submit change </button>
      </form>
    </div>
  );
}

export default RatingUpdate;
