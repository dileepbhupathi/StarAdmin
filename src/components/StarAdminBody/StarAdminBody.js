import React from "react";
import { AveragePrice } from "../AveragePrice/AveragePrice";
import { Dashboard } from "../Dashboard/Dashboard";
import { DashboardToolbar } from "../DashboardToolbar/DashboardToolbar";
import { Invoice } from "../Invoice/Invoice";
import { MarketOverview } from "../MarketOverview/MarketOverview";
import { SalesStatisticOverViewAndNetProfitMargin } from "../SalesStatisticOverViewAndNetProfitMargin/SalesStatisticOverViewAndNetProfitMargin";
import { StarAdminChartMonitor } from "../StarAdminChartMonitor/StarAdminChartMonitor";
import { TotalRevenue } from "../TotalRevenue/TotalRevenue";
import { TotalSalesAndActiveUsers } from "../TotalSalesAndActiveUsers/TotalSalesAndActiveUsers";
import { Transactions } from "../Transactions/Transactions";
import { TopPerformer } from "../TopPerformer/TopPerformer";
import { WebsiteAudienceMetrics } from "../WebsiteAudienceMetrics/WebsiteAudienceMetrics";
import { WorldSelling } from "../WorlSelling/WorldSelling";
import "./StarAdminBody.scss";
import { RecentEvents } from "../RecentEvents/RecentEvents";
import { Activities } from "../Activities/Activities";
import { PeopleAlsoWatch } from "../PeopleAlsoWatch/PeopleAlsoWatch";
import { StarAdminFooter } from "../StarAdminFooter/StarAdminFooter";

export const StarAdminBody = () => {
  return (
    <div className="star-admin-body-content-container">
      <Dashboard />
      <DashboardToolbar />
      <StarAdminChartMonitor />
      <SalesStatisticOverViewAndNetProfitMargin />
      <div className="revenues-transactions-world-selling-components">
        <div className="total-revenue-transactions-market-overview-invoices-componenets">
          <TotalRevenue />
          <Transactions />
          <MarketOverview />
          <Invoice />
          <div className="total-sales-and-average-price-components">
            <TotalSalesAndActiveUsers />
            <AveragePrice />
          </div>
        </div>
        <div className="website-audience-world-selling-top-performer-components">
          <WebsiteAudienceMetrics />
          <WorldSelling />
          <TopPerformer />
        </div>
      </div>
      <div className="events-activities-people-watch-components-container">
        <RecentEvents />
        <Activities />
        <PeopleAlsoWatch/>
      </div>
      <StarAdminFooter/>
    </div>
  );
};
