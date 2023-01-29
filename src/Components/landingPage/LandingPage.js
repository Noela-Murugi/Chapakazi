import React from "react";
import LandingHeader from "../LandingTopHeader/LandingHeader";
import LandingTop from "./landingTopContainer/LandingTop";

function LandingPage() {
  return (
    <div className="landing-page">
      <LandingHeader />
      <LandingTop />
    </div>
  );
}

export default LandingPage;
