import { faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Header from "../header/Header";

import "./JobPage.css";

function JobPage() {
  const jobInfo = JSON.parse(localStorage.getItem("job"));
  const [apply, setApply] = useState(false);
  const [loading, setLoading] = useState("idle");
  const [jobStatus, setJobStatus] = useState([]);

  function applyJob() {
    const fetchjobHandymen = async () => {
      const response = await fetch(
        `https://chapakazi-server-production.up.railway.app/job_handymen`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("handyman")}`,
            "Content-Type": "Application/Json",
          },
          body: JSON.stringify({
            job_id: jobInfo.id,
            handyman_id: JSON.parse(localStorage.getItem("profileId")),
            status: "Not Approved",
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setApply(true);
      } else {
        console.log(data.errors);
      }
    };
    fetchjobHandymen();
  }

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
        console.log(data);
        setJobStatus(data);
        setApply(false);
      } else {
        setLoading("idle");
        console.log(data.errors);
      }
    };
    fetchjobHandymen();
  }, [jobInfo.id]);

  function findStatus() {
    if (loading === "loading") {
      return "this";
    } else {
      const status = jobStatus?.find(
        (job) =>
          JSON.parse(localStorage.getItem("profileId")) === job.handyman_id &&
          jobInfo.id === job.job_id
      );
      return status;
    }
  }

  function applicationStatusDisplay() {
    if (findStatus()?.status === "rejected") {
      return <span className="application-status">Application Rejected</span>;
    } else if (findStatus()?.status === "approved") {
      return <span className="application-status">Application Approved</span>;
    } else {
      return null;
    }
  }
  console.log("This is the one", findStatus());

  return (
    <>
      <Header />
      <div className="job-page">
        <div className="job-info">
          <h2>{jobInfo.title}</h2>
          <p>{jobInfo.description}</p>
          <span>{jobInfo.budget}</span>

          <button
            className="apply-job"
            onClick={() => {
              applyJob();
            }}
          >
            {apply ? " Wait for response" : "Apply Now"}
          </button>

          {apply ? (
            <h3
              style={{
                marginTop: "20px",
                backgroundColor: "white",
                padding: "5px 20px",
                color: "#0a3971",
                width: "60%",
              }}
            >
              Your profile is currently under review by the client
            </h3>
          ) : null}
        </div>

        <div className="customer-info">
          <h2>Client Info</h2>
          <img src={jobInfo.customer.image} alt={jobInfo.customer.username} />
          <h3>{jobInfo.customer.username}</h3>
          <h4>{jobInfo.customer.location}</h4>

          <div className="call-action" style={{ margin: "0 auto" }}>
            <FontAwesomeIcon icon={faHeart} className="action-icon" />
            <FontAwesomeIcon icon={faMessage} className=" action-icon" />
          </div>

          {applicationStatusDisplay()}
        </div>
      </div>
    </>
  );
}

export default JobPage;
