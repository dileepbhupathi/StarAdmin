import React from "react";
import "./NetProfitMargin.scss";
import { GoPrimitiveDot } from "react-icons/go";

export const NetProfitMargin = () => {
  return (
    <div className="net-profit-margin-container">
      <div className="net-profit-margin-title-caption-container">
        <h4 className="net-profit-margin-title">Net Profit Margin</h4>
        <p className="net-profit-margin-caption">Started collecting data from February 2019</p>
      </div>
      <div className="sales-and-orders-indication-container">
        <p className="sales">
            <GoPrimitiveDot className="sales-icon"/>
          Sales
        </p>
        <p className="orders">
                <GoPrimitiveDot className="orders-icon"/>
            Orders
        </p>
      </div>
    </div>
  );
};
