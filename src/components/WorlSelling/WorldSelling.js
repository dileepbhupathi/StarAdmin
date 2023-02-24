import "./WorldSelling.scss";
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { WorldSellingData } from "../../Constants/WorldSellingData";
// import * as topojson from "topojson-client";

export const WorldSelling = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Define the dimensions of the SVG container
    const width = 310;
    const height = 300;

    // Create the SVG container
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style('overflow-y','scroll');

    // Define the projection
    const projection = d3
      .geoNaturalEarth1()
      .translate([width / 2, height / 2])
      .scale(150);

    // Define the path generator
    const path = d3.geoPath().projection(projection);

    // Load the world map data

    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    ).then((data) => {
      // const countries = topojson.feature(data, data.objects.countries);

      // Draw the map
      svg
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "lightgray")
        .attr("stroke", "white");
    });
  }, []);

  return (
    <div className="world-selling-container">
      <h1 className="world-selling-title">World Selling</h1>
      <div className="world-selling-map-container">
        <svg ref={svgRef} />
      </div>
      <div className="world-selling-content-container">
        {WorldSellingData.map((each) => (
          <div key={each.id} className="world-selling-states-and-values-content-container">
            <h1 className="world-selling-state">{each.state}</h1>
            <div className="world-selling-values-profit-container">
              <p className="world-selling-value">{each.value}</p>
              <p className="world-selling-profit">{each.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
