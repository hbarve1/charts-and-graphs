/** @format */

import PageLayout from "../../../components/pageLayout";

export default function Home() {
  const list = [];

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
        baseUrl: "/echarts/",
        list,
      }}
    />
  );
}
