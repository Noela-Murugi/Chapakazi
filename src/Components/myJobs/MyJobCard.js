import React, { useState } from "react";

import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch } from "react-redux";
import { removeJobs } from "../job/jobslice";
import { Link } from "react-router-dom";

function MyJobCard({
  job,
  rejectApplication,
  acceptApplication,
  newJobHandymen,
}) {
  const dispatch = useDispatch();

  const [handymen] = useState(job.handymen);
  const [jobHandymen] = useState(job.job_handymen);

  const handyman_id = Object.keys(jobHandymen).handyman_id;
  const arrayUniqueByKey = [
    ...new Map(jobHandymen.map((item) => [item[handyman_id], item])).values(),
  ];

  const uniqueHandymen = [
    ...new Map(handymen.map((item) => [item[handyman_id], item])).values(),
  ];

  function handleDelete(jobId) {
    const token = localStorage.getItem("customer");
    dispatch(removeJobs(jobId, token));
  }

  function getAcceptance(handymanId) {
    const reject = arrayUniqueByKey.find(
      (jobHandyman) => jobHandyman.handyman_id === handymanId
    );
    acceptApplication(reject);
  }

  function getReject(handymanId) {
    const reject = arrayUniqueByKey.find(
      (jobHandyman) => jobHandyman.handyman_id === handymanId
    );
    rejectApplication(reject);
  }

  const jobHandymenList = arrayUniqueByKey.map((jobHandyman) => {
    if (jobHandyman.id === newJobHandymen.id) {
      return newJobHandymen;
    } else {
      return jobHandyman;
    }
  });

  const applicants = uniqueHandymen.map((handyman, index) => {
    return (
      <div className="applicant" key={index}>
        <img src={handyman.image} alt={handyman.username} className="" />
        <div className="applicants-info">
          <h5>
            <Link to="/profilepage">{handyman.username}</Link>
          </h5>
          <span>{handyman.speciality}</span>
          <span>
            {
              jobHandymenList.find(
                (jobHandyman) => jobHandyman.handyman_id === handyman.id
              ).status
            }
          </span>
        </div>
        <span className="accept-btn" onClick={() => getAcceptance(handyman.id)}>
          Accept
        </span>
        <FontAwesomeIcon
          icon={faX}
          onClick={() => getReject(handyman.id)}
          className="reject-btn"
        />
      </div>
    );
  });

  console.log(jobHandymen);
  return (
    <div className="job-card">
      <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(job.id)} />
      <h2> {job.title} </h2>
      <span> {job.budget} </span>
      <p> {job.description} </p>
      <h3>Applicants</h3>
      <div className="applicants-container">{applicants}</div>
    </div>
  );
}

export default MyJobCard;
