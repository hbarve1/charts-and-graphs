/** @format */

import { useState, useEffect } from "react";

import ReactECharts from "../../../components/echarts/ReactECharts";

const Echarts = () => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api/echarts/json/webkit-dep");
      const json = await res.json();

      setOption({
        legend: {
          data: ["HTMLElement", "WebGL", "SVG", "CSS", "Other"],
        },
        series: [
          {
            type: "graph",
            layout: "force",
            animation: false,
            label: {
              position: "right",
              formatter: "{b}",
            },
            draggable: true,
            data: json.nodes.map(function (node, idx) {
              node.id = idx;
              return node;
            }),
            categories: json.categories,
            force: {
              edgeLength: 5,
              repulsion: 20,
              gravity: 0.2,
            },
            edges: json.links,
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
