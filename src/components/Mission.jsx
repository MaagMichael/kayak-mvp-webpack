import React from "react";

import mission1 from "../images/mission1.png";
import mission2 from "../images/mission2.png";

import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";

import "./Mission.css";

function Mission() {
  return (
    <>
      <div className="home-mission">
        <div className="home-mission-textcard">
          <h1>Our Mission</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            dolore quibusdam, facilis totam perferendis rem voluptas, omnis
            consequuntur iure eligendi deserunt nemo dicta iusto aliquam a
            fugiat consequatur delectus. Velit perferendis expedita sunt quidem
            ullam itaque sapiente, ut quis odio unde temporibus et incidunt sit
            iste dolorem culpa eveniet rem.
          </p>
          <br />
          <p>About our instructor Livio....</p>
        </div>

        <div className="home-mission-picture">
          <img src={mission2} alt="mission2" />
          <img src={mission1} alt="mission1" />
        </div>
      </div>

      <div className="home-benefit">
        <h1 className="home-benefit-title">What makes our trips special</h1>

        <div className="home-benefit-cards">
          <div className="home-benefit-card">
            <img src={icon1} alt="icon1" />
            <div className="home-benefit-icon"></div>
            <h2>Friendship</h2>
            <p>
              Shared adventures foster lasting bonds and create unforgettable
              memories
            </p>
          </div>
          <div className="home-benefit-card">
            <img src={icon2} alt="icon2" />
            <div className="home-benefit-icon"></div>
            <h2>Nature</h2>
            <p>
              An immersive outdoor experience that fosters a deep appreciation
              for the environment
            </p>
          </div>
          <div className="home-benefit-card">
            <img src={icon3} alt="icon3" />
            <div className="home-benefit-icon"></div>
            <h2>Life skills</h2>
            <p>
              Learn teamwork, communication, and resilience through
              hands-onkayaking challenges
            </p>
          </div>
          <div className="home-benefit-card">
            <img src={icon4} alt="icon4" />
            <div className="home-benefit-icon"></div>
            <h2>Confidence</h2>
            <p>
              Master kayaking to boost self-trust and readiness to tackle new
              challenges
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
