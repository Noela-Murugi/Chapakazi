import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerHeader from "../CustomerHeader/CustomerHeader";
import "../job/Job.css";
import { fetchJobs } from "../job/jobslice";
import MyJobCard from "./MyJobCard";

function Myjobs() {
  const dispatch = useDispatch();
  const customerId = JSON.parse(localStorage.getItem("customerInfo"));
  const allJobs = useSelector((state) => state.jobs.jobs);
  const status = useSelector((state) => state.jobs.status);
  const [newJobHandymen, setNewJobHandymen] = useState({});

  useEffect(() => {
    dispatch(fetchJobs(localStorage.getItem("customer")));
  }, [dispatch]);

  function rejectApplication(reject) {
    const rejectApplication = async () => {
      const response = await fetch(
        `https://chapakazi-server-production.up.railway.app/job_handymen/${reject.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("customer")}`,
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ status: "rejected" }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setNewJobHandymen(data);
      }
    };

    rejectApplication();
  }

  function acceptApplication(reject) {
    const acceptApplication = async () => {
      const response = await fetch(
        `https://chapakazi-server-production.up.railway.app/job_handymen/${reject.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("customer")}`,
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({ status: "approved" }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setNewJobHandymen(data);
      }
    };
    acceptApplication();
  }

  const myJobs = allJobs.filter((job) => job.customer.id === customerId);

  function displayJobs() {
    if (status === "loading") {
      return <h2 className="one">Loading...</h2>;
    } else {
      const myJobList = myJobs?.map((job) => (
        <MyJobCard
          key={job.id}
          job={job}
          rejectApplication={rejectApplication}
          acceptApplication={acceptApplication}
          newJobHandymen={newJobHandymen}
        />
      ));
      return myJobList;
    }
  }
  console.log(myJobs);

  console.log(newJobHandymen);
  return (
    <>
      <CustomerHeader />
      <br />
      <br />
      <div className="job-container">
        {displayJobs()?.length === 0 ? (
          <div className="no-jobs">No Jobs Added !!</div>
        ) : null}
        {displayJobs()}
      </div>
    </>
  );
}

export default Myjobs;
