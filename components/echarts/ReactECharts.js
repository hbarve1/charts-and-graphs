/** @format */

/**
 * Refernces:
 * https://github.com/hustcc/echarts-for-react
 */

import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";
import { init, getInstanceByDom } from "echarts";

function ReactECharts({
  option,
  style,
  settings,
  loading,
  theme,
  events,
  zRenderEvents,
}) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize chart
    let chart;

    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize();
    }

    // Attatch all the chart events on 'chart'
    Object.keys(events).forEach((eventName) => {
      const func = events[eventName];

      chart.on(eventName, (params) => func(params, chart));
    });

    // Attach all the zRender events on 'zr'
    const zr = chart.getZr();

    Object.keys(zRenderEvents).forEach((eventName) => {
      const func = zRenderEvents[eventName];

      zr.on(eventName, (params) => func(params, chart));
    });

    // Configure for resize of chart
    window.addEventListener("resize", resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart.setOption(option, settings);
    }
  }, [option, settings, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);

      loading === true ? chart.showLoading() : chart.hideLoading();
    }
  }, [loading, theme]);

  return (
    <div ref={chartRef} style={{ width: "100%", height: "400px", ...style }} />
  );
}

ReactECharts.defaultProps = {
  events: {},
  zRenderEvents: {},
};

export default ReactECharts;
