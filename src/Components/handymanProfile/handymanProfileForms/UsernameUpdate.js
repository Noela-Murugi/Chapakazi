import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../handymanProfileSlice";

function UsernameUpdate({ setTriggerName }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  const [userName, setUserName] = useState({
    username: "",
  });
  const errors = useSelector((state) => state.handymanProfile.errors);
  const status = useSelector((state) => state.handymanProfile.status);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUserName({ [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateUserName(profileId, token, userName, setTriggerName));

    setUserName({
      username: "",
    });
  }
  return (
    <div className="updateForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userName.username}
          onChange={handleChange}
        />
        <button> {status === "loading" ? "submitting..." : "submit change"}  </button>
      </form>
      {errors.length > 0 ? (
        <span className="errorMessage">{errors.join("/n")}</span>
      ) : null}
    </div>
  );
}

export default UsernameUpdate;
