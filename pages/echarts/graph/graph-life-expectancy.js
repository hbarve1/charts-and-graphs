/** @format */

import { useState, useEffect } from "react";

import ReactECharts from "../../../components/echarts/ReactECharts";

const Echarts = () => {
  const series = [];
  const [option, setOption] = useState({});

  useEffect(() => {
    const get = async () => {
      const res = await fetch("/api/echarts/json/life-expectancy");
      const json = await res.json();

      json.counties.forEach(function (country) {
        const data = json.series.map(function (yearData) {
          const item = yearData.filter(function (item) {
            return item[3] === country;
          })[0];

          return {
            label: {
              show: +item[4] % 20 === 0 && +item[4] > 1940,
              position: "top",
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            name: item[4],
            value: item,
          };
        });
        var links = data.map(function (item, idx) {
          return {
            source: idx,
            target: idx + 1,
          };
        });
        links.pop();
        series.push({
          name: country,
          type: "graph",
          coordinateSystem: "cartesian2d",
          data: data,
          links: links,
          edgeSymbol: ["none", "arrow"],
          edgeSymbolSize: 5,
          legendHoverLink: false,
          lineStyle: {
            color: "#333",
          },
          itemStyle: {
            borderWidth: 1,
            borderColor: "#333",
          },
          label: {
            color: "#333",
            position: "right",
          },
          symbolSize: 10,
          animationDelay: function (idx) {
            return idx * 100;
          },
        });
      });

      setOption({
        visualMap: {
          show: false,
          min: 0,
          max: 100,
          dimension: 1,
        },
        legend: {
          data: json.counties,
          selectedMode: "single",
          right: 100,
        },
        grid: {
          left: 0,
          bottom: 0,
          containLabel: true,
          top: 80,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "value",
          scale: true,
        },
        toolbox: {
          feature: {
            dataZoom: {},
          },
        },
        dataZoom: {
          type: "inside",
        },
        series: series,
      });
    };

    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ReactECharts
        option={option}
        style={{
          height: "100vh",
        }}
      />
    </div>
  );
};

export default Echarts;
