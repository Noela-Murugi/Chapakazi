import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerProfile.css";

function CustomerProfile() {
  const navigate = useNavigate();

  const customerId = JSON.parse(localStorage.getItem("customerInfo"));
  const [customer, setCustomer] = useState({});
  const [errors, setErrors] = useState([]);
  const token = localStorage.getItem("customer");

  useEffect(() => {
    const fetchCustomer = async () => {
      const response = await fetch(`https://chapakazi-server-production.up.railway.app/customers/${customerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setCustomer(data);
      } else {
        setErrors(data.errors);
      }
    };

    fetchCustomer();
  }, [token, customerId]);

  function logout() {
    localStorage.removeItem("customer");
    localStorage.removeItem("customerInfo");
    navigate("/customerLogin");
  }

  function resetPassword(){
    navigate("/passwordReset/form")
  }

  return (
    <>
      <div className="customer-profile">
        {errors.length > 0 ? (
          <div
            className="customer-profile"
            style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}
          >
            Log in to view profile
          </div>
        ) : null}
        <img src={customer.image} alt={customer.username} />
        <h3>{customer.username}</h3>
        <h4>{customer.location}</h4>
        <div className="profile-actions">
          <button className="customer-logout-btn" onClick={logout}>
            Log Out
          </button>
          <button className="customer-reset" onClick={resetPassword}>
            Reset Password
          </button>
          {/* <Link to="/messages">
          <button >message</button>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default CustomerProfile;
