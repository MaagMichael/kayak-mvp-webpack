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
    if (window.scrollY>150) {
      setNavcolor(true)
    } else {
      setNavcolor(false)
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
        <Link to="/" onClick={toggleMobileMenu}>
          <img src={logo} alt="Logo" width="100" />
        </Link>

        <Link to="/" onClick={toggleMobileMenu}>
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
        </Link>
      </nav>
    );
  };

  return (
    // ternary operator according navcolor useState
    <div className={navcolor ? "topnav color" : "topnav"}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <div className="menu-right">
        {/* Desktop Menu, which only appears on large screens */}
        <nav className="menu">
          {/* <div className="active-link"> */}
          <Link to="/">Home</Link>
          <Link to="/mission">Our Mission</Link> 
          {/* <a href="/#mission">mission</a>       */}
          <Link to="/tours">Tours</Link>
          <a href="/#benefits">onPage</a>
          {/* <h1>PaddleXplorer</h1> */}
          <Link to="/faq">FAQs</Link>
          {/* <Link to="/contact">Contact</Link> */}
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
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
