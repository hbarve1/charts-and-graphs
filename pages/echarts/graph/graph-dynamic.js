/** @format */

import { useState, useEffect, useRef } from "react";
import { getInstanceByDom } from "echarts";

import ReactECharts from "../../../components/echarts/ReactECharts";

const Echarts = () => {
  const chartRef = useRef(null);

  let data = [
    {
      fixed: true,
      // x: myChart.getWidth() / 2,
      // y: myChart.getHeight() / 2,
      x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
      y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
      // x: 0,
      // y: 0,
      symbolSize: 20,
      id: "-1",
    },
  ];
  const edges = [];

  const [option, setOption] = useState({
    series: [
      {
        type: "graph",
        layout: "force",
        animation: false,
        data: data,
        force: {
          // initLayout: 'circular'
          // gravity: 0
          repulsion: 100,
          edgeLength: 5,
        },
        edges: edges,
      },
    ],
  });

  useEffect(() => {
    // const chart = getInstanceByDom(chartRef.current);

    // console.log(data);

    const interval = setInterval(function () {
      data.push({
        id: data.length + "",
      });
      var source = Math.round((data.length - 1) * Math.random());
      var target = Math.round((data.length - 1) * Math.random());
      if (source !== target) {
        edges.push({
          source: source,
          target: target,
        });
      }
      setOption({
        ...option,
        series: [
          ...option.series,
          {
            roam: true,
            data: data,
            edges: edges,
          },
        ],
      });

      console.log(data);
    }, 200);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ReactECharts
        ref={chartRef}
        option={option}
        style={{
          height: "100vh",
        }}
      />
    </div>
  );
};

export default Echarts;
