/** @format */

import ReactECharts from "../../../components/echarts/ReactECharts";

const option = {
  xAxis: {},
  yAxis: {},
  series: [
    {
      data: [
        [10, 40],
        [60, 100],
        [40, 20],
      ],
      type: "line",
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
