/** @format */

import PageLayout from "../../components/pageLayout";

function BritechartsReact() {
  const list = [];

  return (
    <PageLayout
      {...{
        title: "britecharts-react",
        description: "britecharts-react",
        heading: (
          <>
            Welcome to <a href="#">britecharts-react</a>
          </>
        ),
        baseUrl: "/britecharts-react",
        list,
      }}
    />
  );
}

export default BritechartsReact;
