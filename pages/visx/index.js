/** @format */

import PageLayout from "../../components/pageLayout";

function Visx() {
  const list = [];

  return (
    <PageLayout
      {...{
        title: "visx",
        description: "visx",
        heading: (
          <>
            Welcome to <a href="#">visx</a>
          </>
        ),
        baseUrl: "/visx",
        list,
      }}
    />
  );
}

export default Visx;
