import React from "react";
import "./TotalSalesAndActiveUsers.scss";
import { GoPrimitiveDot } from "react-icons/go";
import { Progress } from "antd";

export const TotalSalesAndActiveUsers = () => {
  return (
    <div className="total-sales-and-average-users-container">
      <div className="total-sales-container">
        <p className="total-sales-content">
          <GoPrimitiveDot className="total-sales-icon"/>
          Total Sales
        </p>
        <h4 className="total-sales-value">$7,590</h4>
        <Progress percent={76} showInfo={false}  strokeColor ='#ff6258'/>
      </div>
      <div className="average-users-container">
        <p className="average-users-content">
          <GoPrimitiveDot className="average-users-icon"/>
          Active Users
        </p>
        <h4 className="average-users-values">$5,460</h4>
        <Progress percent={54} showInfo={false} strokeColor='#19d895'/>
      </div>
    </div>
  );
};
