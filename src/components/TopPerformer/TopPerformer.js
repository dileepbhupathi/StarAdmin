import React from "react";
import { topPerformerData } from "../../Constants/TopPerformerData";
import "./TopPerformer.scss";

export const TopPerformer = () => {
 
  return (
    <div className="top-performer-container">
      <h1 className="top-performer-title">Top Performer</h1>
      <div className="top-performer-main-container">
        {topPerformerData.map((each,i) => (
          <div key={i} className="top-performer-each-list-container">
            <div>
              {each.personLogo ? (
                <div>
                  <img
                    className="top-performer-image"
                    src={each.personLogo}
                    alt="/"
                  />
                </div>
              ) : (
                <div
                  className="top-performer-logo-container"
                  style={{ backgroundColor: `${each.bgColor}` }}
                >
                  {each.logo}
                </div>
              )}
            </div>
            <div className="top-performer-details-container">
              <div className="top-performer-details-top-container">
                <h2 className="top-performer-name">{each.name}</h2>
                <p className="top-performer-time">{each.time}</p>
              </div>
              <p className="top-performer-score">{each.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
