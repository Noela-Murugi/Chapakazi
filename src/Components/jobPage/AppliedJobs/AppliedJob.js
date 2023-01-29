import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHandyman } from "../../handymanProfile/handymanProfileSlice.js";
import Header from "../../header/Header.js";
import "./AppliedJob.css";

function AppliedJob() {
  const [jobStatus, setJobStatus] = useState([]);
  const [loading, setLoading] = useState("idle");
  const dispatch = useDispatch();
  const token = localStorage.getItem("handyman");
  const profileId = JSON.parse(localStorage.getItem("profileId"));
  useEffect(() => {
    const fetchjobHandymen = async () => {
      setLoading("loading");
      const response = await fetch(
        `https://chapakazi-server-production.up.railway.app/job_handymen`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("handyman")}`,
            "Content-Type": "Application/Json",
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setLoading("idle");
        const status = data.filter(
          (job) =>
            JSON.parse(localStorage.getItem("profileId")) === job.handyman_id
        );
        setJobStatus(status);
      } else {
        setLoading("idle");
        console.log(data.errors);
      }
    };
    fetchjobHandymen();
  }, []);

  useEffect(() => {
    dispatch(fetchHandyman(profileId, token));
  }, [dispatch, token, profileId]);

  const newStatus = jobStatus?.filter((job) => job.handyman_id === profileId);
  console.log(newStatus);

  const profile = useSelector((state) => state.handymanProfile.handyman);
  console.log(loading);
  const status = useSelector((state) => state.handymanProfile.status);
  const hand = useSelector((state) => state.handymanProfile.status);
  console.log(profile.jobs);
  console.log(hand);

  function getJobs() {
    if (status === "loading") {
      return <h1 className="one">Loading...</h1>;
    } else {
      const appliedJobsList = profile.jobs?.map((job, index) => (
        <div key={index} className="my-jobs-card">
          <h3>{job.title}</h3>
          <p>{job.summary}</p>

          <span>
            <Link to="/jobs/jobprofile/:page">more... </Link>
          </span>
        </div>
      ));
      return appliedJobsList;
    }
  }

  return (
    <>
      <Header />
      <h1 className="one">Applied Jobs</h1>
      <div className="my-jobs-container">{getJobs()}</div>;
    </>
  );
}

export default AppliedJob;
