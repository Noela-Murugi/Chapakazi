import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBriefcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import CustomerProfile from "../customerProfile/CustomerProfile";
import "./CustomerHeader.css";

function CustomerHeader() {
  const [trigger, setTrigger] = useState(false);
  const customer = JSON.parse(localStorage.getItem("customerInfo"));

  return (
    <div className="header">
      <Link to="/">
        <h2>
          Chapa <span id="kazi-header"> Kazi </span>
        </h2>
      </Link>

      <nav>
        <ul>
          <Link to="/handymanProfiles">
            <li> Find Handyman </li>
          </Link>

          <Link to="/myjobs">
            <li> My Jobs </li>
          </Link>

          <Link to="/jobForm">
            <li>
              <FontAwesomeIcon icon={faBriefcaseMedical} className="addJob" />
            </li>
          </Link>

          <li>
            <FontAwesomeIcon
              icon={faUser}
              className="user-profile"
              onClick={() => {
                setTrigger((prev) => !prev);
              }}
            />
          </li>

          {trigger ? <CustomerProfile /> : null}
        </ul>
      </nav>
    </div>
  );
}

export default CustomerHeader;
