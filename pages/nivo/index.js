/** @format */

import PageLayout from "../../components/pageLayout";

function Nivo() {
  const list = [{title:"",value:0}];

  return (
    <PageLayout
      {...{
        title: "nivo",
        description: "nivo",
        heading: (
          <>
            Welcome to <a href="#">nivo</a>
          </>
        ),
        baseUrl: "/nivo",
        list,
      }}
    />
  );
}

export default Nivo;
