/** @format */

import { useState, useEffect } from "react";

import ReactECharts from "../../../components/echarts/ReactECharts";

const Echarts = () => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api/echarts/json/les-miserables");
      const json = await res.json();

      setOption({
        tooltip: {},
        legend: [
          {
            data: json.categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        series: [
          {
            name: "Les Miserables",
            type: "graph",
            layout: "none",
            data: json.nodes,
            links: json.links,
            categories: json.categories,
            roam: true,
            label: {
              show: true,
              position: "right",
              formatter: "{b}",
            },
            labelLayout: {
              hideOverlap: true,
            },
            scaleLimit: {
              min: 0.4,
              max: 2,
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
