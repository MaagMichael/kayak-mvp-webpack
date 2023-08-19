import React from "react";
import { useState, useEffect } from "react";
// import { BsArrowUpShort } from "react-icons/bs";

import "./ScrollTop.css";

import IconTop from "../images/CircleUpRounded.svg";

export default function ScrollTop() {

  // The back-to-top button is hidden at the beginning
  const [showUpButton, setShowUpButton] = useState(false);

  //   check when to make button visible (method 1)
//   const showtop = () => {
//     // console.log(window.scrollY);
//     if (window.scrollY > 300) {
//       setShowUpButton(true);
//     } else {
//       setShowUpButton(false);
//     }
//   };
//   window.addEventListener("scroll", showtop);

  //   check when to make button visible (method 2)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setShowUpButton(true);
        } else {
          setShowUpButton(false);
        }
      });
    }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showUpButton && (
        <button onClick={scrollToTop} className="back-to-top">
          {/* up button of react icons*/}
          {/* <BsArrowUpShort /> */}
          <img src={IconTop} alt="Top" />
        </button>
      )}
    </>
  );
}
