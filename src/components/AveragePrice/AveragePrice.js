import React from "react";
import "./AveragePrice.scss";
import { BsBriefcase } from "react-icons/bs";

export const AveragePrice = () => {
  return (
    <div className="average-price-container">
      <div className="average-price-value-container">
        <h2 className="average-price-value">4,624</h2>
        <div className="briefcase-icon-container">
          <BsBriefcase className="briefcase-icon" />
        </div>
      </div>
      <div className="average-price-content-container">
        <h5 className="average-price-title">Average Price</h5>
        <p className="average-price-content">Since last month</p>
      </div>
    </div>
  );
};
