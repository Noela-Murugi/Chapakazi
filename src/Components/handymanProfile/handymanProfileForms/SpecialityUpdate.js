import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSpeciality } from "../handymanProfileSlice";

function SpecialityUpdate({setTriggerSpeciality}) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  const [speciality, setSpeciality] = useState({
    speciality: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSpeciality({
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(updateSpeciality(profileId, token, speciality, setTriggerSpeciality));
    setTriggerSpeciality(false)
    setSpeciality({
      speciality: "",
    });
  }
  return (
    <div className="updateForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="speciality"
          value={speciality.speciality}
          onChange={handleChange}
        />
        <button> submit change </button>
      </form>
    </div>
  );
}

export default SpecialityUpdate;
