/** @format */

import ReactECharts from "../../../components/echarts/ReactECharts";

const symbolSize = 20;
const data = [
  [15, 0],
  [-50, 10],
  [-56.5, 20],
  [-46.5, 30],
  [-22.1, 40],
];
const option = {
  title: {
    text: "Click to Add Points",
  },
  tooltip: {
    formatter: function (params) {
      var data = params.data || [0, 0];
      return data[0].toFixed(2) + ", " + data[1].toFixed(2);
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    min: -60,
    max: 20,
    type: "value",
    axisLine: { onZero: false },
  },
  yAxis: {
    min: 0,
    max: 40,
    type: "value",
    axisLine: { onZero: false },
  },
  series: [
    {
      id: "a",
      type: "line",
      smooth: true,
      symbolSize: symbolSize,
      data: data,
    },
  ],
};

// NOTE: check this implementation for performance optimisation
const events = {
  click: (params, chart) => {
    const pointInPixel = [params.offsetX, params.offsetY];
    const pointInGrid = chart.convertFromPixel("grid", pointInPixel);

    if (chart.containPixel("grid", pointInPixel)) {
      data.push(pointInGrid);

      chart.setOption({
        series: [
          {
            id: "a",
            data: data,
          },
        ],
      });
    }
  },
  mousemove: (params, chart) => {
    const pointInPixel = [params.offsetX, params.offsetY];

    const zr = chart.getZr();

    zr.setCursorStyle(
      chart.containPixel("grid", pointInPixel) ? "copy" : "default"
    );
  },
};

const Echarts = () => {
  return (
    <div>
      <ReactECharts
        option={option}
        style={{
          height: "500px",
        }}
        zRenderEvents={events}
      />
    </div>
  );
};

export default Echarts;
