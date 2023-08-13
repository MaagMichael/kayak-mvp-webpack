import React from "react";

import "./Home.css";

// read in database
import Trips from "../data/data.json";

function Home() {
  return (
    <div>
      <section id="home-hero" className="home-hero">
        {/* <h1>Home</h1> */}

        {/* background image */}
        <div className="home-hero-image"></div>
        {/* <img src="../images/hero_border.jpg" alt="" width="300"/> */}

        {/* navbar on background image */}
        <div className="home-navbar">home-navbar</div>
        
        {/* Text card on background image */}
        <div className="home-hero-text">
          <h1>
            Empowering <strong>Youth</strong>
          </h1>
          <h3>...one paddle at a time!</h3>
          <button className="home-hero-button">Book a trip</button>
        </div>


      </section>

      <section id="mission" className="home-mission">
        <h1>Our Mission</h1>
      </section>

      <section id="benefits" className="home-benefit">
        <h1 className="home-benefit-title">What makes our trips special</h1>
      </section>

      <section id="tours" className="tours">
        <h1>See our previous trips</h1>

        <h1>What parents say about our project:</h1>
      </section>

      <section id="contact">
        <h1>Contact form</h1>
      </section>
    </div>
  );
}

export default Home;
