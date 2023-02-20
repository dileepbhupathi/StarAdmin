import "./TotalRevenueChart.scss";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export const TotalRevenueChart = () => {
  const [data] = useState([
    56, 55, 59, 59, 59, 57, 56, 57, 54, 56, 58, 57, 59, 58, 59, 57, 55, 56, 54,
    52, 49, 48, 50, 50, 46, 45, 49, 50, 52, 53, 52, 55, 54, 53, 56, 55, 56, 55,
    54, 55, 57, 58, 56, 55, 57, 59, 58, 57, 55, 53, 52, 55, 57, 55, 54, 52, 55,
    57, 56, 57, 58, 59, 58, 59, 57, 56, 55, 57, 58, 60, 62, 60, 59, 58, 57, 56,
    57, 56, 58,
  ]);

  const svgRef = useRef();

  useEffect(() => {
    // setting up svg

    const w = 250;
    const h = 80;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#fff")
    //   .style("margin-top", "20")
      .style("overflow", "visible");

    //setting up scaling

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([45, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveLinear);

    //setting up axes

    // const xAxis = d3
    //   .axisBottom(xScale)
    //   .ticks("none")
    //   .tickFormat((i) => i + 1);
    // const yAxis = d3.axisLeft(yScale).ticks('none');
    // svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
    // svg.append("g").call(yAxis);

    //setting up the data for svg

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "#8862e0");

    // svg
    //   .selectAll(".dot")
    //   .data(data)
    //   .enter()
    //   .append("circle")
    //   .attr("r", 3)
    //   .attr("fill", "#fff")
    //   .attr("stroke", "#8862e0")
    //   .attr("cx", (value, index) => xScale(index))
    //   .attr("cy", (value, index) => yScale(value));

  }, [data]);
  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};
