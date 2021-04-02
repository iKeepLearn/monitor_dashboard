import React, { useState, useEffect } from 'react';
import Line from '@ant-design/charts/lib/line';

const DemoLine = ({data}) => {
  var config = {
    data: data,
    xField: 'height',
    yField: 'fee',
    seriesField: 'address',
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return ''.concat(v, ' Sats');
        },
      },
    },
    legend: { position: 'top' },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 3000,
      },
    },
  };
  return <Line {...config} />;
};
export default DemoLine;