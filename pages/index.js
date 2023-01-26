/** @format */

import PageLayout from "../components/pageLayout";

function ChartsAndGraphs() {
  const list = [
    "recharts",
    "echarts",
    "d3",
    "plottable",
    "billboard",
    "d3fc",
    "vx",
    "britecharts-react",
    "vega",
    "nivo",
    "visx",
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
