/** @format */

import PageLayout from "../../components/pageLayout";

function Billboard() {
  const list = [{title:"",value:0}];

  return (
    <PageLayout
      {...{
        title: "Billboard",
        description: "Billboard",
        heading: (
          <>
            Welcome to <a href="#">Billboard</a>
          </>
        ),
        baseUrl: "/billboard",
        list,
      }}
    />
  );
}

export default Billboard;
