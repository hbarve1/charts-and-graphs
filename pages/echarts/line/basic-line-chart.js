/** @format */
// https://dev.to/maneetgoyal/using-apache-echarts-with-react-and-typescript-353k

import ReactECharts from "../../../components/echarts/ReactECharts";

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
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
