import React from "react";

import Navbar from "./Navbar";
import Mission from "./Mission";
import Tours from "./Tours";
import Faq from "./Faq";
import Contact from "./Contact";

import "./Home.css";

// read in database
import Trips from "../data/data.json";

function Home() {
  return (
    <div>
      <section id="home-hero" className="home-hero">
        {/* background image */}
        <div className="home-hero-image"></div>
        
        <div className="home-navbar"><Navbar/></div>
        
        {/* Text card on background image */}
        <div className="home-hero-text">
          <h1>
            Empowering <strong>Youth</strong>
          </h1>
          <h3>...one paddle at a time!</h3>
          <button className="home-hero-button">Book a trip</button>
        </div>


      </section>

      <section id="home-mission" >
        <Mission />
      </section>

      <section id="home-tours" className="tours">
        <h1>See our previous trips</h1>

        <h1>What parents say about our project:</h1>
      </section>

      <section id="home-faq">
        <h1>FAQ</h1>
      </section>

      <section id="home-contact">
        <h1>Contact form</h1>
      </section>
    </div>
  );
}

export default Home;
