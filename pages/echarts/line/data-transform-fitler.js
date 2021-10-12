/** @format */
// https://dev.to/maneetgoyal/using-apache-echarts-with-react-and-typescript-353k

import { useEffect, useState } from "react";

import ReactECharts from "../../../components/echarts/ReactECharts";

const Echarts = () => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api/echarts/data-transform-fitler");

      const json = await res.json();
      setOption({
        dataset: [
          {
            id: "dataset_raw",
            source: json,
          },
          {
            id: "dataset_since_1950_of_germany",
            fromDatasetId: "dataset_raw",
            transform: {
              type: "filter",
              config: {
                and: [
                  { dimension: "Year", gte: 1950 },
                  { dimension: "Country", "=": "Germany" },
                ],
              },
            },
          },
          {
            id: "dataset_since_1950_of_france",
            fromDatasetId: "dataset_raw",
            transform: {
              type: "filter",
              config: {
                and: [
                  { dimension: "Year", gte: 1950 },
                  { dimension: "Country", "=": "France" },
                ],
              },
            },
          },
        ],
        title: {
          text: "Income of Germany and France since 1950",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          nameLocation: "middle",
        },
        yAxis: {
          name: "Income",
        },
        series: [
          {
            type: "line",
            datasetId: "dataset_since_1950_of_germany",
            showSymbol: false,
            encode: {
              x: "Year",
              y: "Income",
              itemName: "Year",
              tooltip: ["Income"],
            },
          },
          {
            type: "line",
            datasetId: "dataset_since_1950_of_france",
            showSymbol: false,
            encode: {
              x: "Year",
              y: "Income",
              itemName: "Year",
              tooltip: ["Income"],
            },
          },
        ],
      });
    };

    get();
  }, []);

  return (
    <div>
      <ReactECharts
        option={option}
        style={{
          height: "500px",
        }}
      />
    </div>
  );
};

export default Echarts;
