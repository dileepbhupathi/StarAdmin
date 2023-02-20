import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

export const TransactionsChart = () => {
  const [data] = useState([320, 280, 300, 280, 300, 270]);

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
    const yScale = d3.scaleLinear().domain([270, 320]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveMonotoneX);

    //setting up axes

    // const xAxis = d3
    //   .axisBottom(xScale)
    //   .ticks("none")
    //   .tickFormat((i) => i + 1);
    // const yAxis = d3.axisLeft(yScale).ticks(5);
    // svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
    // svg.append("g").call(yAxis);

    //setting up the data for svg

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "#f96868");

    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 4)
      .attr("fill", "#f96868")
      .attr("stroke", "#fff")
      .attr("cx", (value, index) => xScale(index))
      .attr("cy", (value, index) => yScale(value));

    
  }, [data]);
  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};
