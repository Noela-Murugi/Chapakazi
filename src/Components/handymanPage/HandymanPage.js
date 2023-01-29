import { faHeart, faMessage, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ReviewContainer from "../review/ReviewContainer";
import CustomerHeader from "../CustomerHeader/CustomerHeader";
import "./HandymanPage.css";


function HandymanPage() {
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState("idle");
  const [errors, setError] = useState([]);
  const token = localStorage.getItem("customer");

  useEffect(() => {
    setLoading("loading");
    const fetchProfile = async () => {
      const response = await fetch(
        `https://chapakazi-server-production.up.railway.app/handymen/${profileId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setLoading("idle");
        setProfile(data);
      } else {
        setError(data.errors);
        setLoading("idle");
      }
    };

    fetchProfile();
  }, [profileId, token]);

  if (loading === "loading") {
    return <h2 className="no-jobs">Loading...</h2>;
  }

  return (
    <div className="handymanpage">
      {errors?.length > 0 ? (
        <div className="error">{errors.join("/")}</div>
      ) : null}
      <CustomerHeader />
      <div className="top-handyman-section">
        <div className="left-section-handyman">
          <div className="handyman-info">
            <img src={profile.image} alt="handyman profile" />
            <h3>{profile.username}</h3>
            <p>{profile.speciality}</p>
            <div className="rating">
              {[...Array(5)].map((star, index) => {
                return (
                  <FontAwesomeIcon icon={faStar} className="star" key={index} />
                );
              })}
            </div>
            <div className="call-action">
              <FontAwesomeIcon icon={faHeart} className="action-icon" />
              <FontAwesomeIcon icon={faMessage} className=" action-icon" />
            </div>
          </div>
        </div>
        <div className="about-info">
          <h3>About</h3>
          <p>{profile.description}</p>
        </div>
      </div>

      <ReviewContainer profileId={profileId} />
    </div>
  );
}

export default HandymanPage;
