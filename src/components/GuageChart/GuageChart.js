import React from "react";
import GaugeChart from "react-gauge-chart";
import "./GuageChart";

export const GuageChart = () => {

 
  return (
    <div>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={1}
        colors={["red"]}
        arcWidth={0.2}
        percent={0.65}
        animate = {false}
        textColor = '#030303'
        cornerRadius = {0}
      />
    </div>
  );
};
