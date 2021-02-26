import React, { useState, useEffect } from 'react';
import Column from '@ant-design/charts/lib/column';

const DemoColumn = () => {
  var data = [
    {
      month: '1',
      value: 1078,
    },
    {
      month: '2',
      value: 1216,
    },
    {
      month: '3',
      value: 758,
    },
    {
      month: '4',
      value: 623,
    },
    {
      month: '5',
      value: 319,
    },
    {
      month: '6',
      value: 422,
    },
    {
      month: '7',
      value: -4,
    },
    {
      month: '8',
      value: -217,
    },
    {
      month: '9',
      value: -358,
    },
    {
      month: '10',
      value: 1513,
    },
    {
      month: '11',
      value: 1388,
    },
    {
      month: '12',
      value: 597,
    },
  ];
  var config = {
    data: data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    meta: {
      value: {
        max: 2000,
        min: -1000,
      },
      month: {
        formatter: function formatter(val) {
          return ''.concat(val, ' 月');
        },
      },
    },
    annotations: [
      {
        type: 'region',
        start: function start(xScale) {
          var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
          var x = xScale.scale('7') - ratio / 2;
          return [''.concat(x * 100, '%'), '0%'];
        },
        end: function end(xScale) {
          var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
          var x = xScale.scale('9') + ratio / 2;
          return [''.concat(x * 100, '%'), '100%'];
        },
      },
    ],
  };
  return <Column {...config} />;
};

export default DemoColumn;