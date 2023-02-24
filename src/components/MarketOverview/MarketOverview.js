import React from "react";
import "./MarketOverview.scss";
import { FaAngleDown } from "react-icons/fa";
import { Dropdown } from "antd";
import { MarketOverviewChart } from "../../../src/components/MarketOverViewChart/MarketOverViewChart";
import { colors, data, keys } from "../../Constants/MarketOverViewChartData";

export const MarketOverview = () => {
  const items = [
    {
      key: "1",
      label: "Daily",
    },
    {
      key: "2",
      label: "Weekly",
    },
    {
      key: "3",
      label: "Monthly",
    },
  ];
  return (
    <div className="Market-overview-content-chart-container">
      <h4 className="market-overview-title">Market Overview</h4>
      <div className="market-overview-caption-and-button-container">
        <p className="market-overview-caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="dropdown">
          <Dropdown
            menu={{
              items,
            }}
          >
            <button className="market-overview-button">
              Daily <FaAngleDown className="angle-down-icon"/>
            </button>
          </Dropdown>
        </div>
      </div>
      <div className="market-overview-value-profit-container">
        <h3 className="market-over-value">$36,2531.00</h3>
        <p className="market-overview-value-type">USD</p>
        <p className="market-overview-profit">(+1.37%)</p>
      </div>
      <MarketOverviewChart data = {data} colors = {colors} keys = {keys}/>
    </div>
  );
};
