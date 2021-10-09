/** @format */

import React from "react";
import BarChart from "../../components/d3/BarChart";

const data = [
  { year: 1980, efficiency: 24.3, sales: 8949000 },
  { year: 1985, efficiency: 27.6, sales: 10979000 },
  { year: 1990, efficiency: 28.1, sales: 9303000 },
  { year: 1991, efficiency: 28.4, sales: 8185000 },
  { year: 1992, efficiency: 27.9, sales: 8213000 },
  { year: 1993, efficiency: 28.4, sales: 8518000 },
  { year: 1994, efficiency: 28.3, sales: 8991000 },
  { year: 1995, efficiency: 28.6, sales: 8620000 },
  { year: 1996, efficiency: 28.5, sales: 8479000 },
  { year: 1997, efficiency: 28.7, sales: 8217000 },
  { year: 1998, efficiency: 28.8, sales: 8085000 },
  { year: 1999, efficiency: 28.3, sales: 8638000 },
  { year: 2000, efficiency: 28.5, sales: 8778000 },
  { year: 2001, efficiency: 28.8, sales: 8352000 },
  { year: 2002, efficiency: 29.1, sales: 8042000 },
  { year: 2003, efficiency: 29.5, sales: 7556000 },
  { year: 2004, efficiency: 29.5, sales: 7483000 },
  { year: 2005, efficiency: 30.3, sales: 7660000 },
  { year: 2006, efficiency: 30.1, sales: 7762000 },
  { year: 2007, efficiency: 31.2, sales: 7562000 },
  { year: 2008, efficiency: 31.5, sales: 6769000 },
  { year: 2009, efficiency: 32.9, sales: 5402000 },
  { year: 2010, efficiency: 33.9, sales: 5636000 },
  { year: 2011, efficiency: 33.1, sales: 6093000 },
  { year: 2012, efficiency: 35.3, sales: 7245000 },
  { year: 2013, efficiency: 36.4, sales: 7586000 },
  { year: 2014, efficiency: 36.5, sales: 7708000 },
  { year: 2015, efficiency: 37.2, sales: 7517000 },
  { year: 2016, efficiency: 37.7, sales: 6873000 },
  { year: 2017, efficiency: 39.4, sales: 6081000 },
];

function App() {
  return (
    <div className="App">
      <BarChart data={data} />
      <BarChart
        data={[
          { name: "E", value: 0.12702 },
          { name: "T", value: 0.09056 },
          { name: "A", value: 0.08167 },
          { name: "O", value: 0.07507 },
          { name: "I", value: 0.06966 },
          { name: "N", value: 0.06749 },
          { name: "S", value: 0.06327 },
          { name: "H", value: 0.06094 },
          { name: "R", value: 0.05987 },
          { name: "D", value: 0.04253 },
          { name: "L", value: 0.04025 },
          { name: "C", value: 0.02782 },
          { name: "U", value: 0.02758 },
          { name: "M", value: 0.02406 },
          { name: "W", value: 0.0236 },
          { name: "F", value: 0.02288 },
          { name: "G", value: 0.02015 },
          { name: "Y", value: 0.01974 },
          { name: "P", value: 0.01929 },
          { name: "B", value: 0.01492 },
          { name: "V", value: 0.00978 },
          { name: "K", value: 0.00772 },
          { name: "J", value: 0.00153 },
          { name: "X", value: 0.0015 },
          { name: "Q", value: 0.00095 },
          { name: "Z", value: 0.00074 },
        ]}
      />
    </div>
  );
}

export default App;
