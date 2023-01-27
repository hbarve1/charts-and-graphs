/** @format */

import PageLayout from "../components/pageLayout";

function ChartsAndGraphs() {
  const list = [
    { title: "recharts", value: 1 },
    { title: "d3", value: 0 },
    { title: "echarts", value: 0 },
    { title: "plottable", value: 0 },
    { title: "billboard", value: 0 },
    { title: "d3fc", value: 0 },
    { title: "vx", value: 0 },
    { title: "britecharts-react", value: 0 },
    { title: "vega", value: 0 },
    { title: "nivo", value: 0 },
    { title: "visx", value: 0 },
  ];

  return (
    <PageLayout
      {...{
        title: "Charts and Graphs",
        description: "Charts and Graphs",
        heading: (
          <>
            Welcome to <a href="#">Charts and Graphs</a>
          </>
        ),
        baseUrl: "",
        list,
      }}
    />
  );
}

export default ChartsAndGraphs;
