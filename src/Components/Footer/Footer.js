import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-style">
      <h2>
        chapa <span id="kazi-footer"> kazi </span>
      </h2>
      <span id="copy-right"> CopyRight @2022 </span>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </div>
    </footer>
  );
}
