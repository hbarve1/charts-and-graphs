/** @format */

import { useState, useEffect } from "react";

import ReactECharts from "../../../components/echarts/ReactECharts";

const Echarts = () => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api/echarts/json/npm-dep-graph");
      const json = await res.json();

      setOption({
        title: {
          text: "NPM Dependencies",
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "none",
            // progressiveThreshold: 700,
            data: json.nodes.map(function (node) {
              return {
                x: node.x,
                y: node.y,
                id: node.id,
                name: node.label,
                symbolSize: node.size,
                itemStyle: {
                  color: node.color,
                },
              };
            }),
            edges: json.edges.map(function (edge) {
              return {
                source: edge.sourceID,
                target: edge.targetID,
              };
            }),
            emphasis: {
              focus: "adjacency",
              label: {
                position: "right",
                show: true,
              },
            },
            roam: true,
            lineStyle: {
              width: 0.5,
              curveness: 0.3,
              opacity: 0.7,
            },
          },
        ],
      });
    };

    get();
  }, []);

  return (
    <div>
      <ReactECharts
        option={option}
        style={{
          height: "100vh",
        }}
      />
    </div>
  );
};

export default Echarts;
