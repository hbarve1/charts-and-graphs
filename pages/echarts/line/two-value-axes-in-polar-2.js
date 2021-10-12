/** @format */

import ReactECharts from "../../../components/echarts/ReactECharts";

const data = [];
for (let i = 0; i <= 360; i++) {
  let t = (i / 180) * Math.PI;
  let r = Math.sin(2 * t) * Math.cos(2 * t);
  data.push([r, i]);
}
const option = {
  title: {
    text: "Two Value-Axes in Polar",
  },
  legend: {
    data: ["line"],
  },
  polar: {
    center: ["50%", "54%"],
  },
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
  radiusAxis: {
    min: 0,
  },
  series: [
    {
      coordinateSystem: "polar",
      name: "line",
      type: "line",
      showSymbol: false,
      data: data,
    },
  ],
  animationDuration: 10000,
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
