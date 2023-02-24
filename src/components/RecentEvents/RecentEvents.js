import React from "react";
import { RecentEventsData } from "../../Constants/RecentEventsData";
import "./RecentEvents.scss";

export const RecentEvents = () => {
  
  return (
    <div className="recent-events-container">
      <h1 className="recent-events-title">Recent Events</h1>
      <div className="recent-events-main-container">
        {RecentEventsData.map((each,i) => (
            <div key={i} className="recent-events-details-top-container">
              <div>
                <h2 className="recent-events-date">{each.date}</h2>
                <p className="recent-event-content">{each.setting}</p>
              </div>
              <p className="recent-events-setting">Edit Event</p>
            </div>
        ))}
      </div>
      <p className="recent-events-show-all">Show all</p>
    </div>
  );
};
