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
        node.label = {
          show: node.symbolSize > 30,
        };
      });

      setOption({
        title: {
          text: "Les Miserables",
          subtext: "Circular layout",
          top: "bottom",
          left: "right",
        },
        tooltip: {},
        legend: [
          {
            data: json.categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "Les Miserables",
            type: "graph",
            layout: "circular",
            circular: {
              rotateLabel: true,
            },
            data: json.nodes,
            links: json.links,
            categories: json.categories,
            roam: true,
            label: {
              position: "right",
              formatter: "{b}",
            },
            lineStyle: {
              color: "source",
              curveness: 0.3,
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
