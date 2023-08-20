import React from "react";

import "./Footer.css";

import mail from "../images/mail.svg";
import phone from "../images/phone.svg";

function Footer() {
  return (
    <div className="home-footer">
      <div className="home-footer-sitemap">
        <h3>Site Map</h3>
        <a href="/#home-hero">Home</a>
        <a href="/#home-mission">Our Mission</a>
        <a href="/#home-tours">Tours</a>
        <a href="/#home-faq">FAQ</a>
        <a href="/#home-contact">Contact</a>
      </div>

      <div className="home-footer-designed">
        <p>Designed and developed for PADDLEXPLORER</p>
        <p>by ReDI School</p>
        <p>in Munich, Germany.</p>
      </div>

      <div className="home-footer-address">
        <h3>Contact us</h3>
        <p>Clubul Copiilor Năsăud</p>
        <p>DN17C 9, Nasaud 425200</p>
        <p>Romania</p>
        <p>
          <img src={mail} alt="mail: " /> club_nasaud@yahoo.com
        </p>
        <p>
          <img src={phone} alt="phone: " /> +040263361447
        </p>
      </div>

      <p>Copyright © 2023. All rights reserved.</p>
    </div>
  );
}

export default Footer;
