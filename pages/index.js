/** @format */

import PageLayout from "../components/pageLayout";

function ChartsAndGraphs() {
  const list = [
    "d3",
    "recharts",
    "echarts",
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
