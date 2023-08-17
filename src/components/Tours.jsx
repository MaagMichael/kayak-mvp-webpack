import React, { useState } from "react";

import "./Tours.css";

import quoteL from "../images/quoteL.svg";
import quoteR from "../images/quoteR.svg";

// read in database trips
import Trips from "../data/tour.json";

// read in database comments
import Comments from "../data/comment.json";

function Tours() {
  // show the card with this index
  const [currentIndextrip, setCurrentIndextrip] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next card
  // if we are at the end, go to the first card
  const next = () => {
    setCurrentIndex((currentIndex + 1) % Comments.length);
  };

  // move to the previous card
  // if we are at the beginning, go to the last card
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + Comments.length) % Comments.length);
  };

  return (
    <div className="home-tours">
      <h1>See our previous trips</h1>

      <div className="home-tours-trips">
        {/* comments data provided by json file*/}
        {Trips &&
          Trips.map((trip) => {
            return (
              <div
                // if the card is the current card, show it
                className={
                  Trips[currentIndextrip].id === trip.id
                    ? "home-tours-trips-card"
                    : "trips-fade"
                }
              >
                <p>Trip No. {trip.id}</p>
                <img
                  src={process.env.PUBLIC_URL + trip.URL}
                  alt="trip picture"
                />
                <div
                  className="home-tours-trips-pic"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + trip.URL
                    })`
                  }}
                ></div>
                <p>{trip.name}</p>
                <p>{trip.date}</p>
              </div>
            );
          })}

        {/* Render dots indicator */}
        <div className="home-tours-trips-dots">
          {Comments.map((comment) => (
            <span
              key={comment.id}
              // highlight the dot that corresponds to the current card
              className={
                Comments[currentIndextrip].id === comment.id
                  ? "trips-dot trips-active"
                  : "trips-dot"
              }
              // when the user clicks on a dot, go to the corresponding card
              onClick={() => setCurrentIndextrip(Comments.indexOf(comment))}
            ></span>
          ))}
        </div>
      </div>

      <div className="home-tours-comments">
        <div className="home-tours-text">
          <h1>What parents say about our project:</h1>
        </div>

        {/* comments data provided by json file*/}
        {Comments &&
          Comments.map((comment) => {
            return (
              <div
                // if the card is the current card, show it
                className={
                  Comments[currentIndex].id === comment.id
                    ? "home-tours-comments-card"
                    : "tours-fade"
                }
              >
                <img src={quoteL} alt="QuoteL" />
                <p>Comment No. {comment.id}</p>
                <p>{comment.text}</p>
                <img src={quoteR} alt="QuoteR" style={{ float: "right" }} />
                <p>by {comment.author}</p>

                {/* Previous button */}
                <button onClick={prev} className="tours-prev">
                  &lt;
                </button>

                {/* Next button */}
                <button onClick={next} className="tours-next">
                  &gt;
                </button>
              </div>
            );
          })}

        {/* Render dots indicator */}
        <div className="home-tours-comments-dots">
          {Comments.map((comment) => (
            <span
              key={comment.id}
              // highlight the dot that corresponds to the current card
              className={
                Comments[currentIndex].id === comment.id
                  ? "tours-dot tours-active"
                  : "tours-dot"
              }
              // when the user clicks on a dot, go to the corresponding card
              onClick={() => setCurrentIndex(Comments.indexOf(comment))}
            ></span>
          ))}
        </div>
        <h1>New trips are coming!</h1>
        <p>
          Ready to embark on an unforgettable adventure? Contact us today to
          book your child's spot on our next kayaking journey.
        </p>
      </div>
    </div>
  );
}

export default Tours;
