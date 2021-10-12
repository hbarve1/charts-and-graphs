/** @format */
// https://echarts.apache.org/examples/en/editor.html?c=line-draggable&theme=dark

import { useEffect } from "react";
import ReactECharts from "../../../components/echarts/ReactECharts";

// const symbolSize = 20;
// const data = [
//   [40, -10],
//   [-30, -5],
//   [-76.5, 20],
//   [-63.5, 40],
//   [-22.1, 50],
// ];

// const option = {
//   title: {
//     text: "Try Dragging these Points",
//     left: "center",
//   },
//   tooltip: {
//     triggerOn: "none",
//     formatter: function (params) {
//       return (
//         "X: " +
//         params.data[0].toFixed(2) +
//         "<br>Y: " +
//         params.data[1].toFixed(2)
//       );
//     },
//   },
//   grid: {
//     top: "8%",
//     bottom: "12%",
//   },
//   xAxis: {
//     min: -100,
//     max: 70,
//     type: "value",
//     axisLine: { onZero: false },
//   },
//   yAxis: {
//     min: -30,
//     max: 60,
//     type: "value",
//     axisLine: { onZero: false },
//   },
//   graphic: data.map(function (item, dataIndex) {
//     return {
//       type: "circle",
//       // position: myChart.convertToPixel("grid", item),
//       shape: {
//         cx: 0,
//         cy: 0,
//         r: symbolSize / 2,
//       },
//       invisible: true,
//       draggable: true,
//       ondrag: function (dx, dy) {
//         onPointDragging(dataIndex, [this.x, this.y]);
//       },
//       onmousemove: function () {
//         showTooltip(dataIndex);
//       },
//       onmouseout: function () {
//         hideTooltip(dataIndex);
//       },
//       z: 100,
//     };
//   }),
//   dataZoom: [
//     {
//       type: "slider",
//       xAxisIndex: 0,
//       filterMode: "none",
//     },
//     {
//       type: "slider",
//       yAxisIndex: 0,
//       filterMode: "none",
//     },
//     {
//       type: "inside",
//       xAxisIndex: 0,
//       filterMode: "none",
//     },
//     {
//       type: "inside",
//       yAxisIndex: 0,
//       filterMode: "none",
//     },
//   ],
//   series: [
//     {
//       id: "a",
//       type: "line",
//       smooth: true,
//       symbolSize: symbolSize,
//       data: data,
//     },
//   ],
// };

// const events = {
//   dataZoom: (params, chart) => {
//     chart.setOption({
//       graphic: data.map(function (item, dataIndex) {
//         return {
//           position: chart.convertToPixel("grid", item),
//         };
//       }),
//     });
//   },
// };

// function showTooltip(dataIndex) {
//   myChart.dispatchAction({
//     type: "showTip",
//     seriesIndex: 0,
//     dataIndex: dataIndex,
//   });
// }
// function hideTooltip(dataIndex) {
//   myChart.dispatchAction({
//     type: "hideTip",
//   });
// }
// function onPointDragging(dataIndex, pos) {
//   data[dataIndex] = myChart.convertFromPixel("grid", pos);
//   // Update data
//   myChart.setOption({
//     series: [
//       {
//         id: "a",
//         data: data,
//       },
//     ],
//   });
// }

// @TODO: Complete this

const Echarts = () => {
  // useEffect(() => {}, []);

  return (
    <div>
      This needs some extra work
      {/* <ReactECharts
        option={option}
        zRenderEvents={events}
        style={{
          height: "500px",
        }}
      /> */}
    </div>
  );
};

export default Echarts;
