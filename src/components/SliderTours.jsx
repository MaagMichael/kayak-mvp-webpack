import React, { useState } from "react";

import "./SliderTours.css";

// read in database trips
import Trips from "../data/tour.json";

function SliderTours() {
  // show the card with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
        <div className="slidertours">

      {/* trips data provided by json file*/}
      {Trips &&
          Trips.map((trip) => {
            return (
              <div
                // if the card is the current card, show it
                className={
                  Trips[currentIndex].id === trip.id
                    ? "slidertours-card"
                    : "slidertours-fade"
                }
              >
                <p>Trip No. {trip.id}</p>
                <div
                  className="slidertours-pic"
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

        {/* Render dots indicator for trips*/}
        <div className="slidertours-dots">
          {Trips.map((trip) => (
            <span
              key={trip.id}
              // highlight the dot that corresponds to the current card
              className={
                Trips[currentIndex].id === trip.id
                  ? "slidertours-dot slidertours-active"
                  : "slidertours-dot"
              }
              // when the user clicks on a dot, go to the corresponding card
              onClick={() => setCurrentIndex(Trips.indexOf(trip))}
            ></span>
          ))}
        </div>
    </div>
  );
}

export default SliderTours;
