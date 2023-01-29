import React from "react";
import { Link } from "react-router-dom";
import LandingHeader from "../../LandingTopHeader/LandingHeader";
import "./RegistrationCard.css";

function RegistrationCard() {
  return (
    <>
    <LandingHeader />
      <div className="registration-card">
        <h2 id="join-intro"> Join Us Now </h2>
        <div id="bottom-container">
          <Link to="/handymanSignup">
            <div className="register-card">
              <h3>
                As a <br />
                Handyman
              </h3>
            </div>
          </Link>

          <Link to="/customerSignup">
            <div className="register-card">
              <h3>
                As a <br />
                Customer
              </h3>
            </div>
          </Link>
        </div>
        <h3 className="or">Or?</h3>
        <div className="register-btn-land">
          <Link to="/handymanLogin">
            <span className="login-btn-land">Log in as a handyman</span>
          </Link>
          <Link to="/customerLogin">
            <span className="login-btn-land">Log in as a customer</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RegistrationCard;
