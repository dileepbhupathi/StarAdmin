import { Table } from "antd";
import React from "react";
import "./InvoiceTable.scss";

export const InvoiceTable = () => {
  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceid",
      key: "invoiceid",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Due Date",
      key: "dueDate",
      dataIndex: "dueDate",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
    },
  ];

  const data = [
    {
      key: "1",
      invoiceid: "INV-87239",
      customer: "Viola Ford",
      status: "Paid",
      dueDate: "20 Jan 2019",
      amount: "$755",
    },
    {
      key: "2",
      invoiceid: "INV-87239",
      customer: "Dylan Waters",
      status: "Unpaid",
      dueDate: "23 Feb 2019",
      amount: "$800",
    },
    {
      key: "3",
      invoiceid: "INV-87239",
      customer: "Louis Poole",
      status: "Unpaid",
      dueDate: "25 Mar 2019",
      amount: "$463",
    },
    {
      key: "4",
      invoiceid: "INV-87239",
      customer: "Vera Howell",
      status: "Paid",
      dueDate: "27 Mar 2019",
      amount: "$235",
    },
    {
      key: "5",
      invoiceid: "INV-87239",
      customer: "Allie Goodman",
      status: "Unpaid",
      dueDate: "1 Apr 2019",
      amount: "$657",
    },
  ];
  return (
    <div className="invoice-table-container">
      <Table columns={columns} dataSource={data} pagination={false} rowClassName={(record, index) => index % 2 === 0 ? 'table-row-dark'  : 'table-row-light' }/>
    </div>
  );
};
