/** @format */

import ReactECharts from "../../../components/echarts/ReactECharts";

const data = [];
for (let i = 0; i <= 100; i++) {
  let theta = (i / 100) * 360;
  let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
  data.push([r, theta]);
}
const option = {
  title: {
    text: "Two Value-Axes in Polar",
  },
  legend: {
    data: ["line"],
  },
  polar: {},
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  angleAxis: {
    type: "value",
    startAngle: 0,
  },
  radiusAxis: {},
  series: [
    {
      coordinateSystem: "polar",
      name: "line",
      type: "line",
      data: data,
    },
  ],
};

const Echarts = () => {
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
