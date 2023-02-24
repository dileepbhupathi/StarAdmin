import { Table } from "antd";
import React from "react";
import { PeopleAlsoWatchData } from "../../Constants/PeopleAlsoWatch";
import "./PeopleAlsoWatch.scss";

export const PeopleAlsoWatch = () => {
  

  const columns = [
    {
      title: "Symbol",
      key: "company",
      render: (text, record) => (
        <>
          <h6 className="company-titles">{record.company}</h6>
          <p className="company-websites">{record.website}</p>
        </>
      ),
    },
    {
      title: "Last Price",
      key: "price",
      render: (text, record) => (
        <>
          <p className="price">{`$${record.price}`}</p>
        </>
      ),
    },
    {
      title: "Change",
      key: "change",
      render: (text, record) => (
        <>
          <p
            className={
              record.change > 0 ? "record-positive" : "record-negative"
            }
          >
            {record.change}
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="people-watch-card">
      <h4 className="people-watch-title">People Also Watch</h4>
      <div className="people-watch-table-container">
        <Table dataSource={PeopleAlsoWatchData} columns={columns} pagination={false} />
      </div>
      <p className="people-also-watch-show-all">Show all</p>
    </div>
  );
};
