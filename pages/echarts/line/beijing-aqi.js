/** @format */
// https://dev.to/maneetgoyal/using-apache-echarts-with-react-and-typescript-353k

import { useState, useEffect } from "react";
import ReactECharts from "../../../components/echarts/ReactECharts";

const option = {
  dataset: {
    source: [
      ["Commodity", "Owned", "Financed"],
      ["Commodity 1", 4, 1],
      ["Commodity 2", 2, 4],
      ["Commodity 3", 3, 6],
      ["Commodity 4", 5, 3],
    ],
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Owned", "Financed"],
  },
  grid: {
    left: "10%",
    right: "0%",
    top: "20%",
    bottom: "0%",
  },
  xAxis: {
    type: "value",
  },
  yAxis: {
    type: "category",
  },
  series: [
    {
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
    },
    {
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
    },
  ],
};

const Echarts = () => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api/echarts/beijing-aqi");
      const json = await res.json();

      setOption({
        title: {
          text: "Beijing AQI",
          left: "1%",
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "5%",
          right: "15%",
          bottom: "10%",
        },
        xAxis: {
          data: json.map(function (item) {
            return item[0];
          }),
        },
        yAxis: {},
        toolbox: {
          right: 10,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        dataZoom: [
          {
            startValue: "2014-06-01",
          },
          {
            type: "inside",
          },
        ],
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "#93CE07",
            },
            {
              gt: 50,
              lte: 100,
              color: "#FBDB0F",
            },
            {
              gt: 100,
              lte: 150,
              color: "#FC7D02",
            },
            {
              gt: 150,
              lte: 200,
              color: "#FD0100",
            },
            {
              gt: 200,
              lte: 300,
              color: "#AA069F",
            },
            {
              gt: 300,
              color: "#AC3B2A",
            },
          ],
          outOfRange: {
            color: "#999",
          },
        },
        series: {
          name: "Beijing AQI",
          type: "line",
          data: json.map(function (item) {
            return item[1];
          }),
          markLine: {
            silent: true,
            lineStyle: {
              color: "#333",
            },
            data: [
              {
                yAxis: 50,
              },
              {
                yAxis: 100,
              },
              {
                yAxis: 150,
              },
              {
                yAxis: 200,
              },
              {
                yAxis: 300,
              },
            ],
          },
        },
      });
    };

    get();
  }, []);

  return (
    <div>
      <ReactECharts
        option={option}
        style={{
          height: "500px",
        }}
      />
    </div>
  );
};

export default Echarts;
