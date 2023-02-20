import React from "react";
import "./DashboardToolbar.scss";
import {FaAngleLeft,FaAngleRight,FaAngleDown} from 'react-icons/fa'
import { Dropdown } from "antd";

export const DashboardToolbar = () => {
  const AllDays = [
    {
      key: "1",
      label: "Last Day",
    },
    {
      key: "2",
      label: "Last Month",
    },
    {
      key: "3",
      label: "Last Year",
    },
  ];

  const Export = [
    {
      key: "1",
      label: "Export as PDF",
    },
    {
      key: "2",
      label: "Export as DOCX",
    },
    {
      key: "3",
      label: "Export as CDR",
    },
  ];

  return (
    <div className="dashboard-toobar-container">
      <div className="calendar-buttons-container">
        <button className="left-arrow-button">
          <FaAngleLeft className="angle-icon"/>
        </button>
        <button className="date-button">03/02/2019 - 20/08/2019</button>
        <button className="right-arrow-button">
          <FaAngleRight className="angle-icon" />
        </button>
      </div>
      <div className="all-day-dropdown-container">
        <Dropdown
          menu={{
            AllDays,
          }}
          trigger="click"
        >
          <button className="all-day-content">
            All Day
            <FaAngleDown className="angle-down-icon"/>
          </button>
        </Dropdown>
        <p className="advanced-options">Advanced Options</p>
      </div>
      <div className="export-content-container">
        <button className="new-button">New</button>
        <Dropdown
          menu={{
            Export,
          }}
          trigger="click"
        >
          <p className="export-content">
            Export
            <FaAngleDown className="angle-down-icon"/>
          </p>
        </Dropdown>
      </div>
    </div>
  );
};
