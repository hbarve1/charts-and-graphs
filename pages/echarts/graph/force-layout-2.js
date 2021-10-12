/** @format */

import { useState, useEffect } from "react";

import ReactECharts from "../../../components/echarts/ReactECharts";

const Echarts = () => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api/echarts/json/les-miserables");
      const json = await res.json();

      json.nodes.forEach(function (node) {
        node.symbolSize = 5;
      });

      setOption({
        title: {
          text: "Les Miserables",
          subtext: "Default layout",
          top: "bottom",
          left: "right",
        },
        tooltip: {},
        legend: [
          {
            // selectedMode: 'single',
            data: json.categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        series: [
          {
            name: "Les Miserables",
            type: "graph",
            layout: "force",
            data: json.nodes,
            links: json.links,
            categories: json.categories,
            roam: true,
            label: {
              position: "right",
            },
            force: {
              repulsion: 100,
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
