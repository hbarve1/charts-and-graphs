/** @format */

import PageLayout from "../../components/pageLayout";

function Plottable() {
  const list = [{title:"",value:0}];

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
