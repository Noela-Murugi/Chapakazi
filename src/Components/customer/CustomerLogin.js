import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Customer.css";
import { loginCustomer } from "./customerSlice";

function CustomerLogin() {
  const errors = useSelector((state) => state.customers.errors);
  const customerInfo = useSelector((state) => state.customers);
  const status = useSelector((state) => state.customers.status);

  console.log(customerInfo);

  const navigate = useNavigate();
  const [customerLogin, setCustomerLogin] = useState({
    username: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setCustomerLogin({ ...customerLogin, [name]: value });
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(loginCustomer(customerLogin, navigate));
    setCustomerLogin({
      username: "",
      password: "",
    });
  }
  useEffect(() => {
    if (!errors) {
      setIsVisible(false);
    }

    setIsVisible(true);
    const timer = setInterval(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [errors]);

  return (
    <>
    
      <div className="form">
      <Link to="/">
        <h2 style={{ textAlign: "left", height: "80px", fontSize: "25px"}}>
          Chapa
          <span style={{ fontSize: "25px", color: "#feb800" }}>Kazi</span>
        </h2>
      </Link>
        <div className="right-container" onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <hr />
          <header>
            <div className="set">
              <div className="email">
                <label>Name</label>
                <input
                  type="text"
                  name="username"
                  value={customerLogin.username}
                  onChange={handleChange}
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  value={customerLogin.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {isVisible ? (
              errors.length > 0 ? (
                <h2 id="login-error">
                  {errors.find((error) =>
                    error.includes("Invalid username or password")
                  )}
                </h2>
              ) : null
            ) : null}
          </header>

          <footer>
            <div className="set">
              <button id="next" type="submit" onClick={handleFormSubmit}>
                {status === "loading" ? "Logging in ..." : "Login"}
              </button>
            </div>
            <Link to="/customerSignup">
              <h2 id="login-btn">
                Do not have an account ?<span className="sign-up">Sign Up</span>
              </h2>
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}

export default CustomerLogin;
