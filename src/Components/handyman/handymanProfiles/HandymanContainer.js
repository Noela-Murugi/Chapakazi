import React, { useState } from "react";
import LandingTop from "../../landingPage/landingTopContainer/LandingTop";
import HandymanTop from "./HandymanTop";
import HandyManSideBar from "./HandyManSideBar";
import HandymanCards from "./HandymanCards";
import Footer from "../../Footer/Footer";
import CustomerHeader from "../../CustomerHeader/CustomerHeader";

function HandymanContainer() {
  const [handymanSearch, setHanydmanSearch] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setHanydmanSearch(value);
  }

  return (
    <div className="home">
      <CustomerHeader/>
      <div className="handy-page-image">
        <div className="handy-page-info">
          <h2>
            Chapakazi Services
            <br />
            The Best Home Services
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima
            <br />
            minus laborum natus distinctio perspiciatis modi, eos, sunt
            <br />
            cupiditate animi eum incidunt itaque accusantium nam? Neque suscipit
            <br />
            impedit adipisci? Nulla.
          </p>
          <span>View Handyman</span>
        </div>
        <div className="img-1">
          <img
            src="https://img.freepik.com/free-photo/diy-tools_144627-32167.jpg?w=740&t=st=1673897160~exp=1673897760~hmac=1333f5f6ea25bf7be6ce6fa07a5b3e22871a697aa39995ffd6b6f20d03b50ef5"
            alt="tool"
            className="tools1"
          />
          <img
            src="https://img.freepik.com/free-photo/tools-table_144627-8671.jpg?w=826&t=st=1673942769~exp=1673943369~hmac=c7382442654c2f38e0a122408db040ea3bff72ee9a505d9efe4bf2e018eb1da8"
            alt="tool2"
            className="tools2"
          />
          <img
            src="https://img.freepik.com/free-photo/tools-table_144627-8676.jpg?t=st=1673942769~exp=1673943369~hmac=5d812e651ef659d3b019fa34aa2573cb0ac7a60db7ebb264908ccb4d8281e209"
            alt="tool2"
            className="tools3"
          />
          <img
            src="https://img.freepik.com/free-photo/home-tile-improvement-handyman-with-level-laying-down-tile-floor_231208-6794.jpg?w=740&t=st=1673896953~exp=1673897553~hmac=e024a232dd2d85ae2d735cbe6e41aeda598cbb0812c1733555d1a49a074eab63"
            alt="handyman"
            className="mans"
          />
        </div>
      </div>
      <div className="handy-page">
        <HandymanTop
          handleChange={handleChange}
          handymanSearch={handymanSearch}
        />
        <div className="sidebar-card">
          <HandyManSideBar />
          <HandymanCards handymanSearch={handymanSearch} />
        </div>
      </div>
    </div>
  );
}

export default HandymanContainer;
