import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchJob } from "./jobslice";

function JobCard({ job }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(job);
  function handleJob(jobId) {
    const token = localStorage.getItem("handyman");
    dispatch(fetchJob(jobId, token, navigate));
  }

  return (
    <div className="job-card">
      <h2 id="job-title"> {job.title} </h2> <span> {job.budget} </span>
      <p> {job.summary} </p>
      <span id="more" onClick={() => handleJob(job.id)}>
        more...
      </span>
    </div>
  );
}

export default JobCard;
