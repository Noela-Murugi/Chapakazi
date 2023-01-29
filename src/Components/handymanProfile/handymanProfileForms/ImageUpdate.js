import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateImage } from "../handymanProfileSlice";
import "../HandymanProfile.css"

function ImageUpdate({ setTrigger }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  const [image, setImage] = useState({
    image: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setImage((prev) => (prev = { [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateImage(profileId, token, image, setTrigger));
    setImage({
      image: "",
    });
  }

  return (
    <div className="updateForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={image.image}
          name="image"
          onChange={handleChange}
        />
        <button>submit change</button>
      </form>
    </div>
  );
}

export default ImageUpdate;
