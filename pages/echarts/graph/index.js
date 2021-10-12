/** @format */

import PageLayout from "../../../components/pageLayout";

export default function Home() {
  const list = [
    "force-layout",
    "graph-on-cartesian",
    "simple-graph",
    "force-layout-2",
    "hide-overlapped-label",
    "les-miserables",
    "les-miserables-2",
    "graph-dynamic",
    "graph-life-expectancy",
    "graph-webkit-dep",
    "npm-dependencies",
    "calendar-graph",
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
        baseUrl: "/echarts/graph",
        list,
      }}
    />
  );
}
