/** @format */
// https://echarts.apache.org/examples/en/editor.html?c=line-race&theme=dark

import { useState, useEffect } from "react";

import ReactECharts from "../../../components/echarts/ReactECharts";

const countries = [
  "Finland",
  "France",
  "Germany",
  "Iceland",
  "Norway",
  "Poland",
  "Russia",
  "United Kingdom",
];

const datasetWithFilters = [];
const seriesList = [];

countries.forEach((country) => {
  const datasetId = `dataset_${country}`;

  datasetWithFilters.push({
    id: datasetId,
    fromDatasetId: "dataset_raw",
    transform: {
      type: "filter",
      config: {
        and: [
          { dimension: "Year", gte: 1950 },
          { dimension: "Country", "=": country },
        ],
      },
    },
  });

  seriesList.push({
    type: "line",
    datasetId: datasetId,
    showSymbol: false,
    name: country,
    endLabel: {
      show: true,
      formatter: function (params) {
        return params.value[3] + ": " + params.value[0];
      },
    },
    labelLayout: {
      moveOverlap: "shiftY",
    },
    emphasis: {
      focus: "series",
    },
    encode: {
      x: "Year",
      y: "Income",
      label: ["Country", "Income"],
      itemName: "Year",
      tooltip: ["Income"],
    },
  });
});

const option = {
  animationDuration: 10000,
  dataset: [...datasetWithFilters],
  title: {
    text: "Income of Germany and France since 1950",
  },
  tooltip: {
    order: "valueDesc",
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    nameLocation: "middle",
  },
  yAxis: {
    name: "Income",
  },
  grid: {
    right: 140,
  },
  series: seriesList,
};

const Echarts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [json, setJson] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api/echarts/json/life-expectancy-table");
      const json = await res.json();

      setJson(json);
      setIsLoading(false);
    };

    get();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {!isLoading && (
        <ReactECharts
          option={{
            ...option,
            dataset: [
              {
                id: "dataset_raw",
                source: json,
              },
              ...datasetWithFilters,
            ],
          }}
          loading={isLoading}
          style={{
            height: "500px",
          }}
        />
      )}
    </div>
  );
};

export default Echarts;
