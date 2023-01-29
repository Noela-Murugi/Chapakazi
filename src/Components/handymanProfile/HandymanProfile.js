import { faCamera, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import DescriptionUpdate from "./handymanProfileForms/DescriptionUpdate";
import ImageUpdate from "./handymanProfileForms/ImageUpdate";
import LocationUpdate from "./handymanProfileForms/LocationUpdate";
import RatingUpdate from "./handymanProfileForms/RatingUpdate";
import SpecialityUpdate from "./handymanProfileForms/SpecialityUpdate";
import UsernameUpdate from "./handymanProfileForms/UsernameUpdate";
import { fetchHandyman } from "./handymanProfileSlice";
import "./HandymanProfile.css";

function HandymanProfile() {
  const profileId = localStorage.getItem("profileId");
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const handymanProfile = useSelector(
    (state) => state.handymanProfile.handyman
  );
  const status = useSelector((state) => state.handymanProfile.status);
  const [trigger, setTrigger] = useState(false);
  const [triggerName, setTriggerName] = useState(false);
  const [triggerLocation, setTriggerLocation] = useState(false);
  const [triggerDescription, setTriggerDescription] = useState(false);
  const [triggerSpeciality, setTriggerSpeciality] = useState(false);
  const [triggerRating, setTriggerRating] = useState(false);

  useEffect(() => {
    dispatch(fetchHandyman(profileId, token));
  }, [profileId, token, dispatch]);

  if (status === "loading") {
    return <h2 style={{ fontSize: "30px" }}>Loading...</h2>;
  }
  return (
    <>
      <Header />

      <div className="profile-container">
        <div className="row-update">
          <img src={handymanProfile.image} alt="profile pic" />
          <FontAwesomeIcon
            icon={faCamera}
            onClick={() => setTrigger((prev) => !prev)}
            className="user-update image-profile"
          />

          {trigger ? <ImageUpdate setTrigger={setTrigger} /> : null}
        </div>

        <div className="row-update">
          <h2>
            {handymanProfile.username}
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => setTriggerName((prev) => !prev)}
              className="user-update pen"
            />
          </h2>

          {triggerName ? (
            <UsernameUpdate setTriggerName={setTriggerName} />
          ) : null}
        </div>

        <div className="row-update">
          <h3>
            {handymanProfile.location}
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => setTriggerLocation((prev) => !prev)}
              className="user-update pen"
            />
          </h3>

          {triggerLocation ? (
            <LocationUpdate setTriggerLocation={setTriggerLocation} />
          ) : null}
        </div>

        <div className="row-update">
          <h4>
            {handymanProfile.speciality}
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => setTriggerSpeciality((prev) => !prev)}
              className="user-update pen"
            />
          </h4>

          {triggerSpeciality ? (
            <SpecialityUpdate setTriggerSpeciality={setTriggerSpeciality} />
          ) : null}
        </div>
        <div className="row-update">
          <h4>
            {handymanProfile.rating}
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => setTriggerRating((prev) => !prev)}
              className="user-update pen"
            />
          </h4>

          {triggerRating ? (
            <RatingUpdate setTriggerRating={setTriggerRating} />
          ) : null}
        </div>
        <div className="row-update">
          <h5>
            Description
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => setTriggerDescription((prev) => !prev)}
              className="user-update pen"
            />
          </h5>
          <p>{handymanProfile.description}</p>

          <br />
          {triggerDescription ? (
            <DescriptionUpdate setTriggerDescription={setTriggerDescription} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default HandymanProfile;
