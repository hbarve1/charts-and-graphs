/** @format */

import { useD3 } from "../../hooks/useD3";
import * as d3 from "d3";

function BarChart({ data }) {
  const ref = useD3(
    (svg) => {
      svg
        .append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
        .selectAll("path")
        // .data(root.links())
        .join("path")
        .attr(
          "d",
          d3
            .linkRadial()
            .angle((d) => d.x)
            .radius((d) => d.y)
        );

      svg
        .append("g")
        .selectAll("circle")
        // .data(root.descendants())
        .join("circle")
        .attr(
          "transform",
          (d) => `
        rotate(${(d.x * 180) / Math.PI - 90})
        translate(${d.y},0)
      `
        )
        .attr("fill", (d) => (d.children ? "#555" : "#999"))
        .attr("r", 2.5);

      svg
        .append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .selectAll("text")
        // .data(root.descendants())
        .join("text")
        .attr(
          "transform",
          (d) => `
        rotate(${(d.x * 180) / Math.PI - 90}) 
        translate(${d.y},0) 
        rotate(${d.x >= Math.PI ? 180 : 0})
      `
        )
        .attr("dy", "0.31em")
        .attr("x", (d) => (d.x < Math.PI === !d.children ? 6 : -6))
        .attr("text-anchor", (d) =>
          d.x < Math.PI === !d.children ? "start" : "end"
        )
        .text((d) => d.data.name)
        .clone(true)
        .lower()
        .attr("stroke", "white");
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default BarChart;
