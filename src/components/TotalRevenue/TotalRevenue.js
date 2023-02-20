import React from "react";
import { TotalRevenueChart } from "../TotalRevenueChart/TotalRevenueChart";
import "./TotalRevenue.scss";

export const TotalRevenue = () => {
  return (
    <div className="totalrevenue-content-and-chart-container">
      <div className="total-revenue-container">
        <div className="total-revenue-title-profit-container">
          <h4 className="total-revenue-title">Total Revenue</h4>
          <p className="total-revenue-profit">+1.37%</p>
        </div>
        <h3 className="total-revenue-value">184.42k</h3>
      </div>
      <TotalRevenueChart/>
    </div>
  );
};
