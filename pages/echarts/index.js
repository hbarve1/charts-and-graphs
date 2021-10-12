/** @format */

// https://dev.to/maneetgoyal/using-apache-echarts-with-react-and-typescript-353k

import PageLayout from "../../components/pageLayout";

export default function Home() {
  const list = [
    "line",
    "bar",
    "pie",
    "scatter",
    "geo-map",
    "candlestick",
    "radar",
    "boxplot",
    "heatmap",
    "graph",
    "lines",
    "tree",
    "treemap",
    "sunburst",
    "parallel",
    "sankey",
    "funnel",
    "gauge",
    "pictorial-bar",
    "theme-river",
    "calender",
    "custom",
    "dataset",
    "data-zoom",
    "drag",
    "rich-text",
    "3d-globe",
    "3d-bar",
    "3d-scatter",
    "3d-surface",
    "3d-map",
    "3d-lines",
    "3d-line",
    "scatter-gl",
    "lines-gl",
    "flow-gl",
    "graph-gl",
  ];

  return (
    <PageLayout
      {...{
        title: "Apache Echarts",
        description: "Apache Echarts Examples",
        heading: (
          <>
            Welcome to <a href="#">Apache Echarts Examples</a>
          </>
        ),
        baseUrl: "/echarts",
        list,
      }}
    />
  );
}
