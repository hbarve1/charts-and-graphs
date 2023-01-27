/** @format */

import PageLayout from "../../components/pageLayout";

function Recharts() {
  const list = [
    { title: "line-charts", value: 1 },
    { title: "area-charts", value: 1 },
    { title: "bar-charts", value: 1 },
    { title: "composed-charts", value: 1 },
    { title: "scatter-charts", value: 1 },
    { title: "pie-charts", value: 1 },
    { title: "radar-charts", value: 1 },
    { title: "radial-bar-charts", value: 1 },
    { title: "tree-map", value: 1 },
    { title: "tooltip", value: 1 },
    { title: "legend", value: 1 },
    { title: "responsive-container", value: 1 },
  ];

  return (
    <PageLayout
      {...{
        title: "Recharts",
        description: "Recharts Examples",
        heading: (
          <>
            Welcome to <a href="#">Recharts Examples</a>
          </>
        ),
        baseUrl: "/recharts",
        list,
      }}
    />
  );
}

export default Recharts;
