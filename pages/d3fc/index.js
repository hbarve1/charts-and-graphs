/** @format */

import PageLayout from "../../components/pageLayout";

function D3fc() {
  const list = [{title:"",value:0}];

  return (
    <PageLayout
      {...{
        title: "d3fc",
        description: "d3fc",
        heading: (
          <>
            Welcome to <a href="#">D3 FC</a>
          </>
        ),
        baseUrl: "/d3fc",
        list,
      }}
    />
  );
}

export default D3fc;
