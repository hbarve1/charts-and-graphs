/** @format */

import React from "react";
import RadialTidyChart from "../../components/d3/RadialTidyChart";

const data = [];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RadialTidyChart data={data} />
      </header>
    </div>
  );
}

export default App;
