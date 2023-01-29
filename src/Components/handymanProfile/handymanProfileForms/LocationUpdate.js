import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateLocation } from "../handymanProfileSlice";

function LocationUpdate({setTriggerLocation}) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  const [location, setLocation] = useState({
    location: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLocation({
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateLocation(profileId, token, location, setTriggerLocation));
    setTriggerLocation(false)
    setLocation({
      location: "",
    });
  }
  return (
    <div className="updateForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          value={location.location}
          onChange={handleChange}
        />
        <button> submit change </button>
      </form>
    </div>
  );
}

export default LocationUpdate;
