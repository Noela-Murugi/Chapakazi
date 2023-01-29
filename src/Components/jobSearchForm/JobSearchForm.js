import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./JobSearchForm.css";

function JobSearchForm({ handleChange, jobSearch }) {
  console.log(jobSearch);

  return (
    <div className="jobSearchContainer">
      <form className="job-search-form">
        <input
          type="text"
          placeholder="search for jobs"
          value={jobSearch}
          onChange={handleChange}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
}

export default JobSearchForm;
