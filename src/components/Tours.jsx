import React, { useState } from "react";

import "./Tours.css";

import SliderTours from "./SliderTours";
import SliderComments from "./SliderComments";

import quoteL from "../images/quoteL.svg";
import quoteR from "../images/quoteR.svg";
// read in database comments
import Comments from "../data/comment.json";

function Tours() {
  

  return (
    <div className="home-tours">
      <h1>See our previous trips</h1>

      <SliderTours />

      <div className="home-tours-text">
        <h1>What parents say about our project:</h1>
      </div>

      <SliderComments />

      <div className="home-tours-new">
        <h1><span>New</span> trips are coming!</h1>
        <p>
          Ready to embark on an unforgettable adventure? Contact us today to
          book your child's spot on our next kayaking journey.
        </p>
      </div>
    </div>
  );
}

export default Tours;
