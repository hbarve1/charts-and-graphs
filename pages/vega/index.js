/** @format */

import PageLayout from "../../components/pageLayout";

function Vega() {
  const list = [{title:"",value:0}];

  return (
    <PageLayout
      {...{
        title: "vega",
        description: "vega",
        heading: (
          <>
            Welcome to <a href="#">vega</a>
          </>
        ),
        baseUrl: "/vega",
        list,
      }}
    />
  );
}

export default Vega;
