import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Alert.css";

function Alert() {
  const navigate = useNavigate();
  const [visible, setInVisible] = useState(false);

  const customer = useSelector((state) => state.customers.customer);
  const customerLength = Object.keys(customer).length;

  return (
    <div className="popup" style={{ display: visible ? "none" : null }}>
      <div className="alert">
        <p>You have successfully sign up</p>
        <button
          className="ok-button"
          onClick={() => {
            if (customerLength > 0) {
              navigate("/customerLogin");
              setInVisible(true);
            } else {
              navigate("/handymanLogin");
              setInVisible(true);
            }
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Alert;
