import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "./jobslice";
import "./Job.css";
import { useNavigate } from "react-router-dom";
import CustomerHeader from "../CustomerHeader/CustomerHeader";

function JobForm() {
  const errors = useSelector((state) => state.jobs.errors);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [job, setJob] = useState({
    title: "",
    description: "",
    budget: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setJob({ ...job, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const customerToken = localStorage.getItem("customer");
    dispatch(addJob(job, customerToken, navigate));
    setJob({
      title: "",
      description: "",
      budget: "",
    });
  }

  return (
    <>
      <CustomerHeader />

      <div className="job-form-container">
        <form className="job-form" onSubmit={handleSubmit}>
          <label> Title </label>
          <br />
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={job.title}
          />
          {errors.length > 0 ? (
            <span className="job-errors">
              {errors.find((error) => error.includes("Title"))}
            </span>
          ) : null}
          <br />

          <label> Budget </label>
          <br />
          <input
            type="text"
            name="budget"
            onChange={handleChange}
            placeholder="$20-$50"
            value={job.budget}
          />
          <label> Description </label>
          <br />
          <textarea
            cols="100"
            rows="50"
            name="description"
            onChange={handleChange}
            value={job.description}
          />
          {errors.length > 0 ? (
            <span className="job-errors">
              {errors.find((error) => error.includes("Description"))}
            </span>
          ) : null}

          {errors.length > 0 ? (
            <span className="jobLogin-errors" >
              {errors.find((error) => error.includes("Please log in"))}
            </span>
          ) : null}
          <br />

          <br />

          <button id="job-form-btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default JobForm;
