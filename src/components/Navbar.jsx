import { React, useState } from "react";
import { Link } from "react-router-dom";

// Logo should be a svg file
// https://www.freecodecamp.org/news/use-svg-images-in-css-html/
import logo from "../images/logo_paddlexplorer.svg";
import "./Navbar.css";

function Navbar() {
  // for mobile hamburger menue
  const [isShown, setIsShown] = useState(false);
  const [navcolor, setNavcolor] = useState(false);
  // https://www.youtube.com/watch?v=JMsNslI8KoY
  const changenavcolor = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 50) {
      setNavcolor(true);
    } else {
      setNavcolor(false);
    }
  };
  window.addEventListener("scroll", changenavcolor);

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  // Define MobileMenu component
  const MobileMenu = () => {
    return (
      <nav className={"mobile-menu"}>
        <img src={logo} alt="Logo" width="100" />

        <a href="/#home-hero" onClick={toggleMobileMenu}>
          Home
        </a>
        <a href="/#home-mission" onClick={toggleMobileMenu}>
          Our Mission
        </a>
        <a href="/#home-tours" onClick={toggleMobileMenu}>
          Tours
        </a>
        <a href="/#home-faq" onClick={toggleMobileMenu}>
          FAQ
        </a>
        <a href="/#home-contact" onClick={toggleMobileMenu}>
          Contact
        </a>

        {/* Link to router pages */}
        {/* <Link to="/" onClick={toggleMobileMenu}>
          Home
        </Link>
        <Link to="/mission" onClick={toggleMobileMenu}>
          Our Mission
        </Link>
        <Link to="/tours" onClick={toggleMobileMenu}>
          Tours
        </Link>
        <Link to="/faq" onClick={toggleMobileMenu}>
          FAQs
        </Link>
        <Link to="/contact" onClick={toggleMobileMenu}>
          Contact
        </Link> */}
      </nav>
    );
  };

  return (
    // ternary operator according navcolor useState
    <div className={navcolor ? "topnav color" : "topnav"}>
      <a href="/#home-hero"><img src={logo} alt="Logo" /></a>
      {/* <Link to="/">
        <img src={logo} alt="Logo" />
      </Link> */}

      <div className="menu-right">
        {/* Desktop Menu, which only appears on large screens */}
        <nav className="menu">
          <a href="/#home-hero">Home</a>
          <a href="/#home-mission">Our Mission</a>
          <a href="/#home-tours">Tours</a>
          <a href="/#home-faq">FAQ</a>

          {/* Link to router pages */}
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/mission">Our Mission</Link>  */}
          {/* <Link to="/tours">Tours</Link> */}
          {/* <Link to="/faq">FAQs</Link> */}
        </nav>

        {/* This hamburger button only shows up on small screens. It is used to open the mobile menu */}
        <button className="show-mobile-menu-button" onClick={toggleMobileMenu}>
          &#8801;
        </button>

        {/* redering the mobile menu and the close button */}
        {isShown && <MobileMenu />}
        {/* close button */}
        {isShown && (
          <button
            className="close-mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
        )}
        <nav className="menu2">
          <a href="/#home-contact">Contact</a>
          {/* <Link to="/contact">Contact</Link> */}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
