import {
  faFaucetDrip,
  faPaintRoller,
  faPlus,
  faQuoteLeft,
  faTractor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Link } from "react-router-dom";

import "./LandingTop.css";

function LandingTop() {
  return (
    <>
      <div className="top-container">
        <div id="image-container">
          <img
            src="./images/wepik-photo-mode-20221114-16341.png"
            alt="plumber with arrms crossed"
          />
        </div>
        <div id="start-section">
          <h2>
            Chapa <span id="kazi"> Kazi </span> <br />
            Ajira Mkononi
          </h2>
          <Link to="/registration/form/page">
            <button id="get-started"> Get Started </button>
          </Link>
        </div>
      </div>
      <div className="why-us">
        <div className="numbers">
          <p>
            1454 <FontAwesomeIcon icon={faPlus} className="plus" />
          </p>
          <h5> Happy Clients </h5>
        </div>
        <div className="numbers">
          <p>
            590 <FontAwesomeIcon icon={faPlus} className="plus" />
          </p>
          <h5> Projects </h5>
        </div>
        <div className="numbers">
          <p>
            1454 <FontAwesomeIcon icon={faPlus} className="plus" />
          </p>
          <h5> Years of Experience </h5>
        </div>
      </div>

      <div className="about-container">
        <div className="landing-img">
          <img
            src="https://img.freepik.com/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?w=740&t=st=1673857831~exp=1673858431~hmac=284223d6caa0f1547e41847e351e504c2413f56ca7b4c77f814938cdbc70f24f"
            alt="handyman"
          />
        </div>
        <div className="landing-1">
          <div className="landing-2">
            <span>About Chapakazi</span>
            <h2>
              We Shape the perfect Solution
              <br />
              for Company
            </h2>
          </div>

          <div className="landing-3">
            <p>
              Lorem ipsum is simply dummy text of the printing ans typesetting
              indusrty. Lorem ipsum has been the industry standard's
            </p>

            <ol>
              <li className="circle">
                It originally comes from a Latin text, but to today’s reader,
                it’s seen as gibberish.
              </li>
              <li className="circle">
                It originally comes from a Latin text, but to today’s reader,
                it’s seen as gibberish.
              </li>
              <li className="circle">
                It originally comes from a Latin text, but to today’s reader,
                it’s seen as gibberish.
              </li>
              <li className="circle">
                It originally comes from a Latin text, but to today’s reader,
                it’s seen as gibberish.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Available Popular Servies
      </h2>
      <div className="jobs-descriptions">
        <div className="jobs-1">
          <FontAwesomeIcon icon={faFaucetDrip} className="job-icons" />
          <h3>Plumbering</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            recusandae, corporis, eveniet molestiae animi velit omnis aperiam
            neque voluptas iste molestias? Amet iste culpa quam explicabo
            aliquid alias vel unde.
          </p>
        </div>
        <div className="jobs-1">
          <FontAwesomeIcon icon={faPaintRoller} className="job-icons" />
          <h3>Painting</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            recusandae, corporis, eveniet molestiae animi velit omnis aperiam
            neque voluptas iste molestias? Amet iste culpa quam explicabo
            aliquid alias vel unde.
          </p>
        </div>
        <div className="jobs-1">
          <FontAwesomeIcon icon={faTractor} className="job-icons" />
          <h3>Farming</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            recusandae, corporis, eveniet molestiae animi velit omnis aperiam
            neque voluptas iste molestias? Amet iste culpa quam explicabo
            aliquid alias vel unde.
          </p>
        </div>
      </div>

      <div className="customer-testimonals">
        <div className="part-1">
          <img
            src="https://img.freepik.com/free-photo/portrait-smiling-manual-worker-with-tools-isolated-white_186202-3054.jpg?w=740&t=st=1673861692~exp=1673862292~hmac=5bbefea74c0819dd6c83f7fd4bae7012a27750304a3a1ace069e14982ea553f3"
            alt="profile"
          />
          <img
            src="https://img.freepik.com/free-photo/portrait-smiling-handyman-with-tools-isolated-white_186202-3000.jpg?w=360&t=st=1673861748~exp=1673862348~hmac=1b5161649bd0362f8e1c5cd2637b2092aa76ef0a9b2d81d7dceb616d5e4d3126"
            alt="profile-2"
          />
        </div>
        <div className="part-2">
          <span></span>
          <h3>What People Say</h3>
          <FontAwesomeIcon icon={faQuoteLeft} className="quotes" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            tempore <br />
            voluptatum maiores sed ut totam ab beatae! Obcaecati, <br />
            facere itaque doloribus excepturi tempore, perferendis omnis maiores
            <br />
            eligendi quae dicta error!
          </p>
        </div>
        <div className="part-1">
          <img
            src="https://img.freepik.com/free-photo/portrait-african-american-model_23-2149072141.jpg?w=360&t=st=1673861817~exp=1673862417~hmac=0d8076fa88f8e4b7c94889cfa48f978a30c2c66d6137a22b946bce49fff069ec"
            alt="man"
          />
          <img
            src="https://img.freepik.com/free-photo/portrait-smiling-redhead-female-sitting-bench-outdoor_613910-10356.jpg?w=740&t=st=1673861868~exp=1673862468~hmac=c9c0ca8b9fb0e19d20fa86d729eae6734b54491de98260b80af5cacc29433332"
            alt="woman"
          />
        </div>
      </div>
    </>
  );
}

export default LandingTop;
