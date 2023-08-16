import React from "react";

import Navbar from "./Navbar";
import Mission from "./Mission";
import Tours from "./Tours";
import Faq from "./Faq";
import Contact from "./Contact";

import "./Home.css";


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
          {/* <a href="/#home-contact">Contact</a> */}
        </div>


      </section>

      <section id="home-mission" >
        <Mission />
      </section>

      <section id="home-tours" >
        <Tours/>
      </section>

      <section id="home-contact">
        <h1>Contact form</h1>
      </section>

      <section id="home-faq">
        <Faq/>
      </section>

      <footer id="home-footer">
        <h1>footer with impressum</h1>
      </footer>

    </div>
  );
}

export default Home;
