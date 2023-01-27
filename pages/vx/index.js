/** @format */

import PageLayout from "../../components/pageLayout";

function VX() {
  const list = [{title:""}];

  return (
    <PageLayout
      {...{
        title: "vx",
        description: "vx",
        heading: (
          <>
            Welcome to <a href="#">vx</a>
          </>
        ),
        baseUrl: "/vx",
        list,
      }}
    />
  );
}

export default VX;
