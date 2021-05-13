import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "styled-components/macro";

const TreeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export function Tree({ data, loading }) {
  const svgRef = useRef();
  const inputRef = useRef(null);

  useEffect(() => {
    let didCancel = false;
    if (data) {
      Network();
    }
    return () => (didCancel = true);
  }, [data, inputRef]);

  const Network = () => {
    const width = 1060;
    const height = 900;
    const root = d3.hierarchy(data);

    if (root.data.length === 0) return;

    const links = root.links();
    const nodes = root.descendants();

    nodes[0].fixed = true;
    nodes[0].x = -45;
    nodes[0].y = 10;

    const simulation = d3
      .forceSimulation(nodes)
      .force("radial", d3.forceRadial(360, width / 2, height / 2))
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(100)
          .strength(1)
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("font", "10px sans-serif")
      .append("g");

    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line");

    const node = svg.append("g").selectAll("g").data(nodes).join("g");

    node
      .append("rect")
      .attr("rx", (d) => (d.data.parent === null ? 32 : 20))
      .attr("ry", (d) => (d.data.parent === null ? 32 : 20))
      .attr("fill", (d) => (d.data.parent === null ? "#586577" : "#EFF3F9"))
      .attr("stroke", (d) => (d.data.parent === null ? "" : "#DFE3E8"))
      .attr("width", (d) => (d.data.parent === null ? 125 : 85))
      .attr("height", (d) => (d.data.parent === null ? 72 : 49));

    node
      .append("text")
      .attr("text-anchor", "start")
      .attr("alignment-baseline", "alphabetic")
      .attr("x", 40)
      .attr("y", 27)
      .attr("fill", (d) => (d.data.parent === null ? "white" : "black"))
      .text((d) => d.data.value)
      .clone(true)
      .lower();

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => `translate(${d.x - 50},${d.y - 30})`);
    });
    return svg.node();
  };

  return (
    <TreeContainer>
      <svg ref={svgRef}></svg>
    </TreeContainer>
  );
}
