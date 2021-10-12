/** @format */
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
      const res = await fetch("/api/echarts/json/confidence-band");
      const json = await res.json();

      var base = -json.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l));
      }, Infinity);

      setOption({
        title: {
          text: "Confidence Band",
          subtext: "Example in MetricsGraphics.js",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            animation: false,
            label: {
              backgroundColor: "#ccc",
              borderColor: "#aaa",
              borderWidth: 1,
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              color: "#222",
            },
          },
          formatter: function (params) {
            return (
              params[2].name +
              "<br />" +
              ((params[2].value - base) * 100).toFixed(1) +
              "%"
            );
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: json.map(function (item) {
            return item.date;
          }),
          axisLabel: {
            formatter: function (value, idx) {
              var date = new Date(value);
              return idx === 0
                ? value
                : [date.getMonth() + 1, date.getDate()].join("-");
            },
          },
          boundaryGap: false,
        },
        yAxis: {
          axisLabel: {
            formatter: function (val) {
              return (val - base) * 100 + "%";
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return ((params.value - base) * 100).toFixed(1) + "%";
              },
            },
          },
          splitNumber: 3,
        },
        series: [
          {
            name: "L",
            type: "line",
            data: json.map(function (item) {
              return item.l + base;
            }),
            lineStyle: {
              opacity: 0,
            },
            stack: "confidence-band",
            symbol: "none",
          },
          {
            name: "U",
            type: "line",
            data: json.map(function (item) {
              return item.u - item.l;
            }),
            lineStyle: {
              opacity: 0,
            },
            areaStyle: {
              color: "#ccc",
            },
            stack: "confidence-band",
            symbol: "none",
          },
          {
            type: "line",
            data: json.map(function (item) {
              return item.value + base;
            }),
            itemStyle: {
              color: "#333",
            },
            showSymbol: false,
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
          height: "500px",
        }}
      />
    </div>
  );
};

export default Echarts;
