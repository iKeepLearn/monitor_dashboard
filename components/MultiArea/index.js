import React from 'react';
import Area from "@ant-design/charts/lib/area";

const DemoArea = ({ data }) => {
  var config = {
    data,
    xField: 'height',
    yField: 'burn_fee',
    seriesField: 'address',
    yAxis: {
      nice: true,
      line: { style: { stroke: "#e1e9ef" } },
      label: null
    },
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: { isArea: true }
    }

  };
  return <Area {...config} />;
};


export default DemoArea;