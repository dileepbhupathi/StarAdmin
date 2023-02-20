import React, { useState } from "react";
import { SalesStatisticsOverviewButtonData } from "../../Constants/SalesStatisticsOverviewButtonsData";
import { SalesStatisticsOverviewChart } from "../SalesStatisticsOverviewChart/SalesStatisticsOverviewChart";
import "./SalesStatisticOverview.scss";

export const SalesStatisticOverview = () => {
  const [active, setActive] = useState(null);
  const[revenueData,setRevenueData] = useState(SalesStatisticsOverviewButtonData[0].data1)
  const [salesData,setSalesData] = useState(SalesStatisticsOverviewButtonData[0].data2)

  const ActiveButton = (each) => {
    if (active === each.id) {
        setActive(null)
    }
    setActive(each.id);
    setRevenueData(each.data1)
    setSalesData(each.data2)
  };
  return (
    <div className="sales-statistic-overview-container">
      <div className="sale-statistics-overview-content-container">
        <h4 className="sale-statistics-overview-title">
          Sales Statistics Overview
        </h4>
        <p className="sales-statistics-overview-caption">
          Lorem ipsum is placeholder text commonly used
        </p>
      </div>
      <div className="sales-statistics-overview-buttons-container">
        {SalesStatisticsOverviewButtonData.map((each) => (
          <button
            id={each.id}
            className={
              active === each.id
                ? "sales-statistics-overview-active-button"
                : "sales-statistics-overview-button"
            }
            onClick={() => ActiveButton(each)}
          >
            {each.name}
          </button>
        ))}
      </div>
      <div className="cost-and-revenue-container">
        <div className="cost-and-value-container">
          <h5 className="title">Total Cost</h5>
          <h4 className="value">15,263</h4>
        </div>
        <div className="revenue-and-value-container">
          <h5 className="title">Total Revenue</h5>
          <h4 className="value">$753,098</h4>
        </div>
      </div>
      <div className="revenue-and-sales-indications-container">
        <p className="revenue-and-sales-indications">
          <span className="revenue-indication">_</span>
          Revenue
          <span className="sales-indication">_</span>
          Sales
        </p>
      </div>
      <SalesStatisticsOverviewChart revenueData = {revenueData} salesData = {salesData} />
    </div>
  );
};
