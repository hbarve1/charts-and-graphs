/** @format */

// https://dev.to/maneetgoyal/using-apache-echarts-with-react-and-typescript-353k

import PageLayout from "../../components/pageLayout";

export default function Home() {
  const list = [
    { title: "line", value: 1 },
    { title: "bar", value: 0 },
    { title: "pie", value: 0 },
    { title: "scatter", value: 0 },
    { title: "geo-map", value: 0 },
    { title: "candlestick", value: 0 },
    { title: "radar", value: 0 },
    { title: "boxplot", value: 0 },
    { title: "heatmap", value: 0 },
    { title: "graph", value: 0 },
    { title: "lines", value: 0 },
    { title: "tree", value: 0 },
    { title: "treemap", value: 0 },
    { title: "sunburst", value: 0 },
    { title: "parallel", value: 0 },
    { title: "sankey", value: 0 },
    { title: "funnel", value: 0 },
    { title: "gauge", value: 0 },
    { title: "pictorial-bar", value: 0 },
    { title: "theme-river", value: 0 },
    { title: "calender", value: 0 },
    { title: "custom", value: 0 },
    { title: "dataset", value: 0 },
    { title: "data-zoom", value: 0 },
    { title: "drag", value: 0 },
    { title: "rich-text", value: 0 },
    { title: "3d-globe", value: 0 },
    { title: "3d-bar", value: 0 },
    { title: "3d-scatter", value: 0 },
    { title: "3d-surface", value: 0 },
    { title: "3d-map", value: 0 },
    { title: "3d-lines", value: 0 },
    { title: "3d-line", value: 0 },
    { title: "scatter-gl", value: 0 },
    { title: "lines-gl", value: 0 },
    { title: "flow-gl", value: 0 },
    { title: "graph-gl", value: 0 },
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
