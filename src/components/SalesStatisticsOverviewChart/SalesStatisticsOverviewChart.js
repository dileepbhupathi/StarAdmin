import "./SalesStatisticsOverviewChart.scss";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const SalesStatisticsOverviewChart = ({ revenueData, salesData }) => {
  //   const [data] = useState([60, 75, 65, 130, 130, 145, 110, 145]);
  //   const [data2] = useState([0, 25, 20, 21, 70, 52, 49, 90]);

  const svgRef = useRef();

  useEffect(() => {
    // setting up svg

    const w = 360;
    const h = 200;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#fff")
      .style("margin-top", "20")
      .style("overflow", "visible");

    //setting up scaling

    const xScale = d3
      .scaleLinear()
      .domain([0, revenueData.length - 1])
      .domain([0, salesData.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
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

    const yAxis = d3.axisLeft(yScale).ticks(5);
    
    // svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);

    svg.append("g").call(yAxis);

    //setting up the data for svg
    
    svg
      .selectAll(".line")
      .data([revenueData])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "#ded4f5")
      .attr('stroke-width',2)
      .attr("stroke", "#8862e0")
      .attr("d", d3.area()
        .x((value, index) => xScale(index))
        .y0(yScale(0))
        .y1((value, index) => yScale(value))
        );
      
    

    svg
      .selectAll(".dot")
      .data(revenueData)
      .enter()
      .append("circle")
      .attr("r", 3)
      .attr("fill", "#fff")
      .attr("stroke", "#8862e0")
      .attr("cx", (value, index) => xScale(index))
      .attr("cy", (value, index) => yScale(value))
      .on("mouseover", (event, d) => {
        // Show tooltip on mouseover
        const tooltip = d3.select("#tooltip")
          .style("display", "block")
          .style("top", event.pageY + "px")
          .style("left", event.pageX + "px");

        // Populate tooltip with data
        tooltip.select("#x-value")
          .text(d.x);

        tooltip.select("#y-value")
          .text(d.y);
      })
      .on("mouseout", () => {
        // Hide tooltip on mouseout
        d3.select("#tooltip")
          .style("display", "none");
      });

    svg
      .selectAll(".line")
      .data([salesData])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "#d0faec")
      .attr('stroke-width',2)
      .attr("stroke", "#19d895")
      .attr("d", d3.area()
        .x((value, index) => xScale(index))
        .y0(yScale(0))
        .y1((value, index) => yScale(value))
        );

    svg
      .selectAll(".dot")
      .data(salesData)
      .enter()
      .append("circle")
      .attr("r", 3)
      .attr("fill", "#fff")
      .attr("stroke", "#19d895")
      .attr("cx", (value, index) => xScale(index))
      .attr("cy", (value, index) => yScale(value))
      .on("mouseover", (event, d) => {
        // Show tooltip on mouseover
        const tooltip = d3.select("#tooltip")
          .style("display", "block")
          .style("top", event.pageY + "px")
          .style("left", event.pageX + "px");

        // Populate tooltip with data
        tooltip.select("#x-value")
          .text(d.x);

        tooltip.select("#y-value")
          .text(d.y);
      })
      .on("mouseout", () => {
        // Hide tooltip on mouseout
        d3.select("#tooltip")
          .style("display", "none");
      });

  }, [revenueData, salesData]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <div id="tooltip" className="tooltip">
      <div>X: <span id="x-value"></span></div>
      <div>Y: <span id="y-value"></span></div>
    </div>
    </div>
  );
};
