/** @format */

import PageLayout from "../../components/pageLayout";

function VX() {
  const list = [];

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
