import React, { useState } from "react";

import "./Tours.css";

// read in database comments
import Comments from "../data/comment.json";

function Tours() {
  // show the card with this index
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
      <div className="home-tours-trips">
        <h1>See our previous trips</h1>
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
                <p>"</p>
                <p>Comment No. {comment.id}</p>
                <p>{comment.text}</p>
                <br />
                <p>by {comment.author}</p>
                <p>"</p>

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
                Comments[currentIndex].id === comment.id ? "tours-dot tours-active" : "tours-dot"
              }
              // when the user clicks on a dot, go to the corresponding card
              onClick={() => setCurrentIndex(Comments.indexOf(comment))}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tours;
