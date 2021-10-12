/** @format */

import PageLayout from "../../components/pageLayout";

function Recharts() {
  const list = [
    "line-charts",
    "area-charts",
    "bar-charts",
    "composed-charts",
    "scatter-charts",
    "pie-charts",
    "radar-charts",
    "radial-bar-charts",
    "tree-map",
    "tooltip",
    "legend",
    "responsive-container",
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
