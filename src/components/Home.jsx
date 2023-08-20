import React from "react";

import Navbar from "./Navbar";
import Mission from "./Mission";
import Tours from "./Tours";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

import "./Home.css";


function Home() {
  return (
    <div>

      <ScrollTop />
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
          
          <a href="/#home-contact">
          <button className="home-hero-button">Book a trip</button>
          </a>
        </div>


      </section>

      <section id="home-mission" >
        <Mission />
      </section>

      <section id="home-tours" >
        <Tours/>
      </section>

      <section id="home-faq">
        <Faq/>
      </section>

      <section id="home-contact">
        <Contact />
      </section>

      <footer id="home-footer">
        <Footer/>
      </footer>

    </div>
  );
}

export default Home;
