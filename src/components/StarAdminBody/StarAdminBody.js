import React from "react";
import { Dashboard } from "../Dashboard/Dashboard";
import { DashboardToolbar } from "../DashboardToolbar/DashboardToolbar";
import { MarketOverview } from "../MarketOverview/MarketOverview";
import { SalesStatisticOverViewAndNetProfitMargin } from "../SalesStatisticOverViewAndNetProfitMargin/SalesStatisticOverViewAndNetProfitMargin";
import { StarAdminChartMonitor } from "../StarAdminChartMonitor/StarAdminChartMonitor";
import { TotalRevenue } from "../TotalRevenue/TotalRevenue";
import { Transactions } from "../Transactions/Transactions";
import "./StarAdminBody.scss";

export const StarAdminBody = () => {
  return (
    <div className="star-admin-body-content-container">
      <Dashboard />
      <DashboardToolbar />
      <StarAdminChartMonitor />
      <SalesStatisticOverViewAndNetProfitMargin />
      <div>
        <div>
          <TotalRevenue />
          <Transactions/>
          <MarketOverview/>
        </div>
      </div>
    </div>
  );
};
