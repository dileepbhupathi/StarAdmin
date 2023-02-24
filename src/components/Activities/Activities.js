import { Timeline } from "antd";
import React from "react";
import "./Activities.scss";

export const Activities = () => {
  return (
    <div className="activities-container">
      <div className="activities-title-and-context-container">
      <h4 className="activities-title">
        Activities 
      </h4>
      <p className="activities-context">20 finished, 5 remaining</p>
      </div>
      <Timeline
        className="activities-main-container"
        items={[
          {
            color: "#19D895",
            children: (
              <>
                <h3 className="activities-description">
                  <span>Ben Tossell</span> assign you a task
                </h3>
                <p className="just-now">Just now</p>
              </>
            ),
          },
          {
            color: "#2196F3",
            children: (
              <>
                <h3 className="activities-description">
                  <span>Ben Tossell</span> assign you a task
                </h3>
                <p className="just-now">Just now</p>
              </>
            ),
          },
          {
            color: "#FFAF00",
            children: (
              <>
                <h3 className="activities-description">
                  <span>Ben Tossell</span> assign you a task
                </h3>
                <p className="just-now">Just now</p>
              </>
            ),
          },
          {
            color: "#8862E0",
            children: (
              <>
                <h3 className="activities-description">
                  <span>Ben Tossell</span> assign you a task
                </h3>
                <p className="just-now">Just now</p>
              </>
            ),
          },
          {
            color: "#19D895",
            children: (
              <>
                <h3 className="activities-description">
                  <span>Ben Tossell</span> assign you a task
                </h3>
                <p className="just-now">Just now</p>
              </>
            ),
          },
        ]}
      />
      <p className="activities-show-all">Show all</p>
    </div>
  );
};
