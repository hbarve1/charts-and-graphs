/** @format */

import PageLayout from "../../components/pageLayout";

function Billboard() {
  const list = [];

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
