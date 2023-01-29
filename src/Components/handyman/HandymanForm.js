import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Handyman.css";
import { addhandyman } from "./HandymanSlice";

function HandymanForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [handyman, setHandyman] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    location: "",
    speciality: "",
    image: "",
    description: "",
    rating: "",
    admin_id: 1,
  });

  const errors = useSelector((state) => state.handyman.errors);
  const status = useSelector((state) => state.handyman.status);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setHandyman({ ...handyman, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addhandyman(handyman, navigate));
    setHandyman({
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      location: "",
      speciality: "",
      image: "",
      description: "",
      rating: "",
      admin_id: 1,
    });
  }

  useEffect(() => {
    if (!errors) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = setInterval(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [errors]);
  return (
    <>
      <div className="handyman-form-container">
        <Link to="/">
          <h2 style={{ textAlign: "left", height: "80px", fontSize: "25px" }}>
            Chapa
            <span style={{ fontSize: "25px", color: "#feb800" }}>Kazi</span>
          </h2>
        </Link>
        <form
          id="handyman-signup"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="row-1">
            <div className="col-1">
              <label> Name </label> <br />
              <input
                type="text"
                className="handyman-input"
                value={handyman.username}
                name="username"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) => error.includes("Username"))}
                  </h3>
                ) : null
              ) : null}
            </div>
            <div className="col-1">
              <label> Email </label> <br />
              <input
                type="email"
                className="handyman-input"
                value={handyman.email}
                name="email"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) => error.includes("Email"))}
                  </h3>
                ) : null
              ) : null}
            </div>
          </div>
          <div className="row-2">
            <div className="col-1">
              <label> Location </label> <br />
              <input
                type="text"
                className="handyman-input"
                value={handyman.location}
                name="location"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) => error.includes("Location"))}
                  </h3>
                ) : null
              ) : null}
            </div>
            <div className="col-1">
              <label> Speciality </label> <br />
              <input
                type="text"
                className="handyman-input"
                value={handyman.speciality}
                placeholder="plumbering, capentry, painting"
                name="speciality"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row-3">
            <div className="col-1">
              <label> Password </label> <br />
              <input
                type="password"
                className="handyman-input"
                autoComplete="current-password"
                value={handyman.password}
                name="password"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) => error.includes("Password"))}
                  </h3>
                ) : null
              ) : null}
            </div>
            <div className="col-1">
              <label> Password Confirmation </label> <br />
              <input
                type="password"
                className="handyman-input"
                autoComplete="current-password"
                value={handyman.password_confirmation}
                name="password_confirmation"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) =>
                      error.includes("Password confirmation")
                    )}
                  </h3>
                ) : null
              ) : null}
            </div>
          </div>
          <div className="row-4">
            <div className="col-1">
              <label> Image </label> <br />
              <input
                type="text"
                className="handyman-input"
                value={handyman.image}
                name="image"
                onChange={handleChange}
              />
              {visible ? (
                errors.length > 0 ? (
                  <h3 className="signup-error">
                    {errors.find((error) => error.includes("Image"))}
                  </h3>
                ) : null
              ) : null}
            </div>
            <div className="col-1">
              <label> Rating </label> <br />
              <input
                type="text"
                className="handyman-input"
                value={handyman.rating}
                name="rating"
                placeholder="$20-$25"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row-5">
            <div className="col-1">
              <label> Description </label> <br />
              <textarea
                cols="50"
                rows="4"
                id="textarea"
                name="description"
                value={handyman.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="handyman-submit-btn">
            <button>
              {status === "loading" ? "submitting..." : "submit"}
            </button>
          </div>
          <Link to="/handymanLogin">
            <h2>
              Already have an account ? <span className="sign-up">Login</span>
            </h2>
          </Link>
        </form>
      </div>
    </>
  );
}

export default HandymanForm;
