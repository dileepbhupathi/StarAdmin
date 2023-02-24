import React from "react";
import { InvoiceTable } from "../InvoiceTable/InvoiceTable";
import "./Invoice.scss";

export const Invoice = () => {
  return (
    <div className="Invoice-content-and-chart-container">
      <div className="Invoice-title-and-showall-container">
        <h4 className="invoice-title">Invoice</h4>
        <a className="invoice-show-all" href="/">Show All</a>
      </div>
      <p className="invoice-context">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quod
        cupiditate esse fuga
      </p>
      <InvoiceTable/>
    </div>
  );
};
