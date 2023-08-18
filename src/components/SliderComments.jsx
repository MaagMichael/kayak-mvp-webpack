import React, { useState } from "react";

import "./SliderComments.css";

import quoteL from "../images/quoteL.svg";
import quoteR from "../images/quoteR.svg";

// read in database comments
import Comments from "../data/comment.json";

function SliderComments() {
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
    <div className="slidercomments">
      {/* comments data provided by json file*/}
      {Comments &&
        Comments.map((comment) => {
          return (
            <div
              // if the card is the current card, show it
              className={
                Comments[currentIndex].id === comment.id
                  ? "slidercomments-card"
                  : "slidercomments-fade"
              }
            >
              <img src={quoteL} alt="QuoteL" style={{ float: "left" }}/>
              <p>Comment No. {comment.id}</p>
              <p>{comment.text}</p>
              <img src={quoteR} alt="QuoteR" style={{ float: "right" }} />
              <p>by {comment.author}</p>

              {/* Previous button */}
              <button onClick={prev} className="slidercomments-prev">
                  &lt;
                </button>

                {/* Next button */}
                <button onClick={next} className="slidercomments-next">
                  &gt;
                </button>
            </div>
          );
        })}

      {/* Render dots indicator for trips*/}
      <div className="slidercomments-dots">
        {Comments.map((comment) => (
          <span
            key={comment.id}
            // highlight the dot that corresponds to the current card
            className={
              Comments[currentIndex].id === comment.id
                ? "slidercomments-dot slidercomments-active"
                : "slidercomments-dot"
            }
            // when the user clicks on a dot, go to the corresponding card
            onClick={() => setCurrentIndex(Comments.indexOf(comment))}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SliderComments;
