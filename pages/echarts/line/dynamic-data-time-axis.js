/** @format */
// https://echarts.apache.org/examples/en/editor.html?c=dynamic-data2&theme=dark
import { useEffect, useState } from "react";

import ReactECharts from "../../../components/echarts/ReactECharts";

const data = [];
let now = new Date(1997, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;

function randomData() {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;

  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
      Math.round(value),
    ],
  };
}

for (let i = 0; i < 1000; i++) {
  data.push(randomData());
}

const Echarts = () => {
  const [option, setOption] = useState({
    title: {
      text: "Dynamic Data & Time Axis",
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);

        return `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()} : ${params.value[1]}`;
      },
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Fake Data",
        type: "line",
        showSymbol: false,
        data: data,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(function () {
      for (let i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }

      setOption({
        ...option,
        series: [
          {
            ...option.series[0],
            data: data,
          },
        ],
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
