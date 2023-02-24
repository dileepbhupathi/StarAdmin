import React, { useEffect, useRef } from "react";
import "./WebsiteAudienceMetricChart.scss";
// import * as d3 from 'd3'
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  scaleLinear,
  axisLeft,
  stackOrderAscending
} from "d3";
export const WebsiteAudienceMetricChart = ({data, keys, colors}) => {
  const svgRef = useRef();
  const yAxisRef = useRef();
  const wrapperRef = useRef();
  // const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current).style('margin-top','30').style('margin-left','30');
    const yAxisSvg = select(yAxisRef.current);
    const  width = 180
    const height = 155

    // stacks / layers
    // Create the stack and group it so that the smallest values are on the bottom
    const stackGenerator = stack().keys(keys).order(stackOrderAscending);
    const layers = stackGenerator(data);

    // This is our min/max values

    // scales
    const xScale = scaleBand()
      .domain(data.map((d) => d.key))
      .range([0, 200])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0,600])
      .range([150, 0]);

    // rendering
    svg
      .attr("width", data.length * 35)
      .attr("height", height)
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (layer) => colors[layer.key])
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("class", "data-bar")
      .attr("x", (sequence) => xScale(sequence.data.key))
      .attr("width", xScale.bandwidth())
      .attr("y", (sequence) => yScale(sequence[1]))
      .attr("height", (sequence) => {
        if (!isNaN(sequence[0]) && !isNaN(sequence[1])) {
          return yScale(sequence[0]) - yScale(sequence[1]);
        } else {
          return 0;
        }
      });

    // axes
    const xAxis = axisBottom(xScale).ticks(keys.map(k => k));
    svg.select('.x-axis').call(xAxis)
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height + 50})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)");

    const yAxis = axisLeft(yScale).ticks(4);
    yAxisSvg.select(".y-axis").attr("height", height).call(yAxis);
  }, [colors, data, keys]);
  return (
    <div ref={wrapperRef} className="svg-wrap">
        <div className="x-axis-scroll">
          <svg className="energy-svg" ref={svgRef}>
            <g className="x-axis" />
            <g className="y-axis"></g>
          </svg>
        </div>
      </div>
  );
};
