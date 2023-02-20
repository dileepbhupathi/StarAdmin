import React from "react";
import "./Dashboard.scss";

export const Dashboard = () => {
  return (
    <div className="dashboard-header">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-data-content-container">
        <div className="dashboard-data-container">
          <p className="data-content">ICE Market data</p>
          <p className="data-content">OWN analysis</p>
          <p className="data-last-content">Historic market data</p>
        </div>
        <div className="settings-analytics-watchlist-container">
          <p className="content">Settings</p>
          <p className="content">Analytics</p>
          <p className="last-content">Watchlist</p>
        </div>
      </div>
    </div>
  );
};
