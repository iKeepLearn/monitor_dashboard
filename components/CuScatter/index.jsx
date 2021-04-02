import React from "react";
import Scatter from "@ant-design/charts/lib/scatter";

const CuScatter = ({ data }) => {
  var config = {
    appendPadding: 30,
    data,
    xField: "height",
    yField: "fee",
    colorField: "address",
    color: "#d1d5db",
    size: 5,
    shape: "circle",
    yAxis: {
      nice: true,
      line: { style: { stroke: "#e1e9ef" } },
      label: null
    },
    xAxis: {
      grid: { line: { style: { stroke: "#eee" } } },
      line: { style: { stroke: "#e1e9ef" } },
    },
  };
  return <Scatter {...config} />;
};

export default CuScatter;
