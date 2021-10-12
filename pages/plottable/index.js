/** @format */

import PageLayout from "../../components/pageLayout";

function Plottable() {
  const list = [];

  return (
    <PageLayout
      {...{
        title: "Plottable",
        description: "Plottable",
        heading: (
          <>
            Welcome to <a href="#">Plottable</a>
          </>
        ),
        baseUrl: "/plottable",
        list,
      }}
    />
  );
}

export default Plottable;
